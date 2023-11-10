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

    @PostMapping("/local/signup")
    public ResponseEntity<MemberDTO> signUp(@RequestBody SignUpForm form){
        return ResponseEntity.ok(memberService.signUp(form));
    }

    @PostMapping("/local/signin")
    public ResponseEntity<JwtDTO> signIn(@RequestBody SignUpForm form){
        return ResponseEntity.ok(memberService.signIn(form));
    }

    @GetMapping("/info")
    public ResponseEntity<MemberDTO> info(@AuthenticationPrincipal MemberDTO member){
        return ResponseEntity.ok(member);
    }
}