"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[156],{6156:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var i=t(2791),o=t(7022),a=t(2592),r=t(8326),s=t(1413),l=t(9439),d=t(5987),c="undefined"!==typeof window&&"undefined"!==typeof document?i.useLayoutEffect:i.useEffect,u=function(e,n,t){c((function(){if(e&&t){var i=function(){for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return void 0===i?t(e):t.apply(void 0,[e].concat(i))};return kakao.maps.event.addListener(e,n,i),function(){kakao.maps.event.removeListener(e,n,i)}}}),[e,n,t])},f=t(5671),h=t(3144),p=t(4942),v="__react-kakao-maps-sdk__",k=function(e){return e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE",e}({}),m="".concat(v,"_Loader"),g=function(){function e(n){(0,f.Z)(this,e),(0,p.Z)(this,"callbacks",[]),(0,p.Z)(this,"done",!1),(0,p.Z)(this,"loading",!1),(0,p.Z)(this,"errors",[]);var t=n.appkey,i=n.id,o=void 0===i?m:i,a=n.libraries,r=void 0===a?[]:a,s=n.nonce,l=n.retries,d=void 0===l?3:l,c=n.url,u=void 0===c?"//dapi.kakao.com/v2/maps/sdk.js":c;if(this.id=o,this.appkey=t,this.libraries=r,this.nonce=s,this.retries=d,this.url=u,e.instance&&!e.equalOptions(this.options,e.instance.options)&&!e.equalOptions(this.options,e.instance.options)){if(e.instance.status===k.FAILURE)throw new Error("Loader must not be called again with different options. \n".concat(JSON.stringify(this.options,null,2),"\n!==\n").concat(JSON.stringify(e.instance.options,null,2)));e.instance.reset(),e.instance=this}return e.instance||(e.instance=this),e.instance}return(0,h.Z)(e,[{key:"options",get:function(){return{appkey:this.appkey,id:this.id,libraries:this.libraries,nonce:this.nonce,retries:this.retries,url:this.url}}},{key:"load",value:function(){var e=this;return new Promise((function(n,t){e.loadCallback((function(e){e?t(e):n(window.kakao)}))}))}},{key:"status",get:function(){return this.onEvent?k.FAILURE:this.done?k.SUCCESS:this.loading?k.LOADING:k.INITIALIZED}},{key:"failed",get:function(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}},{key:"loadCallback",value:function(e){this.callbacks.push(e),this.execute()}},{key:"resetIfRetryingFailed",value:function(){this.failed&&this.reset()}},{key:"reset",value:function(){this.deleteScript(),this.done=!0,this.loading=!1,this.errors=[],this.onEvent=void 0}},{key:"execute",value:function(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.kakao&&window.kakao.maps)return console.warn("Kakao Maps\uc774 \uc774\ubbf8 \uc678\ubd80 \uc694\uc18c\uc5d0 \uc758\ud574 \ub85c\ub529\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\uc124\uc815\ud55c \uc635\uc158\uacfc \uc77c\uce58 \ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc73c\uba70, \uc774\uc5d0 \ub530\ub978 \uc608\uc0c1\uce58 \ub3d9\uc791\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),void window.kakao.maps.load(this.callback);this.loading||(this.loading=!0,this.setScript())}}},{key:"setScript",value:function(){document.getElementById(this.id)&&this.callback();var e=this.createUrl(),n=document.createElement("script");n.id=this.id,n.type="text/javascript",n.src=e,n.onerror=this.loadErrorCallback.bind(this),n.onload=this.callback.bind(this),n.defer=!0,n.async=!0,this.nonce&&(n.nonce=this.nonce),document.head.appendChild(n)}},{key:"loadErrorCallback",value:function(n){var t=this;if(this.errors.push(n),this.errors.length<=this.retries){var i=this.errors.length*Math.pow(2,this.errors.length);console.log("Failed to load Kakao Maps script, retrying in ".concat(i," ms.")),setTimeout((function(){t.deleteScript(),t.setScript()}),i)}else this.done=!0,this.loading=!1,this.onEvent=this.errors[this.errors.length-1],this.callbacks.forEach((function(e){e(t.onEvent)})),this.callbacks=[],e.loadEventCallback.forEach((function(e){e(t.onEvent)}))}},{key:"createUrl",value:function(){var e=this.url;return e+="?appkey=".concat(this.appkey),this.libraries.length&&(e+="&libraries=".concat(this.libraries.join(","))),e+="&autoload=false"}},{key:"deleteScript",value:function(){var e=document.getElementById(this.id);e&&e.remove()}},{key:"callback",value:function(){kakao.maps.load((function(){e.instance.done=!0,e.instance.loading=!1,e.instance.callbacks.forEach((function(n){n(e.instance.onEvent)})),e.instance.callbacks=[],e.loadEventCallback.forEach((function(n){n(e.instance.onEvent)}))}))}}],[{key:"addLoadEventLisnter",value:function(n){return window.kakao&&window.kakao.maps&&window.kakao.maps.load(n),e.loadEventCallback.add(n),n}},{key:"removeLoadEventLisnter",value:function(n){return e.loadEventCallback.delete(n)}},{key:"equalOptions",value:function(e,n){if(e.appkey!==n.appkey)return!1;if(e.id!==n.id)return!1;if(e.libraries.length!==n.libraries.length)return!1;for(var t=0;t<e.libraries.length;++t)if(e.libraries[t]!==n.libraries[t])return!1;return e.nonce===n.nonce&&(e.retries===n.retries&&e.url===n.url)}}]),e}();(0,p.Z)(g,"loadEventCallback",new Set);var b=t(184),y=["id","as","children","center","isPanto","padding","disableDoubleClick","disableDoubleClickZoom","draggable","zoomable","keyboardShortcuts","level","maxLevel","minLevel","mapTypeId","projectionId","scrollwheel","tileAnimation","onBoundsChanged","onCenterChanged","onClick","onDoubleClick","onDrag","onDragEnd","onDragStart","onIdle","onMaptypeidChanged","onMouseMove","onRightClick","onTileLoaded","onZoomChanged","onZoomStart","onCreate"],x=i.createContext(void 0),L=i.forwardRef((function(e,n){var t=e.id,o=e.as,a=e.children,r=e.center,f=e.isPanto,h=void 0!==f&&f,p=e.padding,k=void 0===p?32:p,m=e.disableDoubleClick,L=e.disableDoubleClickZoom,E=e.draggable,C=e.zoomable,I=e.keyboardShortcuts,j=e.level,w=e.maxLevel,S=e.minLevel,M=e.mapTypeId,Z=e.projectionId,D=e.scrollwheel,N=e.tileAnimation,A=e.onBoundsChanged,z=e.onCenterChanged,R=e.onClick,T=e.onDoubleClick,O=e.onDrag,P=e.onDragEnd,_=e.onDragStart,B=e.onIdle,F=e.onMaptypeidChanged,U=e.onMouseMove,q=e.onRightClick,H=e.onTileLoaded,G=e.onZoomChanged,J=e.onZoomStart,K=e.onCreate,W=(0,d.Z)(e,y),Y=o||"div",Q=(0,i.useState)(!1),V=(0,l.Z)(Q,2),X=V[0],$=V[1],ee=(0,i.useState)(),ne=(0,l.Z)(ee,2),te=ne[0],ie=ne[1],oe=(0,i.useRef)(null);return c((function(){var e=g.addLoadEventLisnter((function(e){return $(!e)}));return function(){g.removeLoadEventLisnter(e)}}),[]),c((function(){if(X){var e=oe.current;if(e){var n="lat"in r?new kakao.maps.LatLng(r.lat,r.lng):new kakao.maps.Coords(r.x,r.y),t=new kakao.maps.Map(e,{center:n,disableDoubleClick:m,disableDoubleClickZoom:L,draggable:E,keyboardShortcuts:I,level:j,mapTypeId:"string"===typeof M?kakao.maps.MapTypeId[M]:M,projectionId:Z,scrollwheel:D,tileAnimation:N});return ie(t),function(){e.innerHTML=""}}}}),[X,m,L,N]),(0,i.useImperativeHandle)(n,(function(){return te}),[te]),c((function(){te&&K&&K(te)}),[te,K]),c((function(){if(te){var e=te.getCenter();e instanceof kakao.maps.Coords&&(e=e.toLatLng());var n="lat"in r?new kakao.maps.LatLng(r.lat,r.lng):new kakao.maps.Coords(r.x,r.y);n instanceof kakao.maps.LatLng&&n.equals(e)||n instanceof kakao.maps.Coords&&n.toLatLng().equals(e)||(h?te.panTo(n,k):te.setCenter(n))}}),[te,r.lat,r.lng,r.x,r.y]),c((function(){te&&"undefined"!==typeof E&&te.setDraggable(E)}),[te,E]),c((function(){te&&"undefined"!==typeof C&&te.setZoomable(C)}),[te,C]),c((function(){te&&I&&"boolean"===typeof I&&te.setKeyboardShortcuts(I)}),[te,I]),c((function(){te&&j&&te.setLevel(j)}),[te,j]),c((function(){te&&M&&te.setMapTypeId("string"===typeof M?kakao.maps.MapTypeId[M]:M)}),[te,M]),c((function(){te&&Z&&te.setProjectionId(Z)}),[te,Z]),c((function(){te&&w&&te.setMaxLevel(w)}),[te,w]),c((function(){te&&S&&te.setMinLevel(S)}),[te,S]),u(te,"bounds_changed",A),u(te,"center_changed",z),u(te,"click",R),u(te,"dblclick",T),u(te,"drag",O),u(te,"dragstart",_),u(te,"dragend",P),u(te,"idle",B),u(te,"maptypeid_changed",F),u(te,"mousemove",U),u(te,"rightclick",q),u(te,"tilesloaded",H),u(te,"zoom_changed",G),u(te,"zoom_start",J),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Y,(0,s.Z)((0,s.Z)({id:t||"".concat(v,"_Map")},W),{},{ref:oe})),te&&(0,b.jsx)(x.Provider,{value:te,children:a})]})})),E=t(4164),C=i.forwardRef((function(e,n){var t=e.map,o=e.position,a=e.marker,r=e.children,s=e.altitude,l=e.disableAutoPan,d=e.range,c=e.removable,u=e.zIndex,f=e.onCreate,h=(0,i.useRef)(document.createElement("div")),p=(0,i.useMemo)((function(){var e=new kakao.maps.InfoWindow({altitude:s,disableAutoPan:l,range:d,removable:c,zIndex:u,content:h.current,position:o});return h.current.style.display="none",e}),[l,c]);return(0,i.useImperativeHandle)(n,(function(){return p}),[p]),(0,i.useLayoutEffect)((function(){return p.open(t,a),function(){p.close()}}),[t,a]),(0,i.useLayoutEffect)((function(){f&&f(p)}),[p,f]),(0,i.useLayoutEffect)((function(){p&&p.setPosition(o)}),[p,o]),(0,i.useLayoutEffect)((function(){p&&s&&p.setAltitude(s)}),[p,s]),(0,i.useLayoutEffect)((function(){p&&d&&p.setRange(d)}),[p,d]),(0,i.useLayoutEffect)((function(){p&&u&&p.setZIndex(u)}),[p,u]),h.current.parentElement&&E.createPortal(r,h.current.parentElement)})),I=i.createContext(void 0),j=i.forwardRef((function(e,n){var t=e.map,o=e.position,a=e.children,r=e.altitude,s=e.clickable,l=e.draggable,d=e.image,c=e.infoWindowOptions,f=e.onCreate,h=e.onClick,p=e.onDragEnd,v=e.onDragStart,k=e.onMouseOut,m=e.onMouseOver,g=e.opacity,y=e.range,x=e.title,L=e.zIndex,E=(0,i.useContext)(I),j=(0,i.useMemo)((function(){var e,n,t,i,o,a,r,s,l,c,u,f;return d&&new kakao.maps.MarkerImage(d.src,new kakao.maps.Size(d.size.width,d.size.height),{alt:null===(e=d.options)||void 0===e?void 0:e.alt,coords:null===(n=d.options)||void 0===n?void 0:n.coords,offset:(null===(t=d.options)||void 0===t?void 0:t.offset)&&new kakao.maps.Point(null===(i=d.options)||void 0===i?void 0:i.offset.x,null===(o=d.options)||void 0===o?void 0:o.offset.y),shape:null===(a=d.options)||void 0===a?void 0:a.shape,spriteOrigin:(null===(r=d.options)||void 0===r?void 0:r.spriteOrigin)&&new kakao.maps.Point(null===(s=d.options)||void 0===s?void 0:s.spriteOrigin.x,null===(l=d.options)||void 0===l?void 0:l.spriteOrigin.y),spriteSize:(null===(c=d.options)||void 0===c?void 0:c.spriteSize)&&new kakao.maps.Size(null===(u=d.options)||void 0===u?void 0:u.spriteSize.width,null===(f=d.options)||void 0===f?void 0:f.spriteSize.height)})}),[JSON.stringify(d)]),w=(0,i.useMemo)((function(){return new kakao.maps.Marker({altitude:r,clickable:s,draggable:l,image:j,opacity:g,range:y,title:x,zIndex:L,position:o})}),[]);return(0,i.useImperativeHandle)(n,(function(){return w}),[w]),(0,i.useLayoutEffect)((function(){return E?E.addMarker(w,!0):w.setMap(t),function(){E?E.removeMarker(w,!0):w.setMap(null)}}),[t,E,w]),(0,i.useLayoutEffect)((function(){f&&f(w)}),[w,f]),u(w,"click",h),u(w,"dragstart",v),u(w,"dragend",p),u(w,"mouseout",k),u(w,"mouseover",m),(0,i.useLayoutEffect)((function(){t&&w&&o&&w.setPosition(o)}),[t,w,o]),(0,i.useLayoutEffect)((function(){t&&w&&j&&w.setImage(j)}),[t,w,j]),(0,i.useLayoutEffect)((function(){t&&w&&r&&w.setAltitude(r)}),[t,w,r]),(0,i.useLayoutEffect)((function(){t&&w&&"undefined"!==typeof s&&w.setClickable(s)}),[t,w,s]),(0,i.useLayoutEffect)((function(){t&&w&&"undefined"!==typeof l&&w.setDraggable(l)}),[t,w,l]),(0,i.useLayoutEffect)((function(){t&&w&&g&&w.setOpacity(g)}),[t,w,g]),(0,i.useLayoutEffect)((function(){t&&w&&y&&w.setRange(y)}),[t,w,y]),(0,i.useLayoutEffect)((function(){t&&w&&x&&w.setTitle(x)}),[t,w,x]),(0,i.useLayoutEffect)((function(){t&&w&&L&&w.setZIndex(L)}),[t,w,L]),a?(0,b.jsx)(C,{position:o,map:t,marker:w,altitude:null===c||void 0===c?void 0:c.altitude,disableAutoPan:null===c||void 0===c?void 0:c.disableAutoPan,range:null===c||void 0===c?void 0:c.range,removable:null===c||void 0===c?void 0:c.removable,zIndex:null===c||void 0===c?void 0:c.zIndex,children:a}):null})),w=["position"],S=i.forwardRef((function(e,n){var t=e.position,o=(0,d.Z)(e,w),a=function(e){var n=(0,i.useContext)(x);if(!n)throw new Error("".concat(e?e+" Component":"useMap"," must exist inside Map Component!"));return n}("MapMarker"),r=(0,i.useMemo)((function(){return"lat"in t?new kakao.maps.LatLng(t.lat,t.lng):new kakao.maps.Coords(t.x,t.y).toLatLng()}),[t.lat,t.lng,t.x,t.y]);return(0,b.jsx)(j,(0,s.Z)((0,s.Z)({map:a,position:r},o),{},{ref:n}))})),M=t(1523),Z=t.n(M),D=t(6651);var N=function(){return(0,b.jsxs)("section",{id:"introduce",children:[(0,b.jsx)("div",{className:"pin-spacer",children:(0,b.jsx)("div",{className:"bg"})}),(0,b.jsxs)(o.Z,{children:[(0,b.jsx)("div",{className:"link_menu",children:(0,b.jsxs)("ul",{children:[(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"#brandIntro",children:(0,b.jsx)(Z(),{path:D.F_Q,size:3})})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"#BI",children:(0,b.jsx)(Z(),{path:D.Fu_,size:3})})}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:"#map",children:(0,b.jsx)(Z(),{path:D.dfL,size:3})})})]})}),(0,b.jsxs)("div",{className:"brandIntro",id:"brandIntro",children:[(0,b.jsx)("h3",{children:"\ube0c\ub79c\ub4dc \uc18c\uac1c"}),(0,b.jsxs)("div",{className:"brandContent",children:[(0,b.jsx)("p",{children:"\ub86c\ubcf5\ub5a1\ubcf5\uc774 LomDDeock"}),(0,b.jsxs)("p",{children:["\uc138\uc0c1\uc5d0 \ub5a1\ubcf6\uc774\ub294 \ub9ce\uc2b5\ub2c8\ub2e4.",(0,b.jsx)("br",{}),"\uadf8\ub7ec\ub098 \ub9db\uc788\ub294 \ub5a1\ubcf6\uc774\ub294 \ud754\uce58 \uc54a\uc2b5\ub2c8\ub2e4."]}),(0,b.jsxs)("p",{children:["\ub9db\uc788\ub294, \ub2e4\uc591\ud55c \ub5a1\ubcf6\uc774 \ub9db\uc73c\ub85c \uc218\ub9ce\uc740 \uace0\uac1d\ub4e4\uc744 \ub9e4\ub2c8\uc544\ub85c \ub9cc\ub4e0 \ub9db",(0,b.jsx)("br",{}),"\uac00\uc871, \uce5c\uad6c, \uc5f0\uc778, \ub3d9\ub8cc \ub4f1 \uc88b\uc740 \uc0ac\ub78c\ub4e4\uacfc \ud568\uaed8 \uc990\uae38 \uc218 \uc788\ub294"]}),(0,b.jsxs)("p",{children:[(0,b.jsx)("strong",{children:"\ub86c\ubcf5\ub5a1\ubcf6\uc774"}),"\uc785\ub2c8\ub2e4."]})]})]}),(0,b.jsxs)("div",{className:"BI",id:"BI",children:[(0,b.jsx)("h3",{children:"BI(BRAND IDENTITY)"}),(0,b.jsx)(a.Z,{src:r,alt:"\ub85c\uace0",className:"logo"}),(0,b.jsxs)("p",{children:["\uc704 \ub86c\ubcf5\ub5a1\ubcf6\uc774 BI(BRAND IDENTITY)\uc758 \ud615\ud0dc\ub098 \ube44\ub840\ub294 \uc5b4\ub5a0\ud55c \uacbd\uc6b0\uc5d0\ub3c4 \uc815\ud655\ud558\uac8c \ud45c\ud604\ub418\uc5b4\uc57c \ud558\uba70, ",(0,b.jsx)("br",{}),"\uaddc\uc815\ub41c \ud615\ud0dc\uc640 \ube44\ub840, \uc0c9\uc0c1\uc740 \uc784\uc758\ub85c \ubcc0\uacbd\ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub354\ud558\uc5ec, \ube0c\ub79c\ub4dc\uc758 \uc2dc\uac01\uc801 \uc774\ubbf8\uc9c0\ub97c \uc804\ub2ec\ud574\uc8fc\ub294 ",(0,b.jsx)("br",{}),"\uc911\uc694 \uc218\ub2e8\uc774\ubbc0\ub85c \uc81c\uc2dc\ub41c \uac00\uc774\ub4dc\ub77c\uc778\uc744 \uc900\uc218\ud558\ub294 \ub3d9\uc2dc\uc5d0, \ube0c\ub79c\ub4dc \uc774\ubbf8\uc9c0\uc5d0 \uc190\uc0c1\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\ud558\uc5ec",(0,b.jsx)("br",{}),"\uc0ac\uc6a9\ud558\uc5ec\uc57c \ud569\ub2c8\ub2e4."]})]}),(0,b.jsxs)("div",{className:"map",id:"map",children:[(0,b.jsx)("h3",{children:"\uc624\uc2dc\ub294 \uae38"}),(0,b.jsx)(L,{className:"mapContainer",center:{lat:33.450701,lng:126.570667},style:{width:"1400px",height:"700px"},level:4,children:(0,b.jsx)(S,{position:{lat:33.450701,lng:126.570667}})}),(0,b.jsxs)("table",{id:"adress",children:[(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"\uc8fc\uc18c"}),(0,b.jsx)("td",{children:"\uc11c\uc6b8 \ud2b9\ubcc4\uc2dc \uc131\ub3d9\uad6c \uc131\uc218\uc774\ub85c18\uae38 7,  HS\ube4c\ub529 7\uce35"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"\ub300\ud45c\ubc88\ud638"}),(0,b.jsx)("td",{children:"070-1234-1234"})]}),(0,b.jsxs)("tr",{children:[(0,b.jsx)("td",{children:"\ub300\ud45c E-MAIL"}),(0,b.jsx)("td",{children:"lomDDeock@lomlom.com"})]})]})]})]})]})}},2592:function(e,n,t){t.d(n,{i:function(){return h}});var i=t(1413),o=t(5987),a=t(1694),r=t.n(a),s=t(2791),l=t(2007),d=t.n(l),c=t(162),u=t(184),f=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],h={bsPrefix:d().string,fluid:d().bool,rounded:d().bool,roundedCircle:d().bool,thumbnail:d().bool},p=s.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,s=e.fluid,l=void 0!==s&&s,d=e.rounded,h=void 0!==d&&d,p=e.roundedCircle,v=void 0!==p&&p,k=e.thumbnail,m=void 0!==k&&k,g=(0,o.Z)(e,f);return t=(0,c.vE)(t,"img"),(0,u.jsx)("img",(0,i.Z)((0,i.Z)({ref:n},g),{},{className:r()(a,l&&"".concat(t,"-fluid"),h&&"rounded",v&&"rounded-circle",m&&"".concat(t,"-thumbnail"))}))}));p.displayName="Image",n.Z=p}}]);
//# sourceMappingURL=156.84ae1233.chunk.js.map