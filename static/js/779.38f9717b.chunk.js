"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{877:function(n,e,t){t.d(e,{Q0:function(){return o},uG:function(){return p},wu:function(){return l},xZ:function(){return f},z1:function(){return i}});var r=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="774e1d28d884f123afe2adc71c6f8534",i=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?query=".concat(e,"&api_key=").concat(s,"&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},779:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,a,u,c=t(861),s=t(439),i=t(757),o=t.n(i),p=t(791),f=t(689),l=t(877),d=t(168),v=t(444),h=v.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n"]))),x=v.ZP.li(a||(a=(0,d.Z)(["\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 10px;\n  font-size: 16px;\n"]))),m=v.ZP.p(u||(u=(0,d.Z)(["\n  margin-bottom: 10px;\n  font-size: 20px;\n  font-weight: 700;\n"]))),g=t(184),Z=function(){var n=(0,p.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,f.UO)().movieId;return(0,p.useEffect)((function(){function n(){return(n=(0,c.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.xZ)(a);case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),(0,g.jsxs)("div",{children:[0===t.length&&(0,g.jsx)("h3",{children:"We don't have any reviews for this movie."}),(0,g.jsx)(h,{children:t.map((function(n){return(0,g.jsx)(x,{children:(0,g.jsxs)("div",{children:[(0,g.jsx)(m,{children:n.author}),(0,g.jsx)("span",{style:{display:"block"},children:n.content})]})},n.id)}))})]})}}}]);
//# sourceMappingURL=779.38f9717b.chunk.js.map