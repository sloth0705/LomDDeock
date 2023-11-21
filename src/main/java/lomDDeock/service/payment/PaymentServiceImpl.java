package lomDDeock.service.payment;

import jakarta.transaction.Transactional;
import lomDDeock.entity.payment.Payment;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class PaymentServiceImpl {

    public Payment requestTossPayment(Payment payment, String userEmail) {
        Member member = memberService.findMember(userEmail);
        if (payment.getAmount() < 1000) {
            throw new CustomLogicException(ExceptionCode.INVALID_PAYMENT_AMOUNT);
        }
        payment.setCustomer(member);
        return paymentRepository.save(payment);
    }
}
