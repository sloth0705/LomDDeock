package lomDDeock.dto.menu;

import lomDDeock.dto.util.Pager;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
public class MenuPageResponseDTO {
    Pager pager = new Pager();

    private int currentPage;
    private int total;
    private int lastPageNum;
    private int pageGroupStart;
    private int pageGroupEnd;
    private List<MenuDTO> menues;
    private List<SideDTO> sides;

    private int pageStartNum;
    private int startNum;

    @Builder
    public MenuPageResponseDTO (MenuPageRequestDTO menuPageRequestDTO, int total){
        //  public PageResponseDTO(PageRequestDTO pageRequestDTO, List<ProductDTO> dtoList, List<CsArticleNoticeDTO> noticeList, int total){  노티스 디티오 추가 처럼 dto데이터를 매개 변수로 설정 해서 여러 타입의 데이터를 한 곳에서 받아 모듈화 하는 것 이 가능;   노티스 테스트

        this.currentPage = pager.getCurrentPage(menuPageRequestDTO.getPg());
        this.total = total;
        this.lastPageNum = pager.getLastPageNum(total);
        this.pageGroupStart = pager.getPageGroupNum(currentPage, lastPageNum)[0];
        this.pageGroupEnd = pager.getPageGroupNum(currentPage, lastPageNum)[1];
        this.pageStartNum = pager.getPageStartNum(total, currentPage);
        this.startNum = pager.getStartNum(currentPage);
    }
}
