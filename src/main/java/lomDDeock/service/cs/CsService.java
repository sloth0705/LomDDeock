package lomDDeock.service.cs;

import lomDDeock.dto.cs.CsCateDTO;
import lomDDeock.dto.cs.CsDTO;
import lomDDeock.dto.cs.CsPageResponseDTO;
import lomDDeock.dto.member.CsListPageResponse;
import lomDDeock.dto.member.MemberDTO;
import lomDDeock.mapper.cs.CsMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class CsService {
    private final CsMapper csMapper;

    // 로그인한 사용자의 문의내역 가져오기
    public CsListPageResponse getMyQnaList(MemberDTO memberDTO, int pg, int cateNo) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();

        // 검색조건 넣기
        searchMap.put("pg", (pg - 1) * 10);
        searchMap.put("cateNo", cateNo);
        searchMap.put("email", memberDTO.getEmail());
        List<CsDTO> dtoList = csMapper.getMyQnaList(searchMap);
        int total = csMapper.getMyQnaListTotal(searchMap);
        return CsListPageResponse.builder()
                .pg(pg)
                .total(total)
                .dtoList(dtoList)
                .build();
    }

    public List<CsCateDTO> getQnaCate() {
        return csMapper.getQnaCate();
    }

    public CsListPageResponse getNoticeList(int pg) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();
        // 검색조건 넣기
        searchMap.put("pg", (pg - 1) * 10);
        int total = csMapper.getNoticeListTotal(searchMap);
        List<CsDTO> dtoList = csMapper.getNoticeList(searchMap);
        return CsListPageResponse.builder()
                .pg(pg)
                .total(total)
                .dtoList(dtoList)
                .build();
    }

    public CsListPageResponse getFaqList(int pg) {
        // 검색조건을 담는 Map 생성
        Map<String, Object> searchMap = new HashMap<>();
        // 검색조건 넣기
        searchMap.put("pg", (pg - 1) * 10);
        int total = csMapper.getFaqListTotal(searchMap);
        List<CsDTO> dtoList = csMapper.getFaqList(searchMap);
        return CsListPageResponse.builder()
                .pg(pg)
                .total(total)
                .dtoList(dtoList)
                .build();
    }
}