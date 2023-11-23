package lomDDeock.mapper.cs;

import lomDDeock.dto.cs.CsCateDTO;
import lomDDeock.dto.cs.CsDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

@Mapper
public interface CsMapper {

    public List<CsDTO> selectCss(@Param("cate") String cate, int start);

    public int selectCountCs(@Param("cate") String cate);

    public int getMyQnaListTotal(Map<String, Object> searchMap);
    public List<CsDTO> getMyQnaList(Map<String, Object> searchMap);
    public List<CsCateDTO> getQnaCate();
}
