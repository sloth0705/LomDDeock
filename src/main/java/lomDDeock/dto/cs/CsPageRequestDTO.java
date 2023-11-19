package lomDDeock.dto.cs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CsPageRequestDTO {

    @Builder.Default
    private int pg = 1;

    @Builder.Default
    private String group = "notice";

    @Builder.Default
    private int cate = 0;

    @Builder.Default
    private int cno = 0;

    private String registant;
    private String title;
    private String content;


}
