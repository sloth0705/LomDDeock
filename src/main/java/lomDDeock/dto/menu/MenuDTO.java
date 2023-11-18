package lomDDeock.dto.menu;

import lomDDeock.entity.member.MemberEntity;
import lomDDeock.entity.menu.MenuEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
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

    // 추가
    private int size;

    public MenuEntity toEntity(){
        return MenuEntity.builder()
                .menuNo(menuNo)
                .menuName(menuName)
                .thumb(thumb)
                .descript(descript)
                .sizeCount(sizeCount)
                .price(price)
                .spicyCount(spicyCount)
                .ip(ip)
                .rdate(rdate)
                .deleteYN(deleteYN== null? "Y" : deleteYN)
                .menuVersion(menuVersion==0? 1 : menuVersion)
                .lastRevision(lastRevision== null? "Y" : lastRevision)
                .build();
    }
}
