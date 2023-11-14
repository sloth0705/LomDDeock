package lomDDeock.dto.cs;

import lomDDeock.entity.cs.CsEntity;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CsDTO {

    private int cno;
    private String group;
    private int cate;
    private String title;
    private String content;
    private String registant;
    private String regip;
    private LocalDateTime rdate;
    private LocalDateTime beginDate;
    private int period;
    private int status;

    public CsEntity toEntity() {
        return CsEntity.builder()
                .cno(cno)
                .group(group)
                .cate(cate)
                .title(title)
                .content(content)
                .registant(registant)
                .regip(regip)
                .rdate(rdate)
                .beginDate(beginDate)
                .period(period)
                .status(status)
                .build();
    }
}
