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
    private final SizeService sizeService;
    private final SpicyService spicyService;
    private final ToppingService toppingService;
    private final SideService sideService;
    @ResponseBody
    @PostMapping("/menu/register")
    public MenuDTO register (HttpServletRequest request, @RequestPart MenuDTO menuDTO) {
        log.info(menuDTO.toString());
        menuDTO.setIp(request.getRemoteAddr());
        MenuDTO savedMenu = menuService.save(menuDTO);
        log.info("savedMenu : "+savedMenu.toString());
        return savedMenu;
    }
    @ResponseBody
    @PostMapping("/side/register")
    public void registerSide (HttpServletRequest request, @RequestPart SideDTO sideDTO) {
        log.info(sideDTO.toString());
        sideDTO.setIp(request.getRemoteAddr());
        sideService.save(sideDTO);
    }
    @ResponseBody
    @PostMapping("/menu/size/register")
    public void registerSize (@RequestBody SizeDTO sizeDTO) {
        sizeService.save(sizeDTO);
    }
    @ResponseBody
    @PostMapping("/menu/spicy/register")
    public void registerSpicy (@RequestBody SpicyDTO spicyDTO) {
        spicyService.save(spicyDTO);
    }
    @ResponseBody
    @PostMapping("/menu/topping/register")
    public void registerTopping (@RequestPart ToppingDTO toppingDTO) {

        toppingService.save(toppingDTO);
    }

}
