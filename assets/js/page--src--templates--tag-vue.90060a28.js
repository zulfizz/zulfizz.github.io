(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(t,s,a){},175:function(t,s,a){},176:function(t,s,a){},177:function(t,s,a){"use strict";a(174)},178:function(t,s,a){"use strict";a(175)},179:function(t,s,a){"use strict";a(176)},180:function(t,s,a){},181:function(t,s,a){"use strict";var e={props:["showTitle"]},i=(a(177),a(19)),o=a(0),n=o.a.config.optionMergeStrategies.computed,c={metadata:{siteName:"Zulfizz Blog",siteDescription:"Hanya ketikan lorem ipsum dolor sit amet, consectetur adipiscing elit"}},r=function(t){var s=t.options;s.__staticData?s.__staticData.data=c:(s.__staticData=o.a.observable({data:c}),s.computed=n({$static:function(){return s.__staticData.data}},s.computed))},l=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"author"},[t.showTitle?a("h1",{staticClass:"author__site-title"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteName)+"\n\t")]):t._e(),a("p",{staticClass:"author__intro"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteDescription)+"\n\t")]),t._m(0)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",{staticClass:"author__links"},[s("a",{attrs:{href:"//facebook.com/zulfi.izzulhaq"}},[this._v("Facebook")]),s("a",{attrs:{href:"//github.com/zulfizz"}},[this._v("GitHub")])])}],!1,null,null,null);"function"==typeof r&&r(l);s.a=l.exports},182:function(t,s,a){"use strict";var e={props:["post"]},i=(a(178),a(19)),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[a("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);s.a=o.exports},183:function(t,s,a){"use strict";var e={props:["post"]},i=(a(179),a(19)),o=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(s){return a("g-link",{key:s.id,staticClass:"post-tags__link",attrs:{to:s.path}},[a("span",[t._v("#")]),t._v(" "+t._s(s.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);s.a=o.exports},184:function(t,s,a){"use strict";a(180)},185:function(t,s){},188:function(t,s,a){"use strict";var e=a(182),i=a(183),o={components:{PostMeta:e.a,PostTags:i.a},props:["post"]},n=(a(184),a(19)),c=Object(n.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[a("div",{staticClass:"post-card__header"},[t.post.cover_image?a("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),a("div",{staticClass:"post-card__content"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),a("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),a("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),a("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);s.a=c.exports},192:function(t,s,a){"use strict";var e=a(185),i=a.n(e);s.default=i.a},202:function(t,s,a){"use strict";a.r(s);var e=a(181),i=a(188),o={components:{Author:e.a,PostCard:i.a},metaInfo:{title:"Hello, world!"}},n=a(19),c=a(192),r=Object(n.a)(o,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("h1",{staticClass:"tag-title text-center space-bottom"},[this._v("\n    # "+this._s(this.$page.tag.title)+"\n  ")]),s("div",{staticClass:"posts"},this._l(this.$page.tag.belongsTo.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(r);s.default=r.exports}}]);