"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5075],{2500:function(e,n,a){var t=a(2677),i=a(1398),r=(a(2791),a(184));n.Z=function(){return(0,r.jsxs)(t.Z,{sm:2,children:[(0,r.jsx)("div",{className:"todayDate",children:(0,r.jsx)("h2",{children:"2023-11-07"})}),(0,r.jsxs)(i.Z,{className:"asideMenu",children:[(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/adminIndex",children:"ADMIN HOME"}),(0,r.jsxs)(i.Z.Item,{action:!0,variant:"light",children:["\uba54\ub274\uad00\ub9ac",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/menu/AdminMenuList",children:"\u25b6 \uba54\ub274\ubaa9\ub85d"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/menu/AdminMenuRegister",children:"\u25b6 \uba54\ub274\ub4f1\ub85d"})})]})]}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/order/adminOrderStatus",children:"\uc8fc\ubb38\ud604\ud669"}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/banner/adminBanner",children:"\ubc30\ub108\uad00\ub9ac"}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/event/adminEventList",children:"\uc774\ubca4\ud2b8\uad00\ub9ac"}),(0,r.jsxs)(i.Z.Item,{action:!0,variant:"light",children:["\ucfe0\ud3f0\uad00\ub9ac",(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/coupon/AdminCouponList",children:"\u25b6 \ucfe0\ud3f0\uc9c0\uae09\ub0b4\uc5ed"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/admin/coupon/adminCouponPayment",children:"\u25b6 \ucfe0\ud3f0\uc9c0\uae09"})})]})]}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/notice/adminNoticeList",children:"\uacf5\uc9c0\uc0ac\ud56d\uad00\ub9ac"}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/faq/adminFaqList",children:"\uc790\uc8fc\ubb3b\ub294\uc9c8\ubb38"}),(0,r.jsx)(i.Z.Item,{action:!0,variant:"light",href:"/admin/qna/adminQna",children:"\uace0\uac1d\uc758\uc18c\ub9ac"})]})]})}},5075:function(e,n,a){a.r(n),a.d(n,{default:function(){return j}});var t=a(9439),i=a(2791),r=(a(916),a(8949)),s=a(7022),c=a(9743),o=a(2677),d=a(2500),l=a(7689),m=a(1087),u=a(5294),f=a(184);var v=function(e){var n=e.page,a=e.setPage,t=e.pageData,r=(0,l.s0)();(0,i.useEffect)((function(){a(1)}),[t.cate]);var s=function(e){a(e),r("/admin/faq/adminFaqList".concat(t.cate?"?cate=".concat(t.cate):"","&page=").concat(e))};return(0,f.jsxs)("div",{className:"paging",children:[(0,f.jsx)("span",{className:"num prev ".concat(t.prev?"":" disabled"),onClick:function(){return s(t.start-1)},children:"<"}),function(){for(var e=[],a=function(a){e.push((0,f.jsx)("span",{className:"num".concat(n===a?" on":""),onClick:function(){return s(a)},children:a},a))},i=t.start;i<=t.end;i++)a(i);return e}(),(0,f.jsx)("span",{className:"num next ".concat(t.next?"":" disabled"),onClick:function(){return s(t.end+1)},children:">"})]})};function x(){var e=(0,i.useState)([]),n=(0,t.Z)(e,2),a=n[0],s=n[1],c=(0,i.useState)({}),o=(0,t.Z)(c,2),d=o[0],m=o[1],x=(0,i.useState)(1),h=(0,t.Z)(x,2),j=h[0],Z=h[1],N=(0,l.TH)(),p=new URLSearchParams(N.search).get("cate");return(0,i.useEffect)((function(){u.Z.get("/api/admin/faq/adminFaqList?cate=".concat(p||"","&page=").concat(j)).then((function(e){s(e.data.csList),m(e.data),Z(e.data.pg)})).catch((function(e){console.error("\ub370\uc774\ud130\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. error : "+e)}))}),[p,j]),console.log(a),console.log(d),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(r.Z,{children:[a.map((function(e,n){return(0,f.jsxs)(r.Z.Item,{eventKey:n.toString(),children:[(0,f.jsxs)(r.Z.Header,{children:["[",e.cateName,"]",e.title,(0,f.jsx)("span",{className:"date",children:(a=e.rdate,new Date(a).toLocaleDateString(void 0,{year:"numeric",month:"2-digit",day:"2-digit"}))})]}),(0,f.jsxs)(r.Z.Body,{children:[(0,f.jsx)("p",{children:e.content.split("\n").map((function(e,n){return(0,f.jsxs)(i.Fragment,{children:[e,(0,f.jsx)("br",{})]},n)}))}),(0,f.jsxs)("p",{children:[(0,f.jsx)("button",{className:"btnModify",children:"\uc218\uc815"}),(0,f.jsx)("button",{className:"btnDelete",children:"\uc0ad\uc81c"})]})]})]},n);var a})),(0,f.jsxs)(r.Z.Item,{eventKey:"4",children:[(0,f.jsxs)(r.Z.Header,{children:["[\uc774\uc6a9\ubb38\uc758] \ub9e4\uc7a5\uc5d0\uc11c \uba87 \uba85\uae4c\uc9c0 \uc2dd\uc0ac\uac00 \uac00\ub2a5\ud55c\uac00\uc694?",(0,f.jsx)("span",{className:"date",children:"2023-11-01"})]}),(0,f.jsxs)(r.Z.Body,{children:[(0,f.jsx)("p",{children:(0,f.jsx)("textarea",{})}),(0,f.jsx)("p",{children:(0,f.jsx)("button",{className:"btnModify",children:"\uc644\ub8cc"})})]})]})]}),(0,f.jsx)(v,{page:j,setPage:Z,pageData:d})]})}function h(){var e=(0,l.TH)(),n=function(n){return new URLSearchParams(e.search).get("cate")===n};return(0,f.jsxs)("div",{className:"AdminFaqCate",children:[(0,f.jsx)(m.rU,{to:"/admin/faq/adminFaqList?cate=10",className:n("10")?"on":"",children:"\uc774\ubca4\ud2b8"}),(0,f.jsx)(m.rU,{to:"/admin/faq/adminFaqList?cate=11",className:n("11")?"on":"",children:"\uc8fc\ubb38/\uacb0\uc81c"}),(0,f.jsx)(m.rU,{to:"/admin/faq/adminFaqList?cate=12",className:n("12")?"on":"",children:"\ucde8\uc18c/\ud658\ubd88"}),(0,f.jsx)(m.rU,{to:"/admin/faq/adminFaqList?cate=13",className:n("13")?"on":"",children:"\ud61c\ud0dd"}),(0,f.jsx)(m.rU,{to:"/admin/faq/adminFaqList?cate=14",className:n("14")?"on":"",children:"\uc774\uc6a9\ubb38\uc758"}),(0,f.jsx)(m.rU,{to:"/admin/faq/adminFaqList?cate=15",className:n("15")?"on":"",children:"\ud68c\uc6d0\uc815\ubcf4"}),(0,f.jsx)(m.rU,{to:"/admin/faq/adminFaqList?cate=16",className:n("16")?"on":"",children:"\ucfe0\ud3f0"})]})}var j=function(){return(0,f.jsx)("section",{id:"admin",children:(0,f.jsx)(s.Z,{id:"adminFaqList",children:(0,f.jsxs)(c.Z,{className:"justify-content-center",children:[(0,f.jsx)(d.Z,{}),(0,f.jsxs)(o.Z,{children:[(0,f.jsx)("div",{className:"faqRegisterButton",children:(0,f.jsx)(m.rU,{to:"/admin/faq/adminFaqRegister",className:"btnWrite",children:"\uc790\uc8fc\ubb3b\ub294\uc9c8\ubb38 \ub4f1\ub85d"})}),(0,f.jsx)(h,{}),(0,f.jsx)(x,{})]})]})})})}},8949:function(e,n,a){a.d(n,{Z:function(){return S}});var t=a(1413),i=a(5987),r=a(1694),s=a.n(r),c=a(2791),o=a(8580),d=a(162),l=a(7858);function m(e,n){return Array.isArray(e)?e.includes(n):e===n}var u=c.createContext({});u.displayName="AccordionContext";var f=u,v=a(184),x=["as","bsPrefix","className","children","eventKey"],h=c.forwardRef((function(e,n){var a=e.as,r=void 0===a?"div":a,o=e.bsPrefix,u=e.className,h=e.children,j=e.eventKey,Z=(0,i.Z)(e,x),N=(0,c.useContext)(f).activeEventKey;return o=(0,d.vE)(o,"accordion-collapse"),(0,v.jsx)(l.Z,(0,t.Z)((0,t.Z)({ref:n,in:m(N,j)},Z),{},{className:s()(u,o),children:(0,v.jsx)(r,{children:c.Children.only(h)})}))}));h.displayName="AccordionCollapse";var j=h,Z=c.createContext({eventKey:""});Z.displayName="AccordionItemContext";var N=Z,p=["as","bsPrefix","className","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y=c.forwardRef((function(e,n){var a=e.as,r=void 0===a?"div":a,o=e.bsPrefix,l=e.className,m=e.onEnter,u=e.onEntering,f=e.onEntered,x=e.onExit,h=e.onExiting,Z=e.onExited,y=(0,i.Z)(e,p);o=(0,d.vE)(o,"accordion-body");var b=(0,c.useContext)(N).eventKey;return(0,v.jsx)(j,{eventKey:b,onEnter:m,onEntering:u,onEntered:f,onExit:x,onExiting:h,onExited:Z,children:(0,v.jsx)(r,(0,t.Z)((0,t.Z)({ref:n},y),{},{className:s()(l,o)}))})}));y.displayName="AccordionBody";var b=y,g=a(3433),E=["as","bsPrefix","className","onClick"];var C=c.forwardRef((function(e,n){var a=e.as,r=void 0===a?"button":a,o=e.bsPrefix,l=e.className,u=e.onClick,x=(0,i.Z)(e,E);o=(0,d.vE)(o,"accordion-button");var h=(0,c.useContext)(N).eventKey,j=function(e,n){var a=(0,c.useContext)(f),t=a.activeEventKey,i=a.onSelect,r=a.alwaysOpen;return function(a){var s=e===t?null:e;r&&(s=Array.isArray(t)?t.includes(e)?t.filter((function(n){return n!==e})):[].concat((0,g.Z)(t),[e]):[e]),null==i||i(s,a),null==n||n(a)}}(h,u),Z=(0,c.useContext)(f).activeEventKey;return"button"===r&&(x.type="button"),(0,v.jsx)(r,(0,t.Z)((0,t.Z)({ref:n,onClick:j},x),{},{"aria-expanded":Array.isArray(Z)?Z.includes(h):h===Z,className:s()(l,o,!m(Z,h)&&"collapsed")}))}));C.displayName="AccordionButton";var q=C,P=["as","bsPrefix","className","children","onClick"],K=c.forwardRef((function(e,n){var a=e.as,r=void 0===a?"h2":a,c=e.bsPrefix,o=e.className,l=e.children,m=e.onClick,u=(0,i.Z)(e,P);return c=(0,d.vE)(c,"accordion-header"),(0,v.jsx)(r,(0,t.Z)((0,t.Z)({ref:n},u),{},{className:s()(o,c),children:(0,v.jsx)(q,{onClick:m,children:l})}))}));K.displayName="AccordionHeader";var L=K,A=["as","bsPrefix","className","eventKey"],I=c.forwardRef((function(e,n){var a=e.as,r=void 0===a?"div":a,o=e.bsPrefix,l=e.className,m=e.eventKey,u=(0,i.Z)(e,A);o=(0,d.vE)(o,"accordion-item");var f=(0,c.useMemo)((function(){return{eventKey:m}}),[m]);return(0,v.jsx)(N.Provider,{value:f,children:(0,v.jsx)(r,(0,t.Z)((0,t.Z)({ref:n},u),{},{className:s()(l,o)}))})}));I.displayName="AccordionItem";var w=I,k=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],F=c.forwardRef((function(e,n){var a=(0,o.Ch)(e,{activeKey:"onSelect"}),r=a.as,l=void 0===r?"div":r,m=a.activeKey,u=a.bsPrefix,x=a.className,h=a.onSelect,j=a.flush,Z=a.alwaysOpen,N=(0,i.Z)(a,k),p=(0,d.vE)(u,"accordion"),y=(0,c.useMemo)((function(){return{activeEventKey:m,onSelect:h,alwaysOpen:Z}}),[m,h,Z]);return(0,v.jsx)(f.Provider,{value:y,children:(0,v.jsx)(l,(0,t.Z)((0,t.Z)({ref:n},N),{},{className:s()(x,p,j&&"".concat(p,"-flush"))}))})}));F.displayName="Accordion";var S=Object.assign(F,{Button:q,Collapse:j,Item:w,Header:L,Body:b})},1398:function(e,n,a){a.d(n,{Z:function(){return y}});var t=a(1413),i=a(5987),r=a(1694),s=a.n(r),c=a(2791),o=(a(2391),a(8580)),d=a(1337),l=a(162),m=a(9439),u=a(9007),f=a(4787),v=a(8633),x=a(184),h=["bsPrefix","active","disabled","eventKey","className","variant","action","as"],j=c.forwardRef((function(e,n){var a=e.bsPrefix,r=e.active,c=e.disabled,o=e.eventKey,d=e.className,j=e.variant,Z=e.action,N=e.as,p=(0,i.Z)(e,h);a=(0,l.vE)(a,"list-group-item");var y=(0,f.v)((0,t.Z)({key:(0,v.h)(o,p.href),active:r},p)),b=(0,m.Z)(y,2),g=b[0],E=b[1],C=(0,u.Z)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();g.onClick(e)}));c&&void 0===p.tabIndex&&(p.tabIndex=-1,p["aria-disabled"]=!0);var q=N||(Z?p.href?"a":"button":"div");return(0,x.jsx)(q,(0,t.Z)((0,t.Z)((0,t.Z)({ref:n},p),g),{},{onClick:C,className:s()(d,a,E.isActive&&"active",c&&"disabled",j&&"".concat(a,"-").concat(j),Z&&"".concat(a,"-action"))}))}));j.displayName="ListGroupItem";var Z=j,N=["className","bsPrefix","variant","horizontal","numbered","as"],p=c.forwardRef((function(e,n){var a,r=(0,o.Ch)(e,{activeKey:"onSelect"}),c=r.className,m=r.bsPrefix,u=r.variant,f=r.horizontal,v=r.numbered,h=r.as,j=void 0===h?"div":h,Z=(0,i.Z)(r,N),p=(0,l.vE)(m,"list-group");return f&&(a=!0===f?"horizontal":"horizontal-".concat(f)),(0,x.jsx)(d.Z,(0,t.Z)((0,t.Z)({ref:n},Z),{},{as:j,className:s()(c,p,u&&"".concat(p,"-").concat(u),a&&"".concat(p,"-").concat(a),v&&"".concat(p,"-numbered"))}))}));p.displayName="ListGroup";var y=Object.assign(p,{Item:Z})},916:function(){}}]);
//# sourceMappingURL=5075.f1bf27cd.chunk.js.map