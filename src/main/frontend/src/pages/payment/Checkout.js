import { useEffect, useRef } from "react";
import {
    loadPaymentWidget,
    PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
// import { ANONYMOUS } from "@tosspayments/payment-widget-sdk"
import { nanoid } from "nanoid";
import "../../App.css";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = nanoid();

export default function Checkout() {
    const paymentWidgetRef = useRef(null);
    const paymentMethodsWidgetRef = useRef(null);
    //const paymentWidgetRef = (useRef < PaymentWidgetInstance) | (null > null);
    const price = 10;

    useEffect(() => {
        (async () => {
            const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

            paymentWidget.renderPaymentMethods("#payment-widget", price);

            paymentWidgetRef.current = paymentWidget;
        })();
    }, []);

    return (
        <div className="App">
            <h1>주문서</h1>
            <div id="payment-widget" />
            <button
                onClick={async () => {
                    const paymentWidget = paymentWidgetRef.current;

                    try {
                        if (paymentWidget) {
                            await paymentWidget.requestPayment({
                                orderId: nanoid(),
                                orderName: "토스 티셔츠 외 2건",
                                customerName: "김토스",
                                customerEmail: "customer123@gmail.com",
                                successUrl: `${window.location.origin}/success`,
                                failUrl: `${window.location.origin}/fail`,
                            });
                        }
                    } catch (err) {
                        console.log(err);
                    }
                }}
            >
                결제하기
            </button>
        </div>
    );
}
