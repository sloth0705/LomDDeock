package lomDDeock.service.menu;

import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.dto.menu.SizeDTO;
import lomDDeock.entity.menu.MenuEntity;
import lomDDeock.entity.menu.SizeEntity;
import lomDDeock.repository.menu.MenuRepository;
import lomDDeock.repository.menu.SizeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@RequiredArgsConstructor
public class SizeService {

    private final SizeRepository sizeRepository;

    public void save(SizeDTO sizeDTO) {
        SizeEntity sizeEntity = sizeDTO.toEntity();
        sizeRepository.save(sizeEntity);
    }
}
