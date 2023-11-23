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
    public int getNoticeListTotal(Map<String, Object> searchMap);
    public List<CsDTO> getNoticeList(Map<String, Object> searchMap);
    public int getFaqListTotal(Map<String, Object> searchMap);
    public List<CsDTO> getFaqList(Map<String, Object> searchMap);
    public List<CsCateDTO> getQnaCate();
}
