(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{165:function(t,e,n){},166:function(t,e,n){},167:function(t,e,n){},169:function(t,e,n){"use strict";var o=n(165);n.n(o).a},170:function(t,e,n){"use strict";var o=n(166);n.n(o).a},171:function(t,e,n){"use strict";var o=n(167);n.n(o).a},172:function(t,e,n){"use strict";var o={props:["showTitle"]},r=(n(169),n(18)),i=n(0),s=i.a.config.optionMergeStrategies.computed,a={metadata:{siteName:"Blog Muhammad Zulfi",siteDescription:"Belum ada deskripsi, masih mikir..."}},c=function(t){var e=t.options;e.__staticData?e.__staticData.data=a:(e.__staticData=i.a.observable({data:a}),e.computed=s({$static:function(){return e.__staticData.data}},e.computed))},u=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"author"},[t.showTitle?n("h1",{staticClass:"author__site-title"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteName)+"\n\t")]):t._e(),n("p",{staticClass:"author__intro"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteDescription)+"\n\t")]),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"author__links"},[e("a",{attrs:{href:"//facebook.com/zulfi.izzulhaq"}},[this._v("Facebook")]),e("a",{attrs:{href:"//github.com/zulfizz"}},[this._v("GitHub")])])}],!1,null,null,null);"function"==typeof c&&c(u);e.a=u.exports},173:function(t,e,n){"use strict";var o={props:["post"]},r=(n(170),n(18)),i=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-meta"},[t._v("\n   Posted "+t._s(t.post.date)+".\n   "),t.post.timeToRead?[n("strong",[t._v(t._s(t.post.timeToRead)+" min read.")])]:t._e()],2)}),[],!1,null,null,null);e.a=i.exports},174:function(t,e,n){"use strict";var o={props:["post"]},r=(n(171),n(18)),i=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(e){return n("g-link",{key:e.id,staticClass:"post-tags__link",attrs:{to:e.path}},[n("span",[t._v("#")]),t._v(" "+t._s(e.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);e.a=i.exports},177:function(t,e,n){},178:function(t,e){},181:function(t,e,n){var o=n(2);e.f=o},183:function(t,e,n){"use strict";var o=n(4),r=n(1),i=n(22),s=n(19),a=n(11),c=n(76),u=n(125),f=n(3),l=n(10),p=n(32),v=n(9),d=n(7),m=n(23),g=n(20),h=n(31),y=n(30),_=n(51),b=n(77),w=n(48),S=n(184),O=n(74),$=n(21),C=n(12),j=n(71),P=n(16),k=n(13),E=n(72),T=n(49),x=n(50),N=n(73),D=n(2),z=n(181),M=n(185),J=n(52),F=n(26),A=n(75).forEach,B=T("hidden"),H=D("toPrimitive"),I=F.set,L=F.getterFor("Symbol"),R=Object.prototype,q=r.Symbol,G=i("JSON","stringify"),Q=$.f,W=C.f,Z=S.f,K=j.f,U=E("symbols"),V=E("op-symbols"),X=E("string-to-symbol-registry"),Y=E("symbol-to-string-registry"),tt=E("wks"),et=r.QObject,nt=!et||!et.prototype||!et.prototype.findChild,ot=a&&f((function(){return 7!=_(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,n){var o=Q(R,e);o&&delete R[e],W(t,e,n),o&&t!==R&&W(R,e,o)}:W,rt=function(t,e){var n=U[t]=_(q.prototype);return I(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},st=function(t,e,n){t===R&&st(V,e,n),d(t);var o=h(e,!0);return d(n),l(U,o)?(n.enumerable?(l(t,B)&&t[B][o]&&(t[B][o]=!1),n=_(n,{enumerable:y(0,!1)})):(l(t,B)||W(t,B,y(1,{})),t[B][o]=!0),ot(t,o,n)):W(t,o,n)},at=function(t,e){d(t);var n=g(e),o=b(n).concat(lt(n));return A(o,(function(e){a&&!ct.call(n,e)||st(t,e,n[e])})),t},ct=function(t){var e=h(t,!0),n=K.call(this,e);return!(this===R&&l(U,e)&&!l(V,e))&&(!(n||!l(this,e)||!l(U,e)||l(this,B)&&this[B][e])||n)},ut=function(t,e){var n=g(t),o=h(e,!0);if(n!==R||!l(U,o)||l(V,o)){var r=Q(n,o);return!r||!l(U,o)||l(n,B)&&n[B][o]||(r.enumerable=!0),r}},ft=function(t){var e=Z(g(t)),n=[];return A(e,(function(t){l(U,t)||l(x,t)||n.push(t)})),n},lt=function(t){var e=t===R,n=Z(e?V:g(t)),o=[];return A(n,(function(t){!l(U,t)||e&&!l(R,t)||o.push(U[t])})),o};(c||(k((q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=N(t),n=function(t){this===R&&n.call(V,t),l(this,B)&&l(this[B],e)&&(this[B][e]=!1),ot(this,e,y(1,t))};return a&&nt&&ot(R,e,{configurable:!0,set:n}),rt(e,t)}).prototype,"toString",(function(){return L(this).tag})),k(q,"withoutSetter",(function(t){return rt(N(t),t)})),j.f=ct,C.f=st,$.f=ut,w.f=S.f=ft,O.f=lt,z.f=function(t){return rt(D(t),t)},a&&(W(q.prototype,"description",{configurable:!0,get:function(){return L(this).description}}),s||k(R,"propertyIsEnumerable",ct,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:q}),A(b(tt),(function(t){M(t)})),o({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(X,e))return X[e];var n=q(e);return X[e]=n,Y[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Y,t))return Y[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),o({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?_(t):at(_(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:ut}),o({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),o({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(m(t))}}),G)&&o({target:"JSON",stat:!0,forced:!c||f((function(){var t=q();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}))},{stringify:function(t,e,n){for(var o,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);if(o=e,(v(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof o&&(e=o.call(this,t,e)),!it(e))return e}),r[1]=e,G.apply(null,r)}});q.prototype[H]||P(q.prototype,H,q.prototype.valueOf),J(q,"Symbol"),x[B]=!0},184:function(t,e,n){var o=n(20),r=n(48).f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?function(t){try{return r(t)}catch(t){return s.slice()}}(t):r(o(t))}},185:function(t,e,n){var o=n(124),r=n(10),i=n(181),s=n(12).f;t.exports=function(t){var e=o.Symbol||(o.Symbol={});r(e,t)||s(e,t,{value:i.f(t)})}},186:function(t,e,n){"use strict";var o=n(4),r=n(11),i=n(1),s=n(10),a=n(9),c=n(12).f,u=n(123),f=i.Symbol;if(r&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(p,f);var v=p.prototype=f.prototype;v.constructor=p;var d=v.toString,m="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=d.call(t);if(s(l,t))return"";var n=m?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:p})}},187:function(t,e,n){"use strict";var o=n(177);n.n(o).a},188:function(t,e,n){"use strict";var o=n(178),r=n.n(o);e.default=r.a},191:function(t,e,n){"use strict";n.r(e);n(183),n(186);var o=n(173),r=n(174),i={components:{Author:n(172).a,PostMeta:o.a,PostTags:r.a},metaInfo:function(){return{title:this.$page.post.title,meta:[{name:"description",content:this.$page.post.description}]}}},s=(n(187),n(18)),a=n(188),c=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("div",{staticClass:"post-title"},[n("h1",{staticClass:"post-title__text"},[t._v("\n      "+t._s(t.$page.post.title)+"\n    ")]),n("PostMeta",{attrs:{post:t.$page.post}})],1),n("div",{staticClass:"post content-box"},[n("div",{staticClass:"post__header"},[t.$page.post.cover_image?n("g-image",{attrs:{alt:"Cover image",src:t.$page.post.cover_image}}):t._e()],1),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post__content",domProps:{innerHTML:t._s(t.$page.post.content)}}),n("div",{staticClass:"post__footer"},[n("PostTags",{attrs:{post:t.$page.post}})],1)]),n("div",{staticClass:"post-comments"}),n("Author",{staticClass:"post-author"})],1)}),[],!1,null,null,null);"function"==typeof a.default&&Object(a.default)(c);e.default=c.exports}}]);