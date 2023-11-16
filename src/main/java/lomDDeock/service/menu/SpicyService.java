package lomDDeock.service.menu;

import lomDDeock.dto.menu.SizeDTO;
import lomDDeock.dto.menu.SpicyDTO;
import lomDDeock.entity.menu.SizeEntity;
import lomDDeock.entity.menu.SpicyEntity;
import lomDDeock.repository.menu.SizeRepository;
import lomDDeock.repository.menu.SpicyRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

@Log4j2
@Service
@RequiredArgsConstructor
public class SpicyService {

    private final SpicyRepository spicyRepository;

    public void save(SpicyDTO spicyDTO) {
        SpicyEntity spicyEntity = spicyDTO.toEntity();
        spicyRepository.save(spicyEntity);
    }
}
