package lomDDeock.controller.admin.cs;

import jakarta.servlet.http.HttpServletRequest;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.service.cs.FaqService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AdminFaqController {

    private final FaqService faqService;

    @PostMapping("/admin/faq/adminFaqRegister")
    public void adminFaqWrite(@RequestBody CsDTO data, HttpServletRequest request){
        log.info("adminFaqWrite : "+data);
        data.setRegip(request.getRemoteAddr());

        faqService.write(data);
    }

}
