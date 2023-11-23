package lomDDeock.dto.member;

import lomDDeock.dto.cs.CsDTO;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MyQnaListPageResponse {
    private List<CsDTO> dtoList;
    private int pg;
    private int total;
    private int start, end;
    private boolean prev, next;

    @Builder
    public MyQnaListPageResponse(int pg, int total, List<CsDTO> dtoList) {
        this.pg = pg;
        this.total = total;
        this.dtoList = dtoList;

        this.end = (int) (Math.ceil(this.pg / 10.0)) * 10;
        this.start = this.end - 9;
        int last = (int) (Math.ceil(total / 10.0));

        this.end = Math.min(end, last);
        this.prev = this.start > 1;
        this.next = total > this.end * 10;
    }
}