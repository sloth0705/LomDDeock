package lomDDeock.controller.member;

import jakarta.servlet.http.HttpServletResponse;
import lomDDeock.dto.member.SignUpForm;
import lomDDeock.dto.util.JwtDTO;
import lomDDeock.service.member.MemberService;
import lomDDeock.service.member.SocialLoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/login")
public class LoginController {
    private final MemberService memberService;
    private final SocialLoginService socialLoginService;

    @GetMapping("/social/check/{provider}")
    public boolean checkMember(@PathVariable String provider, String email) {
        return memberService.checkMember(email);
    }

    // 테스트용
    @GetMapping("/oauth2/{provider}")
    public void tryOAuth2(@PathVariable String provider, HttpServletResponse response)
            throws IOException {
        String url = socialLoginService.tryOAuth2(provider);
        response.sendRedirect(url);
    }
    @GetMapping("/oauth2/code/{provider}")
    public ResponseEntity<JwtDTO> authorized(@PathVariable String provider, @RequestParam String code) {
        return socialLoginService.connectToSocialSignIn(provider, code);
    }

    @PostMapping("/social/{provider}")
    public ResponseEntity<JwtDTO> socialSignIn(@PathVariable String provider, @RequestBody String code) {
        SignUpForm signUpForm = socialLoginService.signIn(provider, code);
        return ResponseEntity.ok(memberService.socialSignIn(signUpForm));
    }
}