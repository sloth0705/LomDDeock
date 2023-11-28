package lomDDeock.controller.admin.cs;

import lomDDeock.dto.cs.CsDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AdminNoticeController {

    @PostMapping("/admin/notice/AdminNoticeRegister")
    public void AdminNoticeWrite(@RequestParam("title") String title,
                                 @RequestParam("content") String content,
                                 @RequestParam("registant") String registant,
                                 @RequestPart("image") MultipartFile image
    ){
        log.info("AdminNoticeWrite : "+image);
        log.info("title : "+title+", content : "+content+", registant : "+registant);

    }
}
