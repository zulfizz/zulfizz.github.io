(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{174:function(t,a,e){},175:function(t,a,e){},176:function(t,a,e){},177:function(t,a,e){"use strict";e(174)},178:function(t,a,e){"use strict";e(175)},179:function(t,a,e){"use strict";e(176)},180:function(t,a,e){},181:function(t,a,e){"use strict";var s={props:["showTitle"]},i=(e(177),e(19)),n=e(0),r=n.a.config.optionMergeStrategies.computed,o={metadata:{siteName:"Zulfizz Blog",siteDescription:"Hanya ketikan lorem ipsum dolor sit amet, consectetur adipiscing elit"}},l=function(t){var a=t.options;a.__staticData?a.__staticData.data=o:(a.__staticData=n.a.observable({data:o}),a.computed=r({$static:function(){return a.__staticData.data}},a.computed))},c=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"author"},[t.showTitle?e("h1",{staticClass:"author__site-title"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteName)+"\n\t")]):t._e(),e("p",{staticClass:"author__intro"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteDescription)+"\n\t")]),t._m(0)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("p",{staticClass:"author__links"},[a("a",{attrs:{href:"//facebook.com/zulfi.izzulhaq"}},[this._v("Facebook")]),a("a",{attrs:{href:"//github.com/zulfizz"}},[this._v("GitHub")])])}],!1,null,null,null);"function"==typeof l&&l(c);a.a=c.exports},182:function(t,a,e){"use strict";var s={props:["post"]},i=(e(178),e(19)),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[e("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);a.a=n.exports},183:function(t,a,e){"use strict";var s={props:["post"]},i=(e(179),e(19)),n=Object(i.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(a){return e("g-link",{key:a.id,staticClass:"post-tags__link",attrs:{to:a.path}},[e("span",[t._v("#")]),t._v(" "+t._s(a.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);a.a=n.exports},184:function(t,a,e){"use strict";e(180)},186:function(t,a){},188:function(t,a,e){"use strict";var s=e(182),i=e(183),n={components:{PostMeta:s.a,PostTags:i.a},props:["post"]},r=(e(184),e(19)),o=Object(r.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[e("div",{staticClass:"post-card__header"},[t.post.cover_image?e("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),e("div",{staticClass:"post-card__content"},[e("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),e("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),e("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),e("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),e("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);a.a=o.exports},194:function(t,a,e){"use strict";var s=e(186),i=e.n(s);a.default=i.a},201:function(t,a,e){"use strict";e.r(a);var s=e(181),i=e(188),n=(e(0),e(72)),r=(e(82),e(36),e(73),e(134),e(29),e(81),e(6)),o=e(5),l={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},prevLabel:{type:String,default:"‹"},nextLabel:{type:String,default:"›"},lastLabel:{type:String,default:"»"},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,s=a.data,i=a.parent,l=e.info,u=e.showLinks,p=e.showNavigation,d=e.ariaLabel,f=function(t,a){var e=t.currentPage,s=void 0===e?1:e,i=t.totalPages,n=void 0===i?1:i,r=Math.ceil(a/2),o=Math.floor(s-r),l=Math.floor(s+r);n<=a?(o=0,l=n):s<=r?(o=0,l=a):s+r>=n&&(o=n-a,l=n);for(var c=[],u=o+1;u<=l;u++)c.push(u);return{current:s,total:n,start:o,end:l,pages:c}}(l,e.range),g=f.current,v=f.total,_=f.pages,b=f.start,h=f.end,m=Object(o.d)(i.$route),L=function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s;a===g&&(i=e.ariaCurrentLabel);var o={to:c(m,a),exact:!0};return e.activeLinkClass&&(o.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(o.exactActiveClass=e.exactActiveLinkClass),t(n.a,{class:e.linkClass,attrs:Object(r.a)(Object(r.a)({},o),{},{"aria-label":i.replace("%n",a),"aria-current":g===a})},[s])},C=u?_.map((function(t){return L(t,t,e.ariaLinkLabel)})):[];if(p){var k=e.firstLabel,y=e.prevLabel,P=e.nextLabel,x=e.lastLabel,w=e.ariaFirstLabel,S=e.ariaPrevLabel,j=e.ariaNextLabel,O=e.ariaLastLabel;g>1&&C.unshift(L(g-1,y,S)),b>0&&C.unshift(L(1,k,w)),g<v&&C.push(L(g+1,P,j)),h<v&&C.push(L(v,x,O))}return C.length<2?null:t("nav",Object(r.a)(Object(r.a)({},s),{},{attrs:{role:"navigation","aria-label":d}}),C)}};function c(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(o.g)(t)+"/".concat(a).concat(e):t}e(83);var u={components:{Author:s.a,PostCard:i.a,Pager:l},metaInfo:{title:"Sebuah Catatan Hello World!"}},p=e(19),d=e(194),f=Object(p.a)(u,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",{attrs:{"show-logo":!1}},[a("Author",{attrs:{"show-title":!0}}),a("div",{staticClass:"posts"},this._l(this.$page.posts.edges,(function(t){return a("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1),a("div",{staticClass:"pagination"},[a("Pager",{attrs:{info:this.$page.posts.pageInfo,linkClass:"paging",prevLabel:"Prev",nextLabel:"Next"}})],1)],1)}),[],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(f);a.default=f.exports}}]);