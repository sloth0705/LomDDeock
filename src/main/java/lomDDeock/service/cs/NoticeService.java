package lomDDeock.service.cs;

import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.cs.CsFileDTO;
import lomDDeock.dto.cs.CsPageRequestDTO;
import lomDDeock.dto.cs.CsPageResponseDTO;
import lomDDeock.entity.cs.CsEntity;
import lomDDeock.mapper.cs.CsMapper;
import lomDDeock.repository.cs.CsFileRepository;
import lomDDeock.repository.cs.CsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@Log4j2
@Service
@RequiredArgsConstructor
public class NoticeService {

    private final CsRepository csRepository;
    private final CsFileRepository csFileRepository;
    private final CsMapper csMapper;

    public void insertNotice(CsDTO csDTO){

        CsEntity csEntity = csDTO.toEntity();
        csRepository.save(csEntity);

    }

    public CsPageResponseDTO selectNotices(CsPageRequestDTO pageRequestDTO){
        int start = (pageRequestDTO.getPg() - 1) * pageRequestDTO.getSize();
        List<CsDTO> csDTO = csMapper.selectNotice(start);
        int total = csMapper.selectCountNotice();

        return CsPageResponseDTO.builder()
                .total(total)
                .csList(csDTO)
                .csPageRequestDTO(pageRequestDTO)
                .build();
    }

}
