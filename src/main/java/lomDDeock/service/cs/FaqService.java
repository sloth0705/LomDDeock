package lomDDeock.service.cs;

import lomDDeock.dto.cs.CsDTO;
import lomDDeock.entity.cs.CsEntity;
import lomDDeock.repository.cs.CsRepository;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Log4j2
@Service
public class FaqService {

    @Autowired
    private CsRepository csRepository;
    public void write(CsDTO dto){
        dto.setGroup("faq");
        dto.setRegistant("admin");

        CsEntity csEntity = dto.toEntity();
        csRepository.save(csEntity);
    }
}
