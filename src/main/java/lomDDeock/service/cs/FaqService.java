package lomDDeock.service.cs;

import jakarta.transaction.Transactional;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.entity.cs.CsEntity;
import lomDDeock.mapper.cs.CsMapper;
import lomDDeock.repository.cs.CsRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Log4j2
@Service
public class FaqService {

    @Autowired
    private CsMapper csMapper;

    @Autowired
    private CsRepository csRepository;

    @Transactional
    public void write(CsDTO dto){
        dto.setGroup("faq");
        dto.setRegistant("admin");

        CsEntity csEntity = dto.toEntity();
        csRepository.save(csEntity);
    }

    public List<CsDTO> csList(){
        List<CsDTO> csDTO = csMapper.findAll();
        return csDTO;
    }
}
