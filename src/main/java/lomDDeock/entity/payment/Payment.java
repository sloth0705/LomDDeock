package lomDDeock.entity.payment;

import jakarta.persistence.*;
import lomDDeock.dto.payment.PayType;
import lomDDeock.dto.payment.PaymentResDTO;
import lomDDeock.entity.member.MemberEntity;
import lombok.*;
import org.springframework.data.domain.Auditable;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(indexes = {
        @Index(name = "idx_payment_member", columnList = "customer"),
        @Index(name = "idx_payment_paymentKey", columnList = "paymentKey")
})
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id", nullable = false, unique = true)
    private Long paymentId;
    @Column(nullable = false, name = "pay_type")
    @Enumerated(EnumType.STRING)
    private PayType payType;
    @Column(nullable = false, name = "pay_amount")
    private Long amount;
    @Column(nullable = false, name = "pay_name")
    private String orderName;
    @Column(nullable = false, name = "order_id")
    private String orderId;

    private boolean paySuccessYN;
    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "customer")
    private MemberEntity customer;
    @Column
    private String paymentKey;
    @Column
    private String failReason;

    @Column
    private boolean cancelYN;
    @Column
    private String cancelReason;

    public PaymentResDTO toPaymentResDto() { // DB에 저장하게 될 결제 관련 정보들
        return PaymentResDTO.builder()
                .payType(payType.getDescription())
                .amount(amount)
                .orderName(orderName)
                .orderId(orderId)
                .customerEmail(customer.getEmail())
//                .createdAt(String.valueOf(getCreatedAt()))
                .cancelYN(cancelYN)
                .failReason(failReason)
                .build();
    }
}
