(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{BsWD:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("a3WO");function o(e,t){if(e){if("string"===typeof e)return Object(r.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r.a)(e,t):void 0}}},CZrd:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ODXe");var o=n("q1tI"),i=new Map,u=new Map,a={emitter:{events:{},emit(e,...t){for(let n of this.events[e]||[])n(...t)},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=this.events[e].filter(e=>e!==t)}},api:null,error:null};window.gm_authFailure=function(){a.error=new Error("Gmap encountered auth error. See console for more details."),a.api=null,a.emitter.emit("change")},window.rgm_mapLoaded=function(){null==a.error&&(a.api=window.google.maps),a.emitter.emit("change")};var c=function(){var e=o.useState(a.api),t=Object(r.a)(e,2),n=t[0],c=t[1],l="AIzaSyBC4njLnT0Gr9Lo_necn1pHL5OdzSMHXHY";var f=function(e){var t=o.useState("loading"),n=Object(r.a)(t,2),a=n[0],c=n[1];return o.useEffect((function(){var t=!0,n=function(){i.set(e,"done"),t&&c("done")},r=function(){i.set(e,"failed"),t&&c("failed")},o=i.get(e);if(null==o){var a=document.createElement("script");a.async=!0,a.defer=!0,a.importance="low",a.src=e,a.addEventListener("load",n),a.addEventListener("error",r),i.set(e,"loading"),u.set(e,a),document.body&&document.body.appendChild(a)}if("loading"===o){var l=u.get(e);if(l)return l.addEventListener("load",n),l.addEventListener("error",r),function(){l.removeEventListener("load",n),l.removeEventListener("error",r)}}return"done"===o&&c("done"),"failed"===o&&c("failed"),function(){t=!1}}),[e]),a}("https://maps.googleapis.com/maps/api/js?key=".concat(l,"&libraries=places&callback=rgm_mapLoaded"));return o.useEffect((function(){return null==n&&null!=a.api&&c(a.api),a.emitter.on("change",(function(){c(a.api)}))}),[n,f]),n}},ODXe:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("BsWD");function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},a3WO:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"a",(function(){return r}))},ckBT:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return l})),n.d(t,"GoogleMarker",(function(){return f})),n.d(t,"default",(function(){return s}));var r=n("q1tI"),o=n("tjUo"),i=n("CZrd"),u=n("TOXp"),a=n("qKvR"),c=(r.createElement,{zoom:9,center:{lat:59.936,lng:30.314}}),l=!0,f=function(e){var t=e.lat,n=e.lng,i=Object(o.d)(),u=i.api,a=i.map;return r.useEffect((function(){if(u){var e=new u.Marker({map:a,position:{lat:t,lng:n}});return function(){e.setMap(null)}}}),[u,a,t,n]),null};function s(){var e=Object(i.a)();return Object(a.c)(u.g,{value:.75},e&&Object(a.c)(o.a,{api:e,options:c},Object(a.c)(f,{lat:c.center.lat,lng:c.center.lng})))}},evMQ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/google-marker",function(){return n("ckBT")}])},tjUo:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return d}));var r=n("ODXe"),o=n("q1tI"),i=n("qKvR"),u=(o.createElement,o.createContext(null)),a=(function(){var e={}}(),{width:"100%",height:"100%"}),c=o.forwardRef((function(e,t){var n=o.useRef(null),c=o.useRef(!1),l=o.useState(null),f=Object(r.a)(l,2),s=f[0],d=f[1];o.useImperativeHandle(t,(function(){return s}),[s]),o.useEffect((function(){if(n.current&&!c.current){var t,r=new e.api.Map(n.current,null!==(t=e.options)&&void 0!==t?t:{});return d(r),c.current=!0,function(){}}}),[e.api,e.options]);var p=o.useMemo((function(){return{map:s,api:e.api}}),[s,e.api]);return Object(i.c)(u.Provider,{value:p},Object(i.c)("div",{style:a,ref:n}),s&&e.children)})),l=function(){return o.useContext(u)},f=n("i8i4"),s=(o.createElement,function(e){return e.children}),d=function(e){var t,n=l(),u=n.api,a=n.map,c=o.useRef(2),s=o.Children.toArray(null!==(t=e.children)&&void 0!==t?t:[]),d=o.useState(null),p=Object(r.a)(d,2),v=p[0],m=p[1],g=o.useRef([]),h=o.useRef([]),b=function(e){return Math.round(e*c.current)/c.current};if(o.useLayoutEffect((function(){g.current=s.map((function(e){return{lat:e.props.lat,lng:e.props.lng}}))})),o.useEffect((function(){if(u){c.current=window.devicePixelRatio;var e=new u.OverlayView,t=null;return e.onAdd=function(){(t=document.createElement("div")).style.position="absolute",t.style.width="0",t.style.height="0",t.style.left="0",t.style.top="0",e.getPanes().floatPane.appendChild(t),m({element:t,view:e})},e.onRemove=function(){if(null!=t){var e=t.parentNode;null!=e&&e.removeChild(t),m(null)}},e.draw=function(){var t=e.getProjection();g.current.forEach((function(e,n){var r=e.lat,o=e.lng,i=h.current[n].current;if(null!=i){var a=t.fromLatLngToDivPixel(new u.LatLng(r,o));i.style.left=b(a.x)+"px",i.style.top=b(a.y)+"px"}}))},e.setMap(a),function(){e.setMap(null)}}}),[u,a]),null!=v&&null!=s&&null!=u){var w=v.view.getProjection();return f.createPortal(s.map((function(t,n){var r=w.fromLatLngToDivPixel(new u.LatLng(t.props.lat,t.props.lng));return null==h.current[n]&&(h.current[n]={current:null}),Object(i.c)("div",{key:t.key,ref:h.current[n],style:{position:"absolute",left:b(r.x),top:b(r.y),display:"grid",gridTemplateColumns:0,gridTemplateRows:0}},t,!0===e.debug&&Object(i.c)("div",{style:{position:"absolute",borderRadius:"100%",width:4,height:4,left:-2,top:-2,opacity:.8,boxShadow:"0 0 0 2px blue, 0 0 0 4px white, 0 0 0 6px blue"}}))})),v.element)}return null}}},[["evMQ",0,1,3,2,4]]]);