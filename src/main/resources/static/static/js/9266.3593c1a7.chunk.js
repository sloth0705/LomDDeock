"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9266],{9266:function(e,t,r){r.r(t);var n=r(4165),a=r(5861),c=r(2791),o=r(5294),u=r(184);t.default=function(e,t){(0,c.useEffect)((function(){var e=document.createElement("script");e.src="http://code.jquery.com/jquery-1.12.4.min.js";var t=document.createElement("script");return t.src="http://cdn.iamport.kr/js/iamport.payment-1.1.7.js",document.head.appendChild(e),document.head.appendChild(t),function(){document.head.removeChild(e),document.head.removeChild(t)}}),[]);return(0,u.jsx)("div",{children:(0,u.jsx)("button",{onClick:function(){var e=window.IMP;e.init("imp56364406"),e.request_pay({pg:"{kakaopay}.{TC0ONETIME}",pay_method:"card",merchant_uid:56975829,name:"\ud14c\uc2a4\ud2b8 \uc0c1\ud488",amount:10,buyer_email:"test@naver.com",buyer_name:"\ucf54\ub4dc\ucfe1",buyer_tel:"010-1234-5678",buyer_addr:"\uc11c\uc6b8\ud2b9\ubcc4\uc2dc",buyer_postcode:"123-456"},function(){var e=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.post("http://localhost:8080/verifyIamport/"+t.imp_uid);case 3:r=e.sent,a=r.data,t.paid_amount===a.response.amount?alert("\uacb0\uc81c \uc131\uacf5"):alert("\uacb0\uc81c \uc2e4\ud328"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error while verifying payment:",e.t0),alert("\uacb0\uc81c \uc2e4\ud328");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())},children:"\uacb0\uc81c\ud558\uae30"})})}}}]);
//# sourceMappingURL=9266.3593c1a7.chunk.js.map