package lomDDeock.service.menu;

import lomDDeock.dto.menu.MenuDTO;
import lomDDeock.dto.menu.SizeDTO;
import lomDDeock.dto.menu.SpicyDTO;
import lomDDeock.dto.menu.ToppingDTO;
import lomDDeock.entity.menu.MenuEntity;
import lomDDeock.entity.menu.SizeEntity;
import lomDDeock.entity.menu.SpicyEntity;
import lomDDeock.entity.menu.ToppingEntity;
import lomDDeock.repository.menu.MenuRepository;
import lomDDeock.repository.menu.SizeRepository;
import lomDDeock.repository.menu.SpicyRepository;
import lomDDeock.repository.menu.ToppingRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Log4j2
@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;
    private final SizeRepository sizeRepository;
    private final SpicyRepository spicyRepository;
    private final ToppingRepository toppingRepository;

    @Value("${upload.path.thumbs}")
    private String filepath;

    public void save(MenuDTO menuDTO) {
        // 랜덤한 파일 이름 생성
        String uuidThumb = generateRandomFilename(menuDTO.getFileThumb().getOriginalFilename());
        MenuEntity menuEntity = menuDTO.toEntity();
        menuEntity.setThumb(uuidThumb);
        MenuEntity savedMenuEntity = menuRepository.save(menuEntity);

        for(int i=0; i< menuDTO.getSizeDTOs().size(); i++){
            SizeDTO sizeDTO = new SizeDTO();
            sizeDTO.setMenuNo(savedMenuEntity.getMenuNo());
            sizeDTO.setSize(menuDTO.getSizeDTOs().get(i).getSize());
            SizeEntity sizeEntity = sizeDTO.toEntity();
            sizeRepository.save(sizeEntity);
        }
        for(int i=0; i< menuDTO.getSpicyDTOs().size(); i++){
            SpicyDTO spicyDTO = new SpicyDTO();
            spicyDTO.setMenuNo(savedMenuEntity.getMenuNo());
            spicyDTO.setSpicy(menuDTO.getSpicyDTOs().get(i).getSpicy());
            SpicyEntity spicyEntity = spicyDTO.toEntity();
            spicyRepository.save(spicyEntity);
        }
        for(int i=0; i< menuDTO.getToppingDTOs().size(); i++){
            ToppingDTO toppingDTO = new ToppingDTO();
            toppingDTO.setMenuNo(savedMenuEntity.getMenuNo());
            toppingDTO.setTopping(menuDTO.getToppingDTOs().get(i).getTopping());
            toppingDTO.setToppingPrice(menuDTO.getToppingDTOs().get(i).getToppingPrice());
            // 랜덤한 파일 이름 생성
            String uuidTopping = generateRandomFilename(menuDTO.getToppingDTOs().get(i).getToppingFile().getOriginalFilename());
            ToppingEntity toppingEntity = toppingDTO.toEntity();
            toppingEntity.setFile(uuidTopping);
            toppingRepository.save(toppingEntity);
            // 파일을 경로에 저장
            String uploadPath = filepath;
            saveFile(uploadPath, menuDTO.getToppingDTOs().get(i).getToppingFile(), uuidTopping);
        }


        // 파일을 경로에 저장
        String uploadPath = filepath;
        saveFile(uploadPath, menuDTO.getFileThumb(), uuidThumb);

    }

    // 파일을 실제 경로에 저장하는 메소드
    private void saveFile(String uploadPath, MultipartFile fileData, String fileName) {
        File uploadDir = new File(uploadPath);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        try {
            byte[] bytes = fileData.getBytes();
            Path path = Paths.get(uploadPath + fileName);
            Files.write(path, bytes);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    // UUID를 사용하여 랜덤한 파일 이름을 생성하고 원래 파일의 확장자를 유지
    private String generateRandomFilename(String originalFilename) {
        String fileExtension = "";
        int lastDotIndex = originalFilename.lastIndexOf(".");

        if (lastDotIndex >= 0) {
            fileExtension = originalFilename.substring(lastDotIndex);
        }

        UUID uuid = UUID.randomUUID();
        String randomFilename = uuid.toString() + fileExtension;

        return randomFilename;
    }
}
