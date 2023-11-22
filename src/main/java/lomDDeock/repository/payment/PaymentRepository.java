package lomDDeock.repository.payment;

import lomDDeock.entity.payment.Payment;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
    Optional<Payment> findByOrderId(String orderId); // 주문 Id 찾기
    Optional<Payment> findByPaymentKeyAndCustomer_Email(String paymentKey, String email); // paymentKey와 고객 email로 Payment 객체 찾기
    Slice<Payment> findAllByCustomer_Email(String email, Pageable pageable); // 내 주문 전체 조회
}
