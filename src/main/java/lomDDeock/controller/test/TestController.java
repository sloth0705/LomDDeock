package lomDDeock.controller.test;

import lomDDeock.dto.test.MemberDTO;
import lomDDeock.entity.test.MemberEntity;
import lomDDeock.service.test.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @Autowired
    private TestService testService;

    @GetMapping("/api/hello")
    public String test() {
        return "Hello World!!!";
    }

    @GetMapping("/api/jpaTest")
    public MemberEntity jpaTest(String uid) {
        return testService.getMember(uid);
    }

    @GetMapping("/api/mybatisTest")
    public MemberDTO mybatisTest(String uid) {
        return testService.getMember2(uid);
    }

}