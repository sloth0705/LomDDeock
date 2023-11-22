package lomDDeock.controller.menu;

import jakarta.servlet.http.HttpServletRequest;
import lomDDeock.dto.menu.*;
import lomDDeock.service.menu.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.*;

@Log4j2
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MenuController {

    private final MenuService menuService;
    private final ToppingService toppingService;
    private final SideService sideService;
    @ResponseBody
    @PostMapping("/menu/register")
    public void register (HttpServletRequest request, MenuDTO menuDTO) {

        log.info("menuDTO : " + menuDTO);
        menuDTO.setIp(request.getRemoteAddr());
        menuService.save(menuDTO);
        //log.info("savedMenu : "+savedMenu.toString());

    }
    @ResponseBody
    @PostMapping("/side/register")
    public void registerSide (HttpServletRequest request, @RequestBody SideDTO sideDTO) {
        log.info(sideDTO.toString());
        sideDTO.setIp(request.getRemoteAddr());
        sideService.save(sideDTO);
    }

}
