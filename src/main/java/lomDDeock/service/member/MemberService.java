package lomDDeock.service.member;

import lomDDeock.dto.member.MemberDTO;
import lomDDeock.dto.member.MemberProvider;
import lomDDeock.dto.member.MemberRole;
import lomDDeock.dto.member.SignUpForm;
import lomDDeock.dto.util.JwtDTO;
import lomDDeock.entity.member.MemberEntity;
import lomDDeock.repository.member.MemberRepository;
import lomDDeock.util.JwtIssuer;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService implements UserDetailsService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtIssuer jwtIssuer;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return getMemberByEmail(email);
    }

    public MemberDTO signUp(SignUpForm form) {
        if(memberRepository.existsByEmail(form.getEmail())){
            throw new RuntimeException("사용중인 이메일입니다.");
        }
        return memberRepository.save(MemberEntity.builder()
                .email(form.getEmail())
                .password(passwordEncoder.encode(form.getPassword()))
                .role(MemberRole.USER)
                .provider(MemberProvider.LOCAL)
                .build()).toDTO();
    }

    public JwtDTO signIn(SignUpForm form) {
        MemberDTO member = getMemberByEmail(form.getEmail());

        if (!passwordEncoder.matches(form.getPassword(), member.getPassword())) {
            throw new BadCredentialsException("일치하는 정보가 없습니다.");
        }

        return jwtIssuer.createToken(member.getEmail(), member.getRole().name());
    }

    private MemberDTO getMemberByEmail(String email) {
        return memberRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("일치하는 정보가 없습니다.")).toDTO();
    }

    public JwtDTO socialSignIn(SignUpForm form) {
        MemberDTO member;
        try {
            member = getMemberByEmail(form.getEmail());
        }catch (UsernameNotFoundException e) {
            member = memberRepository.save(MemberDTO.builder()
                    .email(form.getEmail())
                    .role(MemberRole.USER)
                    .provider(MemberProvider.KAKAO)
                    .build().toEntity()).toDTO();
        }

        return jwtIssuer.createToken(member.getEmail(), member.getRole().name());
    }
}