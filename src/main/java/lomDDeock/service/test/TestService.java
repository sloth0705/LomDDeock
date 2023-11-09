package lomDDeock.service.test;

import lomDDeock.dto.test.MemberDTO;
import lomDDeock.entity.test.MemberEntity;
import lomDDeock.mapper.test.MemberMapper;
import lomDDeock.repository.test.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MemberMapper memberMapper;

    public MemberEntity getMember(String uid) {
        return userRepository.findById(uid).get();
    }

    public MemberDTO getMember2(String uid) {
        return memberMapper.findByUid(uid);
    }
}