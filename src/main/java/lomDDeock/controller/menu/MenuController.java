package lomDDeock.controller.menu;

import lomDDeock.dto.menu.MenuDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MenuController {

    @PostMapping("/menu/register")
    public void register (@RequestBody MenuDTO formData) {
        log.info(formData.toString());
    }

}
