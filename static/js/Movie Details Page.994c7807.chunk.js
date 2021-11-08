(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[2],{101:function(t,e,n){t.exports={link:"AdditionalInfo_link__2oHT5",activeLink:"AdditionalInfo_activeLink__2mD4S AdditionalInfo_link__2oHT5"}},102:function(t,e,n){t.exports={movieDetails:"MovieDetails_movieDetails__3xKGM",movieInfo:"MovieDetails_movieInfo__PJOMm",img:"MovieDetails_img__3mlg7"}},103:function(t,e,n){t.exports={Button:"Button_Button__NFdMf"}},108:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var c=n(58),a=n(0),i=n(3),o=n(55),r=n(80),s=n(9),l=n(101),u=n.n(l),d=n(1);function j(t){var e=t.movieInfo,n=t.location;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(s.c,{to:{pathname:"/movies/".concat(e.id,"/cast"),state:{from:{location:n}}},className:u.a.link,activeClassName:u.a.activeLink,children:"Cast"})},"add-1"),Object(d.jsx)("li",{children:Object(d.jsx)(s.c,{to:{pathname:"/movies/".concat(e.id,"/reviews"),state:{from:{location:n}}},className:u.a.link,activeClassName:u.a.activeLink,children:"Reviews"})},"add-2")]})})}var f=n(102),b=n.n(f);function v(t){var e=t.movieInfo,n=t.location,c=e?"".concat("https://image.tmdb.org/t/p/w500/").concat(e.poster_path):r.a;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:b.a.movieDetails,children:[Object(d.jsx)("img",{src:c,alt:"poster",className:b.a.img,width:"250"}),Object(d.jsxs)("div",{className:b.a.movieInfo,children:[Object(d.jsxs)("h2",{children:[e.original_title," (",e.release_date.slice(0,4),")"]}),Object(d.jsxs)("p",{children:["User Score: ",e.popularity.toFixed(0),"%"]}),Object(d.jsx)("h3",{children:"Owerview"}),Object(d.jsx)("p",{children:e.overview}),Object(d.jsx)("h3",{children:"Genres"}),Object(d.jsx)("ul",{children:e.genres.map((function(t){return Object(d.jsx)("li",{children:t.name},t.id)}))})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("h3",{children:"Additional information"}),Object(d.jsx)(j,{movieInfo:e,location:n}),Object(d.jsx)("hr",{})]})}var h=n(103),O=n.n(h);function m(t){var e,n,c,a=t.location,i=t.onClick;return Object(d.jsx)("button",{type:"button",className:O.a.Button,onClick:i,children:null!==(e=null===a||void 0===a||null===(n=a.state)||void 0===n||null===(c=n.from)||void 0===c?void 0:c.label)&&void 0!==e?e:"Go back"})}var p=n(15),x=n(54),_=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,105))})),g=Object(a.lazy)((function(){return n.e(8).then(n.bind(null,106))}));function k(){var t=Object(i.i)(),e=t.url,n=t.path,r=Object(a.useState)(null),s=Object(c.a)(r,2),l=s[0],u=s[1],j=Object(a.useState)(null),f=Object(c.a)(j,2),b=f[0],h=f[1],O=Object(a.useState)(null),k=Object(c.a)(O,2),E=k[0],I=k[1],w=Object(i.f)(),y=Object(i.g)(),S=Object(i.h)();Object(a.useEffect)((function(){S&&o.b(S.movieId).then(u).catch((function(t){return Object(x.a)(t.massage)}))}),[S]),Object(a.useEffect)((function(){l&&o.a(l.id).then(h).catch((function(t){return Object(x.a)(t.massage)}))}),[l]),Object(a.useEffect)((function(){l&&o.c(l.id).then(I).catch((function(t){return Object(x.a)(t.massage)}))}),[l]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{location:y,onClick:function(){var t,n,c;return w.push(null!==(t=null===y||void 0===y||null===(n=y.state)||void 0===n||null===(c=n.from)||void 0===c?void 0:c.location)&&void 0!==t?t:e)}}),l&&Object(d.jsx)(v,{movieInfo:l,location:y}),Object(d.jsx)(a.Suspense,{fallback:Object(d.jsx)(p.a,{}),children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"".concat(n,"/cast"),children:b&&Object(d.jsx)(_,{cast:b})}),Object(d.jsx)(i.a,{exact:!0,path:"".concat(n,"/reviews"),children:E&&Object(d.jsx)(g,{reviews:E})})]})})]})}},54:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(69),a=n(62),i=(n(63),n(64),n(65),n(66),n(67));function o(t){Object(a.error)({text:t,delay:4e3,modules:new Map([].concat(Object(c.a)(a.defaultModules),[[i,{swipeDismiss:!0}]]))})}a.defaults.styling="angeler",a.defaults.icons="angeler",a.defaults.delay=800,a.defaults.sticker=!1,a.defaults.animateSpeed="slow",a.defaults.shadow=!1},55:function(t,e,n){"use strict";n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return v})),n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return O})),n.d(e,"c",(function(){return m}));var c=n(59),a=n.n(c),i=n(60),o=n(61),r=n.n(o),s=n(54),l="https://api.themoviedb.org/3/",u="de7bae5f5f0124b91214e980e542706d",d={GET_TRENDING:"".concat(l,"trending/movie/day"),SEARCH_MOVIES:"".concat(l,"search/movie"),GET_MOVIE_DETAILS:"".concat(l,"movie")};function j(){return f.apply(this,arguments)}function f(){return f=Object(i.a)(a.a.mark((function t(){var e,n,c,i=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{},t.prev=2,t.next=5,r.a.get(e,n);case 5:return c=t.sent,t.next=8,c.data;case 8:return t.abrupt("return",t.sent);case 11:return t.prev=11,t.t0=t.catch(2),t.abrupt("return",Object(s.a)(t.t0.message));case 14:case"end":return t.stop()}}),t,null,[[2,11]])}))),f.apply(this,arguments)}function b(){return j("".concat(d.GET_TRENDING,"?api_key=").concat(u)).then((function(t){return t.results}))}function v(t){return j("".concat(d.SEARCH_MOVIES,"?api_key=").concat(u,"&query=").concat(t)).then((function(t){return t.results}))}function h(t){return j("".concat(d.GET_MOVIE_DETAILS,"/").concat(t,"?api_key=").concat(u))}function O(t){return j("".concat(d.GET_MOVIE_DETAILS,"/").concat(t,"/credits?api_key=").concat(u))}function m(t){return j("".concat(d.GET_MOVIE_DETAILS,"/").concat(t,"/reviews?api_key=").concat(u))}},80:function(t,e,n){"use strict";e.a=n.p+"static/media/poster_default.4e1e8c8c.jpg"}}]);
//# sourceMappingURL=Movie Details Page.994c7807.chunk.js.map