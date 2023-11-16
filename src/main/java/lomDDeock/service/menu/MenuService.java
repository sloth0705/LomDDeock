package lomDDeock.service.menu;

import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.entity.menu.MenuEntity;
import lomDDeock.repository.menu.MenuRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;

    public MenuDTO save(MenuDTO menuDTO) {
        MenuEntity menuEntity = menuDTO.toEntity();
        MenuEntity savedMenuEntity = menuRepository.save(menuEntity);
        return savedMenuEntity.toDTO();
    }
}
