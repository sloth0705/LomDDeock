package lomDDeock.controller.admin.cs;

import jakarta.servlet.http.HttpServletRequest;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.service.cs.FaqService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AdminFaqController {

    private final FaqService faqService;

    @PostMapping("/admin/faq/adminFaqRegister")
    public void adminFaqWrite(@RequestBody CsDTO data,HttpServletRequest request){
        log.info("adminFaqWrite : "+data);
        data.setRegip(request.getRemoteAddr());
        data.setContent(data.getContent().replaceAll("\r\n", "<br/>"));

        faqService.write(data);
    }

    @ResponseBody
    @GetMapping("/admin/faq/adminFaqList")
    public List<CsDTO> adminFaqList(@RequestParam(name = "cate", required = false) String cate){
        log.info("adminFaqList...1 "+cate);
        String cateParam = (cate == null || cate.trim().isEmpty()) ? "0" : cate.trim();
        log.info("cateParam :"+cateParam);
        List<CsDTO> dto = faqService.csList(cateParam);
        log.info(dto);

        return dto;
    }

}
