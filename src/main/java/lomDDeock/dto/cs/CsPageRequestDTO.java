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
    private String group = "notice";

    @Builder.Default
    private String cate1 = "101";


}
