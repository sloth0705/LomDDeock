"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7359],{2500:function(e,n,a){var t=a(2677),i=a(1398),r=(a(2791),a(184));n.Z=function(){return(0,r.jsxs)(t.Z,{sm:2,children:[(0,r.jsx)("div",{className:"todayDate",children:(0,r.jsx)("h2",{children:"2023-11-07"})}),(0,r.jsxs)(i.Z,{className:"asideMenu",children:[(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/adminIndex",children:"ADMIN HOME"}),(0,r.jsxs)(i.Z.Item,{action:!0,variant:"light",children:["\uba54\ub274\uad00\ub9ac",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/menu/AdminMenuList",children:"\u25b6 \uba54\ub274\ubaa9\ub85d"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/menu/AdminMenuRegister",children:"\u25b6 \uba54\ub274\ub4f1\ub85d"})})]})]}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/order/adminOrderStatus",children:"\uc8fc\ubb38\ud604\ud669"}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/banner/adminBanner",children:"\ubc30\ub108\uad00\ub9ac"}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/event/adminEventList",children:"\uc774\ubca4\ud2b8\uad00\ub9ac"}),(0,r.jsxs)(i.Z.Item,{action:!0,variant:"light",children:["\ucfe0\ud3f0\uad00\ub9ac",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/coupon/AdminCouponList",children:"\u25b6 \ucfe0\ud3f0\uc9c0\uae09\ub0b4\uc5ed"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/coupon/adminCouponPayment",children:"\u25b6 \ucfe0\ud3f0\uc9c0\uae09"})})]})]}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/notice/adminNoticeList",children:"\uacf5\uc9c0\uc0ac\ud56d\uad00\ub9ac"}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/faq/adminFaqList",children:"\uc790\uc8fc\ubb3b\ub294\uc9c8\ubb38"}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/qna/adminQna",children:"\uace0\uac1d\uc758\uc18c\ub9ac"})]})]})}},7359:function(e,n,a){a.r(n),a.d(n,{default:function(){return Z}});var t=a(4165),i=a(5861),r=a(9439),s=a(2791),c=(a(916),a(8949)),o=a(7022),d=a(9743),l=a(2677),u=a(2500),m=a(7689),f=a(1087),v=a(5294),x=a(184);var h=function(e){var n=e.page,a=e.setPage,t=e.pageData,i=(0,m.s0)();(0,s.useEffect)((function(){a(1)}),[t.cate]);var r=function(e){a(e),i("/admin/faq/adminFaqList".concat(t.cate?"?cate=".concat(t.cate):"","&page=").concat(e))};return(0,x.jsxs)("div",{className:"paging",children:[(0,x.jsx)("span",{className:"num prev ".concat(t.prev?"":" disabled"),onClick:function(){return r(t.start-1)},children:"<"}),function(){for(var e=[],a=function(a){e.push((0,x.jsx)("span",{className:"num".concat(n===a?" on":""),onClick:function(){return r(a)},children:a},a))},i=t.start;i<=t.end;i++)a(i);return e}(),(0,x.jsx)("span",{className:"num next ".concat(t.next?"":" disabled"),onClick:function(){return r(t.end+1)},children:">"})]})};var j=function(){var e=(0,m.TH)(),n=function(n){return new URLSearchParams(e.search).get("cate")===n};return(0,x.jsxs)("div",{className:"AdminFaqCate",children:[(0,x.jsx)(f.rU,{to:"/admin/faq/adminFaqList?cate=10",className:n("10")?"on":"",children:"\uc774\ubca4\ud2b8"}),(0,x.jsx)(f.rU,{to:"/admin/faq/adminFaqList?cate=11",className:n("11")?"on":"",children:"\uc8fc\ubb38/\uacb0\uc81c"}),(0,x.jsx)(f.rU,{to:"/admin/faq/adminFaqList?cate=12",className:n("12")?"on":"",children:"\ucde8\uc18c/\ud658\ubd88"}),(0,x.jsx)(f.rU,{to:"/admin/faq/adminFaqList?cate=13",className:n("13")?"on":"",children:"\ud61c\ud0dd"}),(0,x.jsx)(f.rU,{to:"/admin/faq/adminFaqList?cate=14",className:n("14")?"on":"",children:"\uc774\uc6a9\ubb38\uc758"}),(0,x.jsx)(f.rU,{to:"/admin/faq/adminFaqList?cate=15",className:n("15")?"on":"",children:"\ud68c\uc6d0\uc815\ubcf4"}),(0,x.jsx)(f.rU,{to:"/admin/faq/adminFaqList?cate=16",className:n("16")?"on":"",children:"\ucfe0\ud3f0"})]})};function p(){var e=(0,s.useState)([]),n=(0,r.Z)(e,2),a=n[0],o=n[1],d=(0,s.useState)({}),l=(0,r.Z)(d,2),u=l[0],f=l[1],j=(0,s.useState)(1),p=(0,r.Z)(j,2),Z=p[0],N=p[1],y=(0,m.TH)(),b=new URLSearchParams(y.search).get("cate"),g=(0,s.useState)(null),E=(0,r.Z)(g,2),C=E[0],q=E[1],P=(0,s.useState)(null),L=(0,r.Z)(P,2),A=L[0],K=L[1];(0,s.useEffect)((function(){v.Z.get("/api/admin/faq/adminFaqList?cate=".concat(b||"","&page=").concat(Z)).then((function(e){o(e.data.csList),f(e.data),N(e.data.pg)})).catch((function(e){console.error("\ub370\uc774\ud130\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. error : "+e)}))}),[b,Z]);(0,s.useEffect)((function(){console.log(C)}),[C]);var k=function(){var e=(0,i.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(A);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=C&&(0,x.jsx)(c.Z.Body,{children:(0,x.jsxs)("form",{children:[(0,x.jsx)("p",{children:(0,x.jsx)("textarea",{defaultValue:C.item.content,name:"content",onChange:K})}),(0,x.jsx)("p",{children:(0,x.jsx)("button",{type:"button",className:"btnModify",onClick:k,children:"\uc644\ub8cc"})})]})});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(c.Z,{children:a.map((function(e,n){return(0,x.jsxs)(c.Z.Item,{eventKey:n.toString(),children:[(0,x.jsxs)(c.Z.Header,{children:["[",e.cateName,"]",e.title,(0,x.jsx)("span",{className:"date",children:(a=e.rdate,new Date(a).toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"}))})]}),C&&C.index===n?w:(0,x.jsxs)(c.Z.Body,{children:[(0,x.jsx)("p",{children:e.content.split("\n").map((function(e,n){return(0,x.jsxs)(s.Fragment,{children:[e,(0,x.jsx)("br",{})]},n)}))}),(0,x.jsxs)("p",{children:[(0,x.jsx)("button",{className:"btnModify",onClick:function(){return function(e,n){q({item:e,index:n})}(e,n)},children:"\uc218\uc815"}),(0,x.jsx)("button",{className:"btnDelete",children:"\uc0ad\uc81c"})]})]})]},n);var a}))}),(0,x.jsx)(h,{page:Z,setPage:N,pageData:u})]})}var Z=function(){return(0,x.jsx)("section",{id:"admin",children:(0,x.jsx)(o.Z,{id:"adminFaqList",children:(0,x.jsxs)(d.Z,{className:"justify-content-center",children:[(0,x.jsx)(u.Z,{}),(0,x.jsxs)(l.Z,{children:[(0,x.jsx)("div",{className:"faqRegisterButton",children:(0,x.jsx)(f.rU,{to:"/admin/faq/adminFaqRegister",className:"btnWrite",children:"\uc790\uc8fc\ubb3b\ub294\uc9c8\ubb38 \ub4f1\ub85d"})}),(0,x.jsx)(j,{}),(0,x.jsx)(p,{})]})]})})})}},8949:function(e,n,a){a.d(n,{Z:function(){return F}});var t=a(1413),i=a(5987),r=a(1694),s=a.n(r),c=a(2791),o=a(8580),d=a(162),l=a(7858);function u(e,n){return Array.isArray(e)?e.includes(n):e===n}var m=c.createContext({});m.displayName="AccordionContext";var f=m,v=a(184),x=["as","bsPrefix","className","children","eventKey"],h=c.forwardRef((function(e,n){var a=e.as,r=void 0===a?"div":a,o=e.bsPrefix,m=e.className,h=e.children,j=e.eventKey,p=(0,i.Z)(e,x),Z=(0,c.useContext)(f).activeEventKey;return o=(0,d.vE)(o,"accordion-collapse"),(0,v.jsx)(l.Z,(0,t.Z)((0,t.Z)({ref:n,in:u(Z,j)},p),{},{className:s()(m,o),children:(0,v.jsx)(r,{children:c.Children.only(h)})}))}));h.displayName="AccordionCollapse";var j=h,p=c.createContext({eventKey:""});p.displayName="AccordionItemContext";var Z=p,N=["as","bsPrefix","className","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y=c.forwardRef((function(e,n){var a=e.as,r=void 0===a?"div":a,o=e.bsPrefix,l=e.className,u=e.onEnter,m=e.onEntering,f=e.onEntered,x=e.onExit,h=e.onExiting,p=e.onExited,y=(0,i.Z)(e,N);o=(0,d.vE)(o,"accordion-body");var b=(0,c.useContext)(Z).eventKey;return(0,v.jsx)(j,{eventKey:b,onEnter:u,onEntering:m,onEntered:f,onExit:x,onExiting:h,onExited:p,children:(0,v.jsx)(r,(0,t.Z)((0,t.Z)({ref:n},y),{},{className:s()(l,o)}))})}));y.displayName="AccordionBody";var b=y,g=a(3433),E=["as","bsPrefix","className","onClick"];var C=c.forwardRef((function(e,n){var a=e.as,r=void 0===a?"button":a,o=e.bsPrefix,l=e.className,m=e.onClick,x=(0,i.Z)(e,E);o=(0,d.vE)(o,"accordion-button");var h=(0,c.useContext)(Z).eventKey,j=function(e,n){var a=(0,c.useContext)(f),t=a.activeEventKey,i=a.onSelect,r=a.alwaysOpen;return function(a){var s=e===t?null:e;r&&(s=Array.isArray(t)?t.includes(e)?t.filter((function(n){return n!==e})):[].concat((0,g.Z)(t),[e]):[e]),null==i||i(s,a),null==n||n(a)}}(h,m),p=(0,c.useContext)(f).activeEventKey;return"button"===r&&(x.type="button"),(0,v.jsx)(r,(0,t.Z)((0,t.Z)({ref:n,onClick:j},x),{},{"aria-expanded":Array.isArray(p)?p.includes(h):h===p,className:s()(l,o,!u(p,h)&&"collapsed")}))}));C.displayName="AccordionButton";var q=C,P=["as","bsPrefix","className","children","onClick"],L=c.forwardRef((function(e,n){var a=e.as,r=void 0===a?"h2":a,c=e.bsPrefix,o=e.className,l=e.children,u=e.onClick,m=(0,i.Z)(e,P);return c=(0,d.vE)(c,"accordion-header"),(0,v.jsx)(r,(0,t.Z)((0,t.Z)({ref:n},m),{},{className:s()(o,c),children:(0,v.jsx)(q,{onClick:u,children:l})}))}));L.displayName="AccordionHeader";var A=L,K=["as","bsPrefix","className","eventKey"],k=c.forwardRef((function(e,n){var a=e.as,r=void 0===a?"div":a,o=e.bsPrefix,l=e.className,u=e.eventKey,m=(0,i.Z)(e,K);o=(0,d.vE)(o,"accordion-item");var f=(0,c.useMemo)((function(){return{eventKey:u}}),[u]);return(0,v.jsx)(Z.Provider,{value:f,children:(0,v.jsx)(r,(0,t.Z)((0,t.Z)({ref:n},m),{},{className:s()(l,o)}))})}));k.displayName="AccordionItem";var w=k,I=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],S=c.forwardRef((function(e,n){var a=(0,o.Ch)(e,{activeKey:"onSelect"}),r=a.as,l=void 0===r?"div":r,u=a.activeKey,m=a.bsPrefix,x=a.className,h=a.onSelect,j=a.flush,p=a.alwaysOpen,Z=(0,i.Z)(a,I),N=(0,d.vE)(m,"accordion"),y=(0,c.useMemo)((function(){return{activeEventKey:u,onSelect:h,alwaysOpen:p}}),[u,h,p]);return(0,v.jsx)(f.Provider,{value:y,children:(0,v.jsx)(l,(0,t.Z)((0,t.Z)({ref:n},Z),{},{className:s()(x,N,j&&"".concat(N,"-flush"))}))})}));S.displayName="Accordion";var F=Object.assign(S,{Button:q,Collapse:j,Item:w,Header:A,Body:b})},1398:function(e,n,a){a.d(n,{Z:function(){return y}});var t=a(1413),i=a(5987),r=a(1694),s=a.n(r),c=a(2791),o=(a(2391),a(8580)),d=a(1337),l=a(162),u=a(9439),m=a(9007),f=a(4787),v=a(8633),x=a(184),h=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],j=c.forwardRef((function(e,n){var a=e.bsPrefix,r=e.active,c=e.disabled,o=e.eventKey,d=e.className,j=e.variant,p=e.action,Z=e.as,N=(0,i.Z)(e,h);a=(0,l.vE)(a,"list-group-item");var y=(0,f.v)((0,t.Z)({key:(0,v.h)(o,N.href),active:r},N)),b=(0,u.Z)(y,2),g=b[0],E=b[1],C=(0,m.Z)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();g.onClick(e)}));c&&void 0===N.tabIndex&&(N.tabIndex=-1,N["aria-disabled"]=!0);var q=Z||(p?N.href?"a":"button":"div");return(0,x.jsx)(q,(0,t.Z)((0,t.Z)((0,t.Z)({ref:n},N),g),{},{onClick:C,className:s()(d,a,E.isActive&&"active",c&&"disabled",j&&"".concat(a,"-").concat(j),p&&"".concat(a,"-action"))}))}));j.displayName="ListGroupItem";var p=j,Z=["className","bsPrefix","variant","horizontal","numbered","as"],N=c.forwardRef((function(e,n){var a,r=(0,o.Ch)(e,{activeKey:"onSelect"}),c=r.className,u=r.bsPrefix,m=r.variant,f=r.horizontal,v=r.numbered,h=r.as,j=void 0===h?"div":h,p=(0,i.Z)(r,Z),N=(0,l.vE)(u,"list-group");return f&&(a=!0===f?"horizontal":"horizontal-".concat(f)),(0,x.jsx)(d.Z,(0,t.Z)((0,t.Z)({ref:n},p),{},{as:j,className:s()(c,N,m&&"".concat(N,"-").concat(m),a&&"".concat(N,"-").concat(a),v&&"".concat(N,"-numbered"))}))}));N.displayName="ListGroup";var y=Object.assign(N,{Item:p})},916:function(){}}]);
//# sourceMappingURL=7359.d56266b6.chunk.js.map