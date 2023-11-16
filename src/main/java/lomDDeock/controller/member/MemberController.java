package lomDDeock.controller.member;

import lomDDeock.dto.member.MemberDTO;
import lomDDeock.dto.member.SignUpForm;
import lomDDeock.dto.util.JwtDTO;
import lomDDeock.service.member.MemberService;
import lomDDeock.service.member.SocialLoginService;
import lomDDeock.util.JwtIssuer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MemberController {
    private final MemberService memberService;
    private final SocialLoginService socialLoginService;
    private final JwtIssuer jwtIssuer;

    // 일반 회원가입
    @PostMapping("/local/signup")
    public ResponseEntity<MemberDTO> localSignUp(@RequestBody MemberDTO dto){
        return ResponseEntity.ok(memberService.localSignUp(dto));
    }

    // 소셜 회원가입
    @PostMapping("/social/signup")
    public ResponseEntity<MemberDTO> socialSignUp(@RequestBody SignUpForm form){
        return ResponseEntity.ok(memberService.socialSignUp(form));
    }

    // 일반 로그인
    @PostMapping("/local/signin")
    public ResponseEntity<JwtDTO> localSignIn(@RequestBody SignUpForm form){
        return ResponseEntity.ok(memberService.localSignIn(form));
    }

    // 소셜 로그인
    @PostMapping("/social/signin")
    public ResponseEntity<JwtDTO> socialSignIn(@RequestBody SignUpForm form){
        return ResponseEntity.ok(memberService.socialSignIn(form));
    }

    // 등록된 이메일인지 확인
    @GetMapping("/checkEmail")
    public ResponseEntity<Boolean> checkEmail(String email) {
        return ResponseEntity.ok(memberService.checkEmail(email));
    }

    // 이메일로 인증코드 발송
    @GetMapping("/getEmailCode")
    public ResponseEntity<Integer> getEmailCode(String email) {
        return ResponseEntity.ok(memberService.sendCodeByEmail(email));
    }

    // 인증코드 확인
    @GetMapping("/confirmEmailCode")
    public ResponseEntity<Integer> confirmEmailCode(String code) {
        return ResponseEntity.ok(memberService.confirmEmailCode(code));
    }

    // 토큰을 헤더에 담아서 넘겨주면 해당 토큰의 사용자 정보를 리턴
    @GetMapping("/info")
    public ResponseEntity<MemberDTO> info(@AuthenticationPrincipal MemberDTO member){
        return ResponseEntity.ok(member);
    }
}