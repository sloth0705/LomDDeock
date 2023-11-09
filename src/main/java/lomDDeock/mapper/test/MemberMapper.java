package lomDDeock.mapper.test;

import lomDDeock.dto.test.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
    public MemberDTO findByUid(String uid);
}