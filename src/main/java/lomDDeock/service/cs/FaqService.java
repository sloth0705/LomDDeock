package lomDDeock.service.cs;

import jakarta.transaction.Transactional;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.cs.CsPageRequestDTO;
import lomDDeock.dto.cs.CsPageResponseDTO;
import lomDDeock.entity.cs.CsEntity;
import lomDDeock.mapper.cs.CsMapper;
import lomDDeock.repository.cs.CsRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Log4j2
@Service
public class FaqService {

    @Autowired
    private CsMapper csMapper;

    @Autowired
    private CsRepository csRepository;

    @Transactional
    public void insertCs(CsDTO dto){
        dto.setGroup("faq");
        dto.setRegistant("admin");

        CsEntity csEntity = dto.toEntity();
        csRepository.save(csEntity);
    }

    public CsPageResponseDTO selectCsBoards(String cate, CsPageRequestDTO csPageRequestDTO){
        int start = (csPageRequestDTO.getPg() - 1) * csPageRequestDTO.getSize();
        List<CsDTO> csDTO = csMapper.selectCss(cate, start);
        int total = csMapper.selectCountCs(cate);

        return CsPageResponseDTO.builder()
                .csPageRequestDTO(csPageRequestDTO)
                .csList(csDTO)
                .total(total)
                .build();
    }
}
