package lomDDeock.dto.payment;

import lombok.*;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentResDTO {
    private String payType; // 결제 타입 - 카드/현금/포인트
    private Long amount;    // 가격 정보
    private String orderName; // 주문명
    private String orderId;   // 주문 Id
    private String customerEmail;
    private String customerName;
    private String successUrl;
    private String failUrl;

    private String failReason;   // 실패 이유
    private boolean cancelYN;    // 취소 YN
    private String cancelReason; // 취소 이유
    private String createdAt;    // 결제가 이루어진 시간
}
