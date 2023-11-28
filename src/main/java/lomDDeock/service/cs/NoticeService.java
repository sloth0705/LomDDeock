package lomDDeock.service.cs;

import lomDDeock.dto.cs.CsDTO;
import lomDDeock.repository.cs.CsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NoticeService {

    @Autowired
    private CsRepository csRepository;

    public void NoticeWrite(CsDTO csDTO){


    }
}
