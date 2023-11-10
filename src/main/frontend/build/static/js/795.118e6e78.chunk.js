"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[795],{1701:function(e,a,i){i.d(a,{Ed:function(){return l},UI:function(){return s},XW:function(){return t}});var r=i(2791);function s(e,a){var i=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?a(e,i++):e}))}function l(e,a){var i=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&a(e,i++)}))}function t(e,a){return r.Children.toArray(e).some((function(e){return r.isValidElement(e)&&e.type===a}))}},9795:function(e,a,i){i.d(a,{Z:function(){return ae}});var r=i(1413),s=i(5987),l=i(1694),t=i.n(l),n=i(2007),o=i.n(n),d=i(2791),c=i(184),f=["as","className","type","tooltip"],v={type:o().string,tooltip:o().bool,as:o().elementType},m=d.forwardRef((function(e,a){var i=e.as,l=void 0===i?"div":i,n=e.className,o=e.type,d=void 0===o?"valid":o,v=e.tooltip,m=void 0!==v&&v,u=(0,s.Z)(e,f);return(0,c.jsx)(l,(0,r.Z)((0,r.Z)({},u),{},{ref:a,className:t()(n,"".concat(d,"-").concat(m?"tooltip":"feedback"))}))}));m.displayName="Feedback",m.propTypes=v;var u=m,p=i(6882),b=i(4934),x=i(162),Z=["bsPrefix","className","htmlFor"],N=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,n=e.htmlFor,o=(0,s.Z)(e,Z),f=(0,d.useContext)(b.Z).controlId;return i=(0,x.vE)(i,"form-check-label"),(0,c.jsx)("label",(0,r.Z)((0,r.Z)({},o),{},{ref:a,htmlFor:n||f,className:t()(l,i)}))}));N.displayName="FormCheckLabel";var h=N,y=i(1701),I=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=d.forwardRef((function(e,a){var i=e.id,l=e.bsPrefix,n=e.bsSwitchPrefix,o=e.inline,f=void 0!==o&&o,v=e.reverse,m=void 0!==v&&v,Z=e.disabled,N=void 0!==Z&&Z,j=e.isValid,F=void 0!==j&&j,w=e.isInvalid,P=void 0!==w&&w,k=e.feedbackTooltip,C=void 0!==k&&k,g=e.feedback,E=e.feedbackType,R=e.className,V=e.style,z=e.title,S=void 0===z?"":z,T=e.type,L=void 0===T?"checkbox":T,O=e.label,G=e.children,H=e.as,M=void 0===H?"input":H,W=(0,s.Z)(e,I);l=(0,x.vE)(l,"form-check"),n=(0,x.vE)(n,"form-switch");var X=(0,d.useContext)(b.Z).controlId,A=(0,d.useMemo)((function(){return{controlId:i||X}}),[X,i]),U=!G&&null!=O&&!1!==O||(0,y.XW)(G,h),_=(0,c.jsx)(p.Z,(0,r.Z)((0,r.Z)({},W),{},{type:"switch"===L?"checkbox":L,ref:a,isValid:F,isInvalid:P,disabled:N,as:M}));return(0,c.jsx)(b.Z.Provider,{value:A,children:(0,c.jsx)("div",{style:V,className:t()(R,U&&l,f&&"".concat(l,"-inline"),m&&"".concat(l,"-reverse"),"switch"===L&&n),children:G||(0,c.jsxs)(c.Fragment,{children:[_,U&&(0,c.jsx)(h,{title:S,children:O}),g&&(0,c.jsx)(u,{type:E,tooltip:C,children:g})]})})})}));j.displayName="FormCheck";var F=Object.assign(j,{Input:p.Z,Label:h}),w=(i(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),P=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.type,n=e.size,o=e.htmlSize,f=e.id,v=e.className,m=e.isValid,u=void 0!==m&&m,p=e.isInvalid,Z=void 0!==p&&p,N=e.plaintext,h=e.readOnly,y=e.as,I=void 0===y?"input":y,j=(0,s.Z)(e,w),F=(0,d.useContext)(b.Z).controlId;return i=(0,x.vE)(i,"form-control"),(0,c.jsx)(I,(0,r.Z)((0,r.Z)({},j),{},{type:l,size:o,ref:a,readOnly:h,id:f||F,className:t()(v,N?"".concat(i,"-plaintext"):i,n&&"".concat(i,"-").concat(n),"color"===l&&"".concat(i,"-color"),u&&"is-valid",Z&&"is-invalid")}))}));P.displayName="FormControl";var k=Object.assign(P,{Feedback:u}),C=["className","bsPrefix","as"],g=d.forwardRef((function(e,a){var i=e.className,l=e.bsPrefix,n=e.as,o=void 0===n?"div":n,d=(0,s.Z)(e,C);return l=(0,x.vE)(l,"form-floating"),(0,c.jsx)(o,(0,r.Z)({ref:a,className:t()(i,l)},d))}));g.displayName="FormFloating";var E=g,R=["controlId","as"],V=d.forwardRef((function(e,a){var i=e.controlId,l=e.as,t=void 0===l?"div":l,n=(0,s.Z)(e,R),o=(0,d.useMemo)((function(){return{controlId:i}}),[i]);return(0,c.jsx)(b.Z.Provider,{value:o,children:(0,c.jsx)(t,(0,r.Z)((0,r.Z)({},n),{},{ref:a}))})}));V.displayName="FormGroup";var z=V,S=i(2677),T=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],L=d.forwardRef((function(e,a){var i=e.as,l=void 0===i?"label":i,n=e.bsPrefix,o=e.column,f=void 0!==o&&o,v=e.visuallyHidden,m=void 0!==v&&v,u=e.className,p=e.htmlFor,Z=(0,s.Z)(e,T),N=(0,d.useContext)(b.Z).controlId;n=(0,x.vE)(n,"form-label");var h="col-form-label";"string"===typeof f&&(h="".concat(h," ").concat(h,"-").concat(f));var y=t()(u,n,m&&"visually-hidden",f&&h);return p=p||N,f?(0,c.jsx)(S.Z,(0,r.Z)({ref:a,as:"label",className:y,htmlFor:p},Z)):(0,c.jsx)(l,(0,r.Z)({ref:a,className:y,htmlFor:p},Z))}));L.displayName="FormLabel";var O=L,G=["bsPrefix","className","id"],H=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,n=e.id,o=(0,s.Z)(e,G),f=(0,d.useContext)(b.Z).controlId;return i=(0,x.vE)(i,"form-range"),(0,c.jsx)("input",(0,r.Z)((0,r.Z)({},o),{},{type:"range",ref:a,className:t()(l,i),id:n||f}))}));H.displayName="FormRange";var M=H,W=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],X=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.size,n=e.htmlSize,o=e.className,f=e.isValid,v=void 0!==f&&f,m=e.isInvalid,u=void 0!==m&&m,p=e.id,Z=(0,s.Z)(e,W),N=(0,d.useContext)(b.Z).controlId;return i=(0,x.vE)(i,"form-select"),(0,c.jsx)("select",(0,r.Z)((0,r.Z)({},Z),{},{size:n,ref:a,className:t()(o,i,l&&"".concat(i,"-").concat(l),v&&"is-valid",u&&"is-invalid"),id:p||N}))}));X.displayName="FormSelect";var A=X,U=["bsPrefix","className","as","muted"],_=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,n=e.as,o=void 0===n?"small":n,d=e.muted,f=(0,s.Z)(e,U);return i=(0,x.vE)(i,"form-text"),(0,c.jsx)(o,(0,r.Z)((0,r.Z)({},f),{},{ref:a,className:t()(l,i,d&&"text-muted")}))}));_.displayName="FormText";var q=_,B=d.forwardRef((function(e,a){return(0,c.jsx)(F,(0,r.Z)((0,r.Z)({},e),{},{ref:a,type:"switch"}))}));B.displayName="Switch";var D=Object.assign(B,{Input:F.Input,Label:F.Label}),J=["bsPrefix","className","children","controlId","label"],K=d.forwardRef((function(e,a){var i=e.bsPrefix,l=e.className,n=e.children,o=e.controlId,d=e.label,f=(0,s.Z)(e,J);return i=(0,x.vE)(i,"form-floating"),(0,c.jsxs)(z,(0,r.Z)((0,r.Z)({ref:a,className:t()(l,i),controlId:o},f),{},{children:[n,(0,c.jsx)("label",{htmlFor:o,children:d})]}))}));K.displayName="FloatingLabel";var Q=K,Y=["className","validated","as"],$={_ref:o().any,validated:o().bool,as:o().elementType},ee=d.forwardRef((function(e,a){var i=e.className,l=e.validated,n=e.as,o=void 0===n?"form":n,d=(0,s.Z)(e,Y);return(0,c.jsx)(o,(0,r.Z)((0,r.Z)({},d),{},{ref:a,className:t()(i,l&&"was-validated")}))}));ee.displayName="Form",ee.propTypes=$;var ae=Object.assign(ee,{Group:z,Control:k,Floating:E,Check:F,Switch:D,Label:O,Text:q,Range:M,Select:A,FloatingLabel:Q})},6882:function(e,a,i){var r=i(1413),s=i(5987),l=i(1694),t=i.n(l),n=i(2791),o=i(4934),d=i(162),c=i(184),f=["id","bsPrefix","className","type","isValid","isInvalid","as"],v=n.forwardRef((function(e,a){var i=e.id,l=e.bsPrefix,v=e.className,m=e.type,u=void 0===m?"checkbox":m,p=e.isValid,b=void 0!==p&&p,x=e.isInvalid,Z=void 0!==x&&x,N=e.as,h=void 0===N?"input":N,y=(0,s.Z)(e,f),I=(0,n.useContext)(o.Z).controlId;return l=(0,d.vE)(l,"form-check-input"),(0,c.jsx)(h,(0,r.Z)((0,r.Z)({},y),{},{ref:a,type:u,id:i||I,className:t()(v,l,b&&"is-valid",Z&&"is-invalid")}))}));v.displayName="FormCheckInput",a.Z=v},4934:function(e,a,i){var r=i(2791).createContext({});a.Z=r}}]);
//# sourceMappingURL=795.118e6e78.chunk.js.map