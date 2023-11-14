package lomDDeock.dto.menu;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class MenuDTO {
    private int menuNo;
    private String menuName;
    private String thumb;
    private String descript;
    private int sizeCount;
    private int price;
    private int spicyCount;
    private String ip;
    private LocalDateTime rdate;
    private String deleteYN;
    private int menuVersion;
    private String lastRevision;
}
