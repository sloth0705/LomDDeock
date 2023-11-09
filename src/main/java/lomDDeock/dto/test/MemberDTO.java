package lomDDeock.dto.test;

import lomDDeock.entity.test.MemberEntity;
import lombok.*;

import java.text.DecimalFormat;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MemberDTO {
    private String uid;
    private String pass1;
    private String name;
    private int gender;
    private String hp;
    private String email;
    private int point;
    private int level;
    private String zip;
    private String addr1;
    private String addr2;
    private String company;
    private String ceo;
    private String bizRegNum;
    private String comRegNum;
    private String tel;
    private String manager;
    private String managerHp;
    private String fax;
    private String regip;
    private LocalDateTime wdate;
    private LocalDateTime rdate;

    public String getDisPoint() {
        DecimalFormat df = new DecimalFormat("###,###");
        return df.format(this.point);
    }

    public MemberEntity toEntity(){
        return MemberEntity.builder()
                .uid(uid)
                .pass(pass1)
                .name(name)
                .gender(gender)
                .hp(hp)
                .email(email)
                .point(point)
                .level(level==0?1:level)
                .zip(zip)
                .addr1(addr1)
                .addr2(addr2)
                .company(company)
                .ceo(ceo)
                .bizRegNum(bizRegNum)
                .comRegNum(comRegNum)
                .tel(tel)
                .manager(manager)
                .managerHp(managerHp)
                .fax(fax)
                .regip(regip)
                .wdate(wdate)
                .rdate(rdate)
                .build();
    }
}