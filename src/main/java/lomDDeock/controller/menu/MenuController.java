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
    private final SideService sideService;
    @ResponseBody
    @PostMapping("/menu/register")
    public void register (HttpServletRequest request, MenuDTO menuDTO) {

        log.info("menuDTO : " + menuDTO);
        if(menuDTO.getType().equals("normal")) {
            menuDTO.setIp(request.getRemoteAddr());
            menuService.save(menuDTO);
        }else {
            SideDTO sideDTO = new SideDTO();
            sideDTO.setIp(request.getRemoteAddr());
            sideDTO.setType(menuDTO.getType());
            sideDTO.setMenuName(menuDTO.getMenuName());
            sideDTO.setFileThumb(menuDTO.getFileThumb());
            sideDTO.setDescript(menuDTO.getDescript());
            sideDTO.setPrice(menuDTO.getPrice());
            sideService.save(sideDTO);
        }

    }
    @ResponseBody
    @GetMapping("/menu/AdminMenuList")
    public void adminMenuList (@RequestBody MenuPageRequestDTO menuPageRequestDTO) {
        menuService.selectMenu(menuPageRequestDTO);

    }

}
