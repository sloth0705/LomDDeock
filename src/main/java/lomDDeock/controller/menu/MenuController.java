package lomDDeock.controller.menu;

import jakarta.servlet.http.HttpServletRequest;
import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.dto.menu.SizeDTO;
import lomDDeock.dto.menu.SpicyDTO;
import lomDDeock.service.menu.MenuService;
import lomDDeock.service.menu.SizeService;
import lomDDeock.service.menu.SpicyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MenuController {

    private final MenuService menuService;
    private final SizeService sizeService;
    private final SpicyService spicyService;
    @ResponseBody
    @PostMapping("/menu/register")
    public MenuDTO register (HttpServletRequest request, @RequestBody MenuDTO menuDTO) {
        log.info(menuDTO.toString());
        menuDTO.setIp(request.getRemoteAddr());
        MenuDTO savedMenu = menuService.save(menuDTO);
        log.info("savedMenu : "+savedMenu.toString());
        return savedMenu;
    }
    @ResponseBody
    @PostMapping("/menu/size/register")
    public void registerSize (@RequestBody SizeDTO sizeDTO) {
        log.info("컨트롤러 들어오는지 확인 중~~~~~");
        sizeService.save(sizeDTO);
    }
    @ResponseBody
    @PostMapping("/menu/spicy/register")
    public void registerSpicy (@RequestBody SpicyDTO spicyDTO) {
        log.info("컨트롤러 들어오는지 확인 중~~~~~");
        spicyService.save(spicyDTO);
    }

}
