"use strict";(self.webpackChunkts_react_app=self.webpackChunkts_react_app||[]).push([[363],{3394:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(1686),r="index_button__QsKQn",a=t(184),i=function(e){var n=e.element;return(0,a.jsx)("div",{className:r,style:n.style,children:(0,a.jsx)(o.Z,{element:n})})}},5274:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(1686),r="index_circle__FXthc",a=t(184),i=function(e){var n=e.element;return(0,a.jsx)("div",{className:r,style:n.style,children:(0,a.jsx)(o.Z,{element:n})})}},5940:function(e,n,t){var o=t(184);n.Z=function(e){var n=e.propValue;return(0,o.jsx)("img",{style:{height:"100%",width:"100%",overflow:"hidden"},src:n,alt:""})}},5128:function(e,n,t){t.d(n,{Z:function(){return a}});var o="index_music__RPBgP",r=t(184),a=function(e){var n=e.element;return(0,r.jsxs)("div",{className:o,style:n.style,children:["Music",(0,r.jsx)("audio",{autoPlay:!0,src:"https://other-web-ra01-sycdn.kuwo.cn/5c650cd4d3b798405ed9bfab4ae1fe18/63941698/resource/n3/320/31/1/1060334909.mp3"})]})}},1052:function(e,n,t){t.d(n,{Z:function(){return i}});var o=t(1686),r="index_rect__fBigi",a=t(184),i=function(e){var n=e.element;return(0,a.jsx)("div",{className:r,style:n.style,children:(0,a.jsx)(o.Z,{element:n})})}},1686:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(9439),r=t(2791),a=t(5048),i="index_text__66qHR",c="index_can-edit__99vF5",u=t(6210),l=t(184),s=function(e){var n=e.element,t=(0,a.v9)((function(e){return e.editor})),s=t.editMode,d=t.curComponent,p=(0,u.Z)().setComponentContent,f=(0,r.useState)(!1),m=(0,o.Z)(f,2),y=m[0],v=m[1],h=(0,r.useRef)({}),C=function(e){e.target.contains(h.current)&&e.target!==h.current&&(p({element:n,content:h.current.innerHTML}||"&nbsp;"),v(!1))};(0,r.useEffect)((function(){d!==n&&(v(!1),x())}),[d]),(0,r.useEffect)((function(){y?window.addEventListener("click",C,!1):window.removeEventListener("click",C)}),[y]);var g=function(e){var n=window.getSelection(),t=document.createRange();t.selectNodeContents(e),n&&(n.removeAllRanges(),n.addRange(t))},x=function(){var e=window.getSelection();e&&e.removeAllRanges()};return(0,l.jsx)(l.Fragment,{children:"edit"===s?(0,l.jsx)("div",{className:i,children:(0,l.jsx)("div",{ref:h,className:" ".concat(y?c:""),style:{verticalAlign:n.style.verticalAlign},contentEditable:y,onDoubleClick:function(){v(!0),g(h.current)},onMouseDown:function(e){y&&e.stopPropagation()},dangerouslySetInnerHTML:{__html:n.propValue}})}):(0,l.jsx)("div",{className:" ".concat(y?c:""),children:n.propValue})})}},6210:function(e,n,t){t.d(n,{F:function(){return c},Z:function(){return i}});var o=t(5048),r=t(8427),a=t(9153);function i(){var e=(0,o.I0)();return{setProjectData:function(n){e({type:r.M.SetProjectData,payload:n})},setCurrentPageUUID:function(n){e({type:r.M.SetCurrentPageUUID,payload:n})},addPage:function(n){e({type:r.M.AddPage,payload:n})},deletePage:function(n){e({type:r.M.DeletePage,payload:n})},copyPage:function(n){e({type:r.M.CopyPage,payload:n})},setEditor:function(n){e({type:r.M.SetEditor,payload:n})},addComponent:function(n){e({type:r.M.AddComponent,payload:n})},setCurComponent:function(n){var t=n.curComponent,o=n.curComponentIndex;e({type:r.M.SetCurComponent,payload:{curComponent:t,curComponentIndex:o}})},setWrapStyle:function(n){e({type:r.M.SetWrapStyle,payload:n})},setClickComponentStatus:function(n){e({type:r.M.SetClickComponentStatus,payload:n})},setComponetData:function(n){e({type:r.M.SetComponentData,payload:n})},setComponentStyle:function(n){e({type:r.M.SetComponentStyle,payload:n})},setComponentContent:function(n){e({type:r.M.SetComponentContent,payload:n})},deleteComponent:function(n){e({type:r.M.DeleteComponent,payload:n})},upComponent:function(){e({type:r.M.UpComponent})},downComponent:function(){e({type:r.M.DownComponent})},topComponent:function(){e({type:r.M.TopComponent})},bottomComponent:function(){e({type:r.M.BottomComponent})},updateComponentPropValue:function(n){e({type:r.M.UpdateComponentPropValue,payload:n})},recordSnapshot:function(){e({type:r.M.RecordSnapshot})},undo:function(){e({type:r.M.Undo})},redo:function(){e({type:r.M.Redo})},copy:function(){e({type:r.M.Copy})},paste:function(n){e({type:r.M.Paste,payload:n})},cut:function(){e({type:r.M.Cut})},showContextMenu:function(n){e({type:r.M.ShowContextMenu,payload:n})},hideContextMenu:function(){e({type:r.M.HideContextMenu})},clearCanvas:function(){console.log("clear"),e({type:r.M.SetComponentData,payload:[]}),e({type:r.M.SetCurComponent,payload:{curComponent:null,curComponentIndex:null}}),e({type:r.M.RecordSnapshot})}}}var c=function(){var e,n=a.Z.getState().editor,t=n.projectData,o=n.currentPageUUID;return(null===t||void 0===t||null===(e=t.pages)||void 0===e?void 0:e.find((function(e){return e.uuid===o})))||{}}},6299:function(e,n,t){t.d(n,{U:function(){return o},o:function(){return r}});var o={redirect:function(e){e&&(window.location.href=e)},alert:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}((function(e){e&&alert(e)}))},r=[{key:"redirect",label:"\u8df3\u8f6c\u4e8b\u4ef6",event:o.redirect,param:""},{key:"alert",label:"alert \u4e8b\u4ef6",event:o.alert,param:""}]},6842:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(4165),r=t(5861);function a(e){return i.apply(this,arguments)}function i(){return i=(0,r.Z)((0,o.Z)().mark((function e(n){var t,r,a,i,u=arguments;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=u.length>1&&void 0!==u[1]?u[1]:[],r=function(e){return new Promise((function(t){var o=e.animationTime,r=e.value,a=void 0===r?"":r,i=e.isLoop,u=void 0!==i&&i;n.style.setProperty("--time",o+"s"),n.classList.add(a,"animate__animated",c(u));var l=function e(){n.removeEventListener("animationend",e),n.removeEventListener("animationcancel",e),n.classList.remove(a,"animate__animated",c(u)),n.style.removeProperty("--time"),t()};n.addEventListener("animationend",l),n.addEventListener("animationcancel",l)}))},a=0,i=t.length;case 3:if(!(a<i)){e.next=9;break}return e.next=6,r(t[a]);case 6:a++,e.next=3;break;case 9:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function c(e){return e?"animate__infinite":"animate__no-infinite"}},3903:function(e,n,t){function o(e){var n={};return["width","height","top","left","rotate"].forEach((function(t){"rotate"!==t?n[t]=e[t]:n.transform="rotate("+e[t]+"deg)"})),n}t.d(n,{M:function(){return o}})},7363:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var o=t(1413),r=t(4165),a=t(5861),i=t(9439),c="index_content__kZcTY",u=t(1686),l=t(3394),s=t(1052),d=t(5274),p=t(5940),f=t(5128),m=(t(2144),t(2791)),y="index_component-wrap__7Gp8d",v=t(6842),h=t(6299),C=t(184),g=function(e){var n=e.element,t=e.children,o=(e.defaultStyle,e.style),r=(0,m.useRef)(null);return(0,m.useEffect)((function(){n.fns||(n.fns={}),n.animations.length>0&&(n.fns.animation=function(){(0,v.Z)(r.current,n.animations)},n.fns.animation());var e=function(e){n.fns[e]=function(){return h.U[e](n.events[e])},r.current&&(r.current.style.cursor="pointer",r.current.onclick=n.fns[e])};for(var t in n.events)e(t)}),[]),(0,C.jsx)("div",{ref:r,className:"".concat(y),style:o,children:t})},x=t(3903),M=t(7689),_=t(757),w=t(1480),S=t(9042),j=(t(4676),function(e){var n,t=e.id,y=e.projectData,v=(0,m.useState)(),h=(0,i.Z)(v,2),j=h[0],Z=h[1],P=(0,M.UO)().id;(0,m.useEffect)((function(){function e(){return(e=(0,a.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.j)(P||t||"");case 3:n=e.sent,Z(n.result),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}y?Z(y):function(){e.apply(this,arguments)}()}),[]);var k=function(e){switch(e.component){case"Text":default:return(0,C.jsx)(u.Z,{element:e});case"Button":return(0,C.jsx)(l.Z,{element:e});case"Rect":return(0,C.jsx)(s.Z,{element:e});case"Circle":return(0,C.jsx)(d.Z,{element:e});case"Image":return(0,C.jsx)(p.Z,{propValue:e.propValue});case"Music":return(0,C.jsx)(f.Z,{element:e})}};return(0,C.jsx)(C.Fragment,{children:null!==j&&void 0!==j&&j.isPublish?(0,C.jsx)(S.tq,{direction:(null===j||void 0===j?void 0:j.flipType)===w.lK.UpDown?"vertical":"horizontal",style:{width:null===j||void 0===j?void 0:j.width,height:null===j||void 0===j?void 0:j.height},slidesPerView:1,onSlideChange:function(){return console.log("slide change")},onSwiper:function(e){return console.log(e)},children:null===j||void 0===j||null===(n=j.pages)||void 0===n?void 0:n.map((function(e){return(0,C.jsx)(S.o5,{style:{width:"100%"},children:(0,C.jsx)("div",{style:(0,o.Z)((0,o.Z)({width:j.width,height:j.height,transform:"scale(".concat(j.scale/100,")")},null===e||void 0===e?void 0:e.pageStyle),{},{backgroundImage:null!==e&&void 0!==e&&e.pageStyle?"url(".concat(null===e||void 0===e?void 0:e.pageStyle.backgroundImage,")"):""}),children:(0,C.jsx)("div",{className:c,children:(0,C.jsx)("div",{style:(0,o.Z)({},j.canvasStyleData),children:null===e||void 0===e?void 0:e.componentData.map((function(e){return(0,C.jsx)(g,{defaultStyle:e.style,style:(0,x.M)(e.style),element:e,children:k(e)},e.id)}))})})})},e.uuid)}))}):(0,C.jsx)(C.Fragment,{})})})}}]);
//# sourceMappingURL=363.bab90e12.chunk.js.map