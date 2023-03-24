"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[847],{1313:function(n,t,e){e.d(t,{$H:function(){return g},DL:function(){return b},VU:function(){return v},Z$:function(){return x},h7:function(){return y}});var r=e(5861),a=e(4687),o=e.n(a),c=e(1243),i="https://api.themoviedb.org/3",s="60bdd84997c9f2a4c6cd2341c547ed98",u="/trending/movie/day",p="/search/movie",l="/movie",f="/credits",d="/reviews",h="language=en-US",m="include_adult=false",x=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i).concat(u,"?api_key=").concat(s,"&page=").concat(t,"&").concat(m));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(o().mark((function n(t,e){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i).concat(p,"?api_key=").concat(s,"&").concat(h,"&").concat(m,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i).concat(l,"/").concat(t,"?api_key=").concat(s,"&").concat(h));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),b=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("".concat(i).concat(l,"/").concat(t).concat(f,"?api_key=").concat(s,"&").concat(h));case 2:return e=n.sent,r=e.data,a=r.cast,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r,a,u=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.length>1&&void 0!==u[1]?u[1]:1,n.next=3,c.Z.get("".concat(i).concat(l,"/").concat(t).concat(d,"?api_key=").concat(s,"&").concat(h,"&page=").concat(e));case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2033:function(n,t,e){e.d(t,{o:function(){return s}});var r,a=e(9711),o=e(168),c=e(7691).ZP.div(r||(r=(0,o.Z)(["\n  position: absolute;\n  bottom: 10;\n  left: 50%;\n  transform: translate(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & img {\n    width: 300px;\n    height: auto;\n    margin-bottom: 15px;\n  }\n\n  & p {\n    font-size: 18px;\n    color: #34495e;\n  }\n"]))),i=e(184),s=function(n){var t=n.message;return(0,i.jsxs)(c,{children:[(0,i.jsx)("img",{src:a,alt:"red button",width:"300"}),(0,i.jsx)("p",{children:t})]})}},4593:function(n,t,e){e.d(t,{s:function(){return d}});var r,a,o=e(1087),c=e(7689),i=e(168),s=e(7691),u=s.ZP.li(r||(r=(0,i.Z)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n\n  & .Link {\n    color: #34495e;\n    text-decoration: none;\n  }\n\n  & .Link:hover {\n    color: #22313f;\n    text-decoration: underline;\n  }\n"]))),p=e(184),l=function(n){var t=n.movie,e=(0,c.TH)();return(0,p.jsx)(u,{children:(0,p.jsx)(o.rU,{state:{from:e},to:"/movies/".concat(t.id),className:"Link",children:t.title})})},f=s.ZP.div(a||(a=(0,i.Z)(["\n  text-align: center;\n  & h1 {\n    margin-top: 0;\n    margin-bottom: 50px;\n    font-size: 38px;\n    color: #34495e;\n  }\n\n  & ul {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 50px;\n    text-align: left;\n    font-size: 38px;\n    color: #34495e;\n  }\n"]))),d=function(n){var t=n.movies,e=n.headline;return(0,p.jsxs)(f,{children:[(0,p.jsx)("h1",{children:e}),(0,p.jsx)("ul",{children:t.map((function(n){return(0,p.jsx)(l,{movie:n},n.id)}))})]})}},1847:function(n,t,e){e.r(t),e.d(t,{default:function(){return z}});var r,a,o=e(1413),c=e(5861),i=e(9439),s=e(4687),u=e.n(s),p=e(2791),l=e(7689),f=e(5206),d=e(8494),h=e(168),m=e(7691),x=m.ZP.form(r||(r=(0,h.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 50px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 5px;\n  border: 2px solid #34495e;\n  overflow: hidden;\n\n  & .SearchBtn {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: none;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  .SearchBtn:hover {\n    opacity: 1;\n  }\n\n  & .Input {\n    marging-bottom: 100px;\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding: 4px 6px;\n  }\n\n  & .Input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=e(184),v=function(n){var t=n.onFormSubmit,e=(0,p.useState)(""),r=(0,i.Z)(e,2),a=r[0],o=r[1];return(0,g.jsxs)(x,{onSubmit:function(n){(n.preventDefault(),""!==a.trim())?t(a)&&o(""):f.Am.error("\u203c\ufe0f Enter a key-word")},children:[(0,g.jsx)("input",{className:"Input",type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(n){o(n.currentTarget.value.toLowerCase())},value:a}),(0,g.jsx)("button",{type:"submit",className:"SearchBtn",children:(0,g.jsx)(d.Yfv,{})})]})},b=e(7158),y=m.ZP.div(a||(a=(0,h.Z)(["\n  position: relative;\n  // top: 150px;\n  // left: 50%;\n  // transform: translate(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & img {\n    position: absolute;\n    top: 150px;\n    left: 50%;\n    transform: translate(-50%);\n    width: 600px;\n    height: auto;\n    margin-bottom: 15px;\n  }\n\n  p {\n    font-size: 25px;\n    font-weight: 500;\n    color: #34495e;\n  }\n"]))),w=function(){return(0,g.jsxs)(y,{children:[(0,g.jsx)("p",{children:"Enter a keyword please\ud83d\udc46."}),(0,g.jsx)("img",{src:b,alt:"popcorn",width:"300"})]})},Z=e(2033),j=e(1313),k=e(4593),S=e(9245),_=e(7461),z=function(){var n,t=(0,p.useState)(""),e=(0,i.Z)(t,2),r=e[0],a=e[1],s=(0,p.useState)([]),d=(0,i.Z)(s,2),h=d[0],m=d[1],x=(0,p.useState)(0),b=(0,i.Z)(x,2),y=b[0],z=b[1],C=(0,p.useState)(null),P=(0,i.Z)(C,2),L=P[0],q=P[1],I=(0,p.useState)("idle"),B=(0,i.Z)(I,2),F=B[0],T=B[1],U=(0,l.s0)(),E=(0,l.TH)(),H=null!==(n=new URLSearchParams(E.search).get("page"))&&void 0!==n?n:1;(0,p.useEffect)((function(){if(""!==E.search){var n=new URLSearchParams(E.search).get("query");a(n,H)}}),[E.search,H]),(0,p.useEffect)((function(){var n=function(){var n=(0,c.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.prev=2,T("pending"),n.next=6,(0,j.$H)(t,e);case 6:0===(r=n.sent).results.length?(f.Am.warning("Sorry, there are no movies matching your search query. Please enter another keyword \ud83d\udd0e.",{toastId:"warning2"}),m([]),T("idle")):(m(r.results),z(r.total_pages),T("resolved")),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(2),console.log(n.t0.message),q("\u274c".concat(n.t0.message,". Try again later, please.")),T("rejected");case 15:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t,e){return n.apply(this,arguments)}}();n(r,H)}),[r,H]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{onFormSubmit:function(n){r!==n&&(a(n),m([]),q(null),U((0,o.Z)((0,o.Z)({},E),{},{search:"query=".concat(n,"&page=1")})))}}),(0,g.jsx)(f.Ix,{autoClose:4e3,theme:"colored",limit:1}),"idle"===F&&(0,g.jsx)(w,{}),"pending"===F&&(0,g.jsx)(S.a,{}),"resolved"===F&&(0,g.jsx)(k.s,{headline:"\ud83d\udc47 These movies match your query.",movies:h}),"rejected"===F&&(0,g.jsx)(Z.o,{message:L}),y>1&&(0,g.jsx)(_.f,{count:y,onChange:function(n,t){U((0,o.Z)((0,o.Z)({},E),{},{search:"query=".concat(r,"&page=").concat(t)}))},page:Number(H)})]})}},7461:function(n,t,e){e.d(t,{f:function(){return s}});var r,a=e(3348),o=e(168),c=e(7691).ZP.div(r||(r=(0,o.Z)(["\n  // margin-right: auto;\n  // margin-left: auto;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n"]))),i=e(184),s=function(n){var t=n.count,e=n.page,r=n.onChange;return(0,i.jsx)(c,{children:(0,i.jsx)(a.Z,{count:t,onChange:r,page:e,showFirstButton:!0,showLastButton:!0,size:"large"})})}},9711:function(n,t,e){n.exports=e.p+"static/media/errorImg.f340655446e287466997.jpeg"},7158:function(n,t,e){n.exports=e.p+"static/media/movies.d2f4de4f2931ff6d729e.jpeg"}}]);
//# sourceMappingURL=847.f5c782e1.chunk.js.map