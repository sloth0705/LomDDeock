package lomDDeock.controller.member;

import jakarta.servlet.http.HttpServletResponse;
import lomDDeock.dto.member.MemberDTO;
import lomDDeock.dto.member.SignUpForm;
import lomDDeock.dto.util.JwtDTO;
import lomDDeock.service.member.MemberService;
import lomDDeock.service.member.SocialLoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MemberController {
    private final MemberService memberService;
    private final SocialLoginService socialLoginService;

    // 일반 회원가입
    @PostMapping("/local/signup")
    public ResponseEntity<MemberDTO> localSignUp(@RequestBody SignUpForm form){
        return ResponseEntity.ok(memberService.localSignUp(form));
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

    @GetMapping("/info")
    public ResponseEntity<MemberDTO> info(@AuthenticationPrincipal MemberDTO member){
        return ResponseEntity.ok(member);
    }
}