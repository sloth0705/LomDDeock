package lomDDeock.mapper.cs;

import lomDDeock.dto.cs.CsDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CsMapper {

    public List<CsDTO> findAll();
}
