package lomDDeock.controller.payment;

import lomDDeock.config.TossPaymentConfig;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Validated
@RequestMapping("/api/v1/payments")
public class PaymentController {
//    private final PaymentServiceImpl paymentService;
//    private final TossPaymentConfig tossPaymentConfig;
//    private final PaymentMapper mapper;
//
//    public PaymentController(PaymentServiceImpl paymentService, TossPaymentConfig tossPaymentConfig, PaymentMapper mapper) {
//        this.paymentService = paymentService;
//        this.tossPaymentConfig = tossPaymentConfig;
//        this.mapper = mapper;
//    }
//
//    @PostMapping("/toss")
//    public ResponseEntity requestTossPayment(@AuthenticationPrincipal User principal, @RequestBody @Valid PaymentDto paymentReqDto) {
//        PaymentResDto paymentResDto = paymentService.requestTossPayment(paymentReqDto.toEntity(), principal.getUsername()).toPaymentResDto();
//        paymentResDto.setSuccessUrl(paymentReqDto.getYourSuccessUrl() == null ? tossPaymentConfig.getSuccessUrl() : paymentReqDto.getYourSuccessUrl());
//        paymentResDto.setFailUrl(paymentReqDto.getYourFailUrl() == null ? tossPaymentConfig.getFailUrl() : paymentReqDto.getYourFailUrl());
//        return ResponseEntity.ok().body(new SingleResponse<>(paymentResDto));
//    }
}
