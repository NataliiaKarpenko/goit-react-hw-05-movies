"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[562],{8562:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),c=e(4687),o=e.n(c),i=e(2791),u=e(1087),s=e(2424),p=e(1313),f=e(9245),l=e(9408),d=e(2033),g=e(184);t.default=function(){var n,t=(0,i.useState)([]),e=(0,a.Z)(t,2),c=e[0],v=e[1],h=(0,i.useState)(0),m=(0,a.Z)(h,2),x=m[0],Z=m[1],w=(0,i.useState)("pending"),b=(0,a.Z)(w,2),j=b[0],k=b[1],y=(0,i.useState)(null),_=(0,a.Z)(y,2),L=_[0],z=_[1],C=(0,u.lr)(),S=(0,a.Z)(C,2),B=S[0],P=S[1],F=null!==(n=B.get("page"))&&void 0!==n?n:1;(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Z$)(t);case 3:e=n.sent,v(e.results),Z(e.total_pages),k("resolved"),n.next=14;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0),z("\u274c".concat(n.t0.message,". Try again later, please.")),k("rejected");case 14:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}();n(F)}),[F,P]);return(0,g.jsxs)(g.Fragment,{children:["pending"===j&&(0,g.jsx)(f.a,{}),"rejected"===j&&(0,g.jsx)(d.o,{message:L}),"resolved"===j&&(0,g.jsx)(l.s,{headline:"Trending movies",movies:c}),x>1&&(0,g.jsx)(s.f,{count:x,onChange:function(n,t){P({page:t})},page:Number(F),showFirstButton:!0,showLastButton:!0})]})}},1313:function(n,t,e){e.d(t,{$H:function(){return m},DL:function(){return Z},VU:function(){return x},Z$:function(){return h},h7:function(){return w}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1243),i="https://api.themoviedb.org/3",u="60bdd84997c9f2a4c6cd2341c547ed98",s="/trending/movie/day",p="/search/movie",f="/movie",l="/credits",d="/reviews",g="language=en-US",v="include_adult=false",h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i).concat(s,"?api_key=").concat(u,"&page=").concat(t,"&").concat(v));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),m=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i).concat(p,"?api_key=").concat(u,"&").concat(g,"&").concat(v,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i).concat(f,"/").concat(t,"?api_key=").concat(u,"&").concat(g));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),Z=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i).concat(f,"/").concat(t).concat(l,"?api_key=").concat(u,"&").concat(g));case 2:return e=n.sent,r=e.data,a=r.cast,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),w=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(i).concat(f,"/").concat(t).concat(d,"?api_key=").concat(u,"&").concat(g,"&page=").concat(e));case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()},2033:function(n,t,e){e.d(t,{o:function(){return u}});var r,a=e(9711),c=e(168),o=e(7691).ZP.div(r||(r=(0,c.Z)(["\n  position: absolute;\n  bottom: 10;\n  left: 50%;\n  transform: translate(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & img {\n    width: 300px;\n    height: auto;\n    margin-bottom: 15px;\n  }\n\n  & p {\n    font-size: 18px;\n    color: #34495e;\n  }\n"]))),i=e(184),u=function(n){var t=n.message;return(0,i.jsxs)(o,{children:[(0,i.jsx)("img",{src:a,alt:"red button",width:"300"}),(0,i.jsx)("p",{children:t})]})}},9408:function(n,t,e){e.d(t,{s:function(){return d}});var r,a,c=e(1087),o=e(7689),i=e(168),u=e(7691),s=u.ZP.li(r||(r=(0,i.Z)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n\n  & .Link {\n    color: #34495e;\n    text-decoration: none;\n  }\n\n  & .Link:hover {\n    color: #22313f;\n    text-decoration: underline;\n  }\n"]))),p=e(184),f=function(n){var t=n.movie,e=(0,o.TH)();return(0,p.jsx)(s,{children:(0,p.jsx)(c.rU,{state:{from:e},to:"/movies/".concat(t.id),className:"Link",children:t.title})})},l=u.ZP.div(a||(a=(0,i.Z)(["\n  text-align: center;\n  & h1 {\n    margin-top: 0;\n    margin-bottom: 50px;\n    font-size: 38px;\n    color: #34495e;\n  }\n\n  & ul {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 50px;\n    text-align: left;\n    font-size: 38px;\n    color: #34495e;\n  }\n"]))),d=function(n){var t=n.movies,e=n.headline;return(0,p.jsxs)(l,{children:[(0,p.jsx)("h1",{children:e}),(0,p.jsx)("ul",{children:t.map((function(n){return(0,p.jsx)(f,{movie:n},n.id)}))})]})}},2424:function(n,t,e){e.d(t,{f:function(){return u}});var r,a=e(3348),c=e(168),o=e(7691).ZP.div(r||(r=(0,c.Z)(["\n  // margin-right: auto;\n  // margin-left: auto;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n"]))),i=e(184),u=function(n){var t=n.count,e=n.page,r=n.onChange;return(0,i.jsx)(o,{children:(0,i.jsx)(a.Z,{count:t,onChange:r,page:e,showFirstButton:!0,showLastButton:!0,size:"large"})})}},9711:function(n,t,e){n.exports=e.p+"static/media/errorImg.f340655446e287466997.jpeg"}}]);
//# sourceMappingURL=562.f857033e.chunk.js.map