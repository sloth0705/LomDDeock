"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1145],{1145:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r,o=t(4165),c=t(5861),i=t(2791);function s(e){return window[e]}var a="https://js.tosspayments.com/v1/payment-widget";function u(e,n,t){var o=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).src,c=void 0===o?a:o;return"undefined"===typeof window?Promise.resolve({}):function(e,n){var t=document.querySelector('[src="'.concat(e,'"]'));if(null!=t&&void 0!==r)return r;if(null!=t&&void 0!==s(n))return Promise.resolve(s(n));var o=document.createElement("script");return o.src=e,r=new Promise((function(t,r){document.head.appendChild(o),window.addEventListener("TossPayments:initialize:".concat(n),(function(){void 0!==s(n)?t(s(n)):r(new Error("[TossPayments SDK] Failed to load script: [".concat(e,"]")))}))}))}(c,"PaymentWidget").then((function(r){return r(e,n,t)}))}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},l=t(184),f="test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq",m=d();function v(){var e=(0,i.useRef)(null);(0,i.useRef)(null);return(0,i.useEffect)((function(){(0,c.Z)((0,o.Z)().mark((function n(){var t;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u(f,m);case 2:(t=n.sent).renderPaymentMethods("#payment-widget",10),e.current=t;case 5:case"end":return n.stop()}}),n)})))()}),[]),(0,l.jsxs)("div",{className:"App",children:[(0,l.jsx)("h1",{children:"\uc8fc\ubb38\uc11c"}),(0,l.jsx)("div",{id:"payment-widget"}),(0,l.jsx)("button",{onClick:(0,c.Z)((0,o.Z)().mark((function n(){var t;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.current,n.prev=1,!t){n.next=5;break}return n.next=5,t.requestPayment({orderId:d(),orderName:"\ud1a0\uc2a4 \ud2f0\uc154\uce20 \uc678 2\uac74",customerName:"\uae40\ud1a0\uc2a4",customerEmail:"customer123@gmail.com",successUrl:"".concat(window.location.origin,"/success"),failUrl:"".concat(window.location.origin,"/fail")});case 5:n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[1,7]])}))),children:"\uacb0\uc81c\ud558\uae30"})]})}}}]);
//# sourceMappingURL=1145.7f5ac6da.chunk.js.map