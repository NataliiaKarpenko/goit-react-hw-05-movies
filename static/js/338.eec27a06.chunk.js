"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[338],{1313:function(n,t,e){e.d(t,{$H:function(){return m},DL:function(){return y},VU:function(){return w},Z$:function(){return x},h7:function(){return b}});var r=e(5861),A=e(4687),a=e.n(A),c=e(1243),o="https://api.themoviedb.org/3",i="60bdd84997c9f2a4c6cd2341c547ed98",s="/trending/movie/day",u="/search/movie",f="/movie",l="/credits",p="/reviews",d="language=en-US",g="include_adult=false",x=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o).concat(s,"?api_key=").concat(i,"&page=").concat(t,"&").concat(g));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(a().mark((function n(t,e){var r,A;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o).concat(u,"?api_key=").concat(i,"&").concat(d,"&").concat(g,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,A=r.data,n.abrupt("return",A);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),w=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o).concat(f,"/").concat(t,"?api_key=").concat(i,"&").concat(d));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r,A;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(o).concat(f,"/").concat(t).concat(l,"?api_key=").concat(i,"&").concat(d));case 2:return e=n.sent,r=e.data,A=r.cast,n.abrupt("return",A);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),b=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r,A,s=arguments;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,n.next=3,c.Z.get("".concat(o).concat(f,"/").concat(t).concat(p,"?api_key=").concat(i,"&").concat(d,"&page=").concat(e));case 3:return r=n.sent,A=r.data,n.abrupt("return",A);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2033:function(n,t,e){e.d(t,{o:function(){return i}});var r,A=e(9711),a=e(168),c=e(7691).ZP.div(r||(r=(0,a.Z)(["\n  position: absolute;\n  bottom: 10;\n  left: 50%;\n  transform: translate(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & img {\n    width: 300px;\n    height: auto;\n    margin-bottom: 15px;\n  }\n\n  & p {\n    font-size: 18px;\n    color: #34495e;\n  }\n"]))),o=e(184),i=function(n){var t=n.message;return(0,o.jsxs)(c,{children:[(0,o.jsx)("img",{src:A,alt:"red button",width:"300"}),(0,o.jsx)("p",{children:t})]})}},2821:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,A=e(5861),a=e(9439),c=e(4687),o=e.n(c),i=e(2791),s=e(7689),u=e(5206),f=e(1313),l=e(8644),p=e(168),d=e(7691).ZP.ul(r||(r=(0,p.Z)(["\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  list-style: none;\n\n  li {\n    flex-basis: calc((100% - 60px) / 4);\n    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n  }\n\n  .ImageContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 500px;\n    overflow-y: hidden;\n    border-radius: 5px;\n  }\n\n  img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .InfoContainer {\n    padding: 10px;\n    color: #22313f;\n  }\n\n  .title {\n    margin: 0;\n    margin-bottom: 15px;\n    font-weight: bold;\n    font-size: 20px;\n  }\n  .text {\n    margin: 0;\n    font-size: 17px;\n  }\n\n  span {\n    font-style: italic;\n  }\n"]))),g=e(184),x=function(n){var t=n.actingCast;return(0,g.jsx)(d,{children:t.map((function(n){var t=n.id,e=n.profile_path,r=n.original_name,A=n.name,a=n.character;return(0,g.jsxs)("li",{children:[(0,g.jsx)("div",{className:"ImageContainer",children:(0,g.jsx)("img",{width:200,src:e?"https://image.tmdb.org/t/p/w300/".concat(e):l,alt:r})}),(0,g.jsxs)("div",{className:"InfoContainer",children:[(0,g.jsx)("p",{className:"title",children:A}),(0,g.jsxs)("p",{className:"text",children:[(0,g.jsx)("span",{children:"Character:"})," ",a]})]})]},t)}))})},m=e(9245),w=e(2033),y=function(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],c=(0,i.useState)("idle"),l=(0,a.Z)(c,2),p=l[0],d=l[1],y=(0,i.useState)(null),b=(0,a.Z)(y,2),h=b[0],k=b[1],v=(0,s.UO)().movieId;(0,i.useEffect)((function(){d("pending");var n=function(){var n=(0,A.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.DL)(t);case 3:if(0!==(e=n.sent).length){n.next=8;break}return u.Am.warning("Sorry, no results found",{toastId:"warning1"}),d("idle"),n.abrupt("return");case 8:r(e),d("resolved"),n.next=17;break;case 12:n.prev=12,n.t0=n.catch(0),console.log(n.t0),k("\u274c ".concat(n.t0.message)),d("rejected");case 17:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(t){return n.apply(this,arguments)}}();n(v),j()}),[v]);var j=function(){window.scrollBy({top:document.documentElement.clientHeight-160,behavior:"smooth"})};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.Ix,{autoClose:3e3,theme:"colored",position:"bottom-center",limit:1}),"pending"===p&&(0,g.jsx)(m.a,{}),"rejected"===p&&(0,g.jsx)(w.o,{message:h}),"resolved"===p&&(0,g.jsx)(x,{actingCast:e})]})}},8182:function(n,t,e){function r(n){var t,e,A="";if("string"==typeof n||"number"==typeof n)A+=n;else if("object"==typeof n)if(Array.isArray(n))for(t=0;t<n.length;t++)n[t]&&(e=r(n[t]))&&(A&&(A+=" "),A+=e);else for(t in n)n[t]&&(A&&(A+=" "),A+=t);return A}t.Z=function(){for(var n,t,e=0,A="";e<arguments.length;)(n=arguments[e++])&&(t=r(n))&&(A&&(A+=" "),A+=t);return A}},9711:function(n,t,e){n.exports=e.p+"static/media/errorImg.f340655446e287466997.jpeg"},8644:function(n){n.exports="data:image/jpeg;base64,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"},4942:function(n,t,e){e.d(t,{Z:function(){return A}});var r=e(9142);function A(n,t,e){return(t=(0,r.Z)(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}},1413:function(n,t,e){e.d(t,{Z:function(){return a}});var r=e(4942);function A(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function a(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?A(Object(e),!0).forEach((function(t){(0,r.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}},3366:function(n,t,e){function r(n,t){if(null==n)return{};var e,r,A={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(A[e]=n[e]);return A}e.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=338.eec27a06.chunk.js.map