package lomDDeock.mapper.cs;

import lomDDeock.dto.cs.CsDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface CsMapper {

    public List<CsDTO> selectCss(@Param("cate") String cate, int start);

    public int selectCountCs(@Param("cate") String cate);
}
