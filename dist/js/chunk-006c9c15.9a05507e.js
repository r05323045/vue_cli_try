(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-006c9c15"],{"057f":function(t,e,a){var r=a("fc6a"),s=a("241c").f,o={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return s(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==o.call(t)?i(t):s(r(t))}},1876:function(t,e,a){},"335c":function(t,e,a){"use strict";var r=a("8631"),s=a.n(r);s.a},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),s=a("5899"),o="["+s+"]",n=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),c=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(n,"")),2&t&&(a=a.replace(i,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"6fe5":function(t,e,a){"use strict";var r=a("1876"),s=a.n(r);s.a},7156:function(t,e,a){var r=a("861d"),s=a("d2bb");t.exports=function(t,e,a){var o,n;return s&&"function"==typeof(o=e.constructor)&&o!==a&&r(n=o.prototype)&&n!==a.prototype&&s(t,n),t}},"746f":function(t,e,a){var r=a("428f"),s=a("5135"),o=a("e538"),n=a("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});s(e,t)||n(e,t,{value:o.f(t)})}},8418:function(t,e,a){"use strict";var r=a("c04e"),s=a("9bf2"),o=a("5c6c");t.exports=function(t,e,a){var n=r(e);n in t?s.f(t,n,o(0,a)):t[n]=a}},8631:function(t,e,a){},"99af":function(t,e,a){"use strict";var r=a("23e7"),s=a("d039"),o=a("e8b5"),n=a("861d"),i=a("7b0b"),c=a("50c4"),l=a("8418"),u=a("65f0"),f=a("1dde"),d=a("b622"),p=a("2d00"),v=d("isConcatSpreadable"),m=9007199254740991,h="Maximum allowed index exceeded",g=p>=51||!s((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=f("concat"),_=function(t){if(!n(t))return!1;var e=t[v];return void 0!==e?!!e:o(t)},y=!g||!b;r({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,r,s,o,n=i(this),f=u(n,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?n:arguments[e],_(o)){if(s=c(o.length),d+s>m)throw TypeError(h);for(a=0;a<s;a++,d++)a in o&&l(f,d,o[a])}else{if(d>=m)throw TypeError(h);l(f,d++,o)}return f.length=d,f}})},a4d3:function(t,e,a){"use strict";var r=a("23e7"),s=a("da84"),o=a("d066"),n=a("c430"),i=a("83ab"),c=a("4930"),l=a("fdbf"),u=a("d039"),f=a("5135"),d=a("e8b5"),p=a("861d"),v=a("825a"),m=a("7b0b"),h=a("fc6a"),g=a("c04e"),b=a("5c6c"),_=a("7c73"),y=a("df75"),C=a("241c"),w=a("057f"),x=a("7418"),k=a("06cf"),O=a("9bf2"),$=a("d1e7"),j=a("9112"),E=a("6eeb"),N=a("5692"),P=a("f772"),T=a("d012"),S=a("90e3"),q=a("b622"),I=a("e538"),A=a("746f"),F=a("d44e"),M=a("69f3"),L=a("b727").forEach,D=P("hidden"),U="Symbol",V="prototype",G=q("toPrimitive"),z=M.set,J=M.getterFor(U),R=Object[V],W=s.Symbol,B=o("JSON","stringify"),X=k.f,Y=O.f,Q=w.f,H=$.f,K=N("symbols"),Z=N("op-symbols"),tt=N("string-to-symbol-registry"),et=N("symbol-to-string-registry"),at=N("wks"),rt=s.QObject,st=!rt||!rt[V]||!rt[V].findChild,ot=i&&u((function(){return 7!=_(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(t,e,a){var r=X(R,e);r&&delete R[e],Y(t,e,a),r&&t!==R&&Y(R,e,r)}:Y,nt=function(t,e){var a=K[t]=_(W[V]);return z(a,{type:U,tag:t,description:e}),i||(a.description=e),a},it=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,a){t===R&&ct(Z,e,a),v(t);var r=g(e,!0);return v(a),f(K,r)?(a.enumerable?(f(t,D)&&t[D][r]&&(t[D][r]=!1),a=_(a,{enumerable:b(0,!1)})):(f(t,D)||Y(t,D,b(1,{})),t[D][r]=!0),ot(t,r,a)):Y(t,r,a)},lt=function(t,e){v(t);var a=h(e),r=y(a).concat(vt(a));return L(r,(function(e){i&&!ft.call(a,e)||ct(t,e,a[e])})),t},ut=function(t,e){return void 0===e?_(t):lt(_(t),e)},ft=function(t){var e=g(t,!0),a=H.call(this,e);return!(this===R&&f(K,e)&&!f(Z,e))&&(!(a||!f(this,e)||!f(K,e)||f(this,D)&&this[D][e])||a)},dt=function(t,e){var a=h(t),r=g(e,!0);if(a!==R||!f(K,r)||f(Z,r)){var s=X(a,r);return!s||!f(K,r)||f(a,D)&&a[D][r]||(s.enumerable=!0),s}},pt=function(t){var e=Q(h(t)),a=[];return L(e,(function(t){f(K,t)||f(T,t)||a.push(t)})),a},vt=function(t){var e=t===R,a=Q(e?Z:h(t)),r=[];return L(a,(function(t){!f(K,t)||e&&!f(R,t)||r.push(K[t])})),r};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=S(t),a=function(t){this===R&&a.call(Z,t),f(this,D)&&f(this[D],e)&&(this[D][e]=!1),ot(this,e,b(1,t))};return i&&st&&ot(R,e,{configurable:!0,set:a}),nt(e,t)},E(W[V],"toString",(function(){return J(this).tag})),E(W,"withoutSetter",(function(t){return nt(S(t),t)})),$.f=ft,O.f=ct,k.f=dt,C.f=w.f=pt,x.f=vt,I.f=function(t){return nt(q(t),t)},i&&(Y(W[V],"description",{configurable:!0,get:function(){return J(this).description}}),n||E(R,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),L(y(at),(function(t){A(t)})),r({target:U,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var a=W(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){st=!0},useSimple:function(){st=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!i},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:u((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(m(t))}}),B){var mt=!c||u((function(){var t=W();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));r({target:"JSON",stat:!0,forced:mt},{stringify:function(t,e,a){var r,s=[t],o=1;while(arguments.length>o)s.push(arguments[o++]);if(r=e,(p(e)||void 0!==t)&&!it(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),s[1]=e,B.apply(null,s)}})}W[V][G]||j(W[V],G,W[V].valueOf),F(W,U),T[D]=!0},a9e3:function(t,e,a){"use strict";var r=a("83ab"),s=a("da84"),o=a("94ca"),n=a("6eeb"),i=a("5135"),c=a("c6b6"),l=a("7156"),u=a("c04e"),f=a("d039"),d=a("7c73"),p=a("241c").f,v=a("06cf").f,m=a("9bf2").f,h=a("58a8").trim,g="Number",b=s[g],_=b.prototype,y=c(d(_))==g,C=function(t){var e,a,r,s,o,n,i,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=h(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+l}for(o=l.slice(2),n=o.length,i=0;i<n;i++)if(c=o.charCodeAt(i),c<48||c>s)return NaN;return parseInt(o,r)}return+l};if(o(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var w,x=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof x&&(y?f((function(){_.valueOf.call(a)})):c(a)!=g)?l(new b(C(e)),a,x):C(e)},k=r?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;k.length>O;O++)i(b,w=k[O])&&!i(x,w)&&m(x,w,v(b,w));x.prototype=_,_.constructor=x,n(s,g,x)}},b789:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.checkingout,expression:"!checkingout"}],ref:"cart",staticClass:"cart"},[a("div",{staticClass:"router-wrapper mt-3"},[a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"mr-2 router"},[t._v("首頁")])]),a("i",{staticClass:"fas fa-chevron-right"}),a("span",{staticClass:"ml-2"},[t._v("購物車")])],1),t.cart.length?a("div",{staticClass:"my-5 cart-step-wrapper d-flex justify-content-center mx-auto"},[t._m(0),t._m(1)]):t._e(),t.cart.length?t._e():a("div",{staticClass:"empty-cart w-100 text-center my-5"},[a("div",{staticClass:"text-align-center"},[a("h1",{staticClass:"mt-5"},[t._v("你的購物車中沒有商品")]),a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"btn mt-5 back-to-homepage"},[t._v("回首頁選購")])]),a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"btn mt-5 ml-3 back-to-homepage"},[t._v("我不要")])])],1)]),a("div",{staticClass:"row"},[a("div",{ref:"cartboard",staticClass:"col-8 cart-board"},[a("div",{staticClass:"table-wrapper d-flex flex-column"},[a("table",{staticClass:"table"},[t.cart.length?a("tbody",t._l(t.cart,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"td-img",class:{borderless:1===t.cart.length}},[a("div",{staticClass:"img-wrapper mx-auto my-auto"},[a("img",{staticClass:"cart-image",attrs:{src:e.product.imageUrl},on:{click:function(a){return t.$router.push("/product/"+e.product.id)}}})])]),a("td",{staticClass:"align-middle td-title",class:{borderless:1===t.cart.length}},[t._v(" "+t._s(e.product.title)+" ")]),a("td",{staticClass:"align-middle td-quantity",class:{borderless:1===t.cart.length}},[e.quantity<=4?a("select",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"item.quantity"}],staticClass:"form-control",on:{change:[function(a){var r=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"quantity",a.target.multiple?r:r[0])},function(a){return t.quantityUpdata(e.product.id,e.quantity)}]}},[t._l(Array.from(Array(4).keys()),(function(e){return a("option",{key:e},[t._v(" "+t._s(e+1)+" ")])})),a("option",{attrs:{value:"5"}},[t._v("5+")])],2):t._e(),a("validation-observer",[a("form",{on:{submit:function(t){t.preventDefault()}}},[a("validation-provider",{attrs:{rules:"required|numeric|min_value:1"},scopedSlots:t._u([{key:"default",fn:function(r){var s=r.errors;return[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.quantity,expression:"item.quantity",modifiers:{lazy:!0}},{name:"show",rawName:"v-show",value:e.quantity>4,expression:"item.quantity > 4"}],staticClass:"form-control",attrs:{id:"quantity-input-"+e.product.id,type:"text"},domProps:{value:e.quantity},on:{change:[function(a){return t.$set(e,"quantity",a.target.value)},function(a){return t.quantityUpdata(e.product.id,e.quantity)}]}}),s[0]?a("span",{staticClass:"text-danger td-quantity-error"},[t._v(t._s("數量"+s[0].slice(e.product.id.length+16,s[0].length)))]):t._e()]}}],null,!0)})],1)])],1),a("td",{staticClass:"align-middle text-right td-amount",class:{borderless:1===t.cart.length}},[t._v(" "+t._s(t._f("priceFormat")(e.product.price*e.quantity))+" ")]),a("td",{staticClass:"align-middle",class:{borderless:1===t.cart.length}},[a("button",{staticClass:"btn",on:{click:function(a){return t.removeCartItem(e.product.id)}}},[a("i",{staticClass:"fa fa-times"})])])])})),0):t._e()]),t.cart.length?a("div",{staticClass:"clear-cart-wrapper mb-3 flex-grow-1 d-flex align-items-end"},[a("div",{staticClass:"clear-cart",on:{click:function(e){return t.removeAllCartItem()}}},[t._v("清空購物車")])]):t._e()])]),t.cart.length?a("div",{staticClass:"col-4 cart-summary"},[a("div",{staticClass:"card cart-card mx-auto"},[a("div",{staticClass:"card-header"},[t._v(" 訂單摘要 ")]),a("div",{staticClass:"card-body d-flex flex-column"},[a("loading",{attrs:{active:t.isLoading,loader:"bars","is-full-page":!1,opacity:1,"z-index":2},on:{"update:active":function(e){t.isLoading=e}}}),a("ul",{staticClass:"list-group h-100"},[a("li",{staticClass:"list-group-item d-flex justify-content-between"},[a("span",[t._v("商品總計")]),a("span",[t._v(t._s(t._f("priceFormat")(t.cartTotal)))])]),t._m(2),t.coupon.enabled?a("li",{staticClass:"list-group-item d-flex justify-content-between"},[a("span",[t._v(t._s(t.coupon.title))]),a("span",{staticClass:"coupon-discount"},[t._v(t._s(t._f("priceFormat")(-Math.ceil(t.cartTotal*(1-t.coupon.percent/100)))))])]):t._e(),a("li",{staticClass:"list-group-item"},[a("span",{staticClass:"use-coupon",attrs:{"data-toggle":"collapse","data-target":"#collapseCoupon"}},[t._v("使用優惠券")]),a("div",{staticClass:"collapse mt-3",attrs:{id:"collapseCoupon"}},[a("div",[a("div",{staticClass:"input-group mb-3 input-group-sm"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.coupon_code},on:{input:function(e){e.target.composing||(t.coupon_code=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn apply-coupon",attrs:{type:"button"},on:{click:t.addCoupon}},[t._v(" 使用 ")])])])]),t.couponExpire||!1===t.coupon.enabled?a("div",{staticClass:"coupon-fail"},[t._v(" 優惠碼無法使用 ")]):t._e()])]),t._m(3),a("div",{staticClass:"list-group-item d-flex w-100 pt-2"},[a("div",{staticClass:"cart-total w-100 d-flex justify-content-between"},[a("span",[t._v("結帳金額")]),a("span",[t._v(t._s(t._f("priceFormat")(t.checkoutTotal)))])])]),a("div",{staticClass:"list-group-item"},[a("div",{staticClass:"goToCheckout btn d-flex justify-content-center",on:{click:t.cartOrCheckout}},[t._v(" 前往結帳 ")])])])],1)])]):t._e()])]),a("checkout",{directives:[{name:"show",rawName:"v-show",value:t.checkingout,expression:"checkingout"}],ref:"checkout",attrs:{cart:t.cart,cartTotal:t.cartTotal,checkoutTotal:t.checkoutTotal,coupon:t.coupon},on:{backtocart:t.cartOrCheckout}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-step row"},[a("div",{staticClass:"cart-step-icon"},[t._v("1")]),a("div",{staticClass:"cart-step-text"},[a("div",[t._v("購買品項")])]),a("div",{staticClass:"connector-line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkout-step row"},[a("div",{staticClass:"checkout-step-icon"},[t._v("2")]),a("div",{staticClass:"checkout-step-text"},[t._v("填寫地址與結帳")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-group-item d-flex justify-content-between"},[a("span",[t._v("運費總計")]),a("span",[t._v("NT$ 0")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider-wrapper"},[a("div",{staticClass:"divider"})])}],o=(a("99af"),a("4160"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"checkout",staticClass:"checkout"},[a("div",{staticClass:"router-wrapper mt-3"},[a("i",{staticClass:"fas fa-chevron-left",on:{click:t.backToCart}}),a("span",{staticClass:"mx-2 router",on:{click:t.backToCart}},[t._v("返回購物車")])]),t._m(0),a("div",{staticClass:"row"},[t.cart.length&&t.checkoutTotal?a("div",{staticClass:"mt-5 col-4 offset-1 cart-summary"},[a("div",{staticClass:"card cart-card mx-auto"},[a("div",{staticClass:"card-header"},[t._v(" 訂單摘要 ")]),a("div",{staticClass:"card-body d-flex flex-column"},[a("ul",{staticClass:"list-group h-100"},[a("li",{staticClass:"list-group-item d-flex justify-content-between"},[a("span",[t._v("商品總計")]),a("span",[t._v(t._s(t._f("priceFormat")(t.cartTotal)))])]),t._m(1),t.coupon&&t.coupon.enabled?a("li",{staticClass:"list-group-item d-flex justify-content-between"},[a("span",[t._v(t._s(t.coupon.title))]),a("span",{staticClass:"coupon-discount"},[t._v(t._s(t._f("priceFormat")(-Math.ceil(t.cartTotal*(1-t.coupon.percent/100)))))])]):t._e(),t._m(2),a("div",{staticClass:"list-group-item d-flex w-100 mt-3"},[a("div",{staticClass:"cart-total w-100 d-flex justify-content-between"},[a("span",[t._v("結帳金額")]),a("span",[t._v(t._s(t._f("priceFormat")(t.checkoutTotal)))])])])])])])]):t._e(),a("div",{staticClass:"mt-3 col-6 justify-content-center checkout-form"},[a("validation-observer",{ref:"formvalidation",staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[a("form",{ref:"checkoutform",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:s,attrs:{id:"username",type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),r[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("收件人姓名"+r[0].slice(9,r[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:s,attrs:{id:"email",type:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),r[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("Email"+r[0].slice(6,r[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required|numeric|min:8"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{attrs:{for:"tel"}},[t._v("電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:s,attrs:{id:"tel",type:"tel"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}}),r[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("電話"+r[0].slice(4,r[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{attrs:{for:"address"}},[t._v("地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:s,attrs:{id:"address",type:"text"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),r[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("地址"+r[0].slice(8,r[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{attrs:{for:"message"}},[t._v("購買方式")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",class:s,attrs:{id:"payment",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v(" 請選擇付款方式 ")]),a("option",{attrs:{value:"WebATM"}},[t._v(" WebATM ")]),a("option",{attrs:{value:"ATM"}},[t._v(" ATM ")]),a("option",{attrs:{value:"CVS"}},[t._v(" CVS ")]),a("option",{attrs:{value:"Barcode"}},[t._v(" Barcode ")]),a("option",{attrs:{value:"Credit"}},[t._v(" Credit ")]),a("option",{attrs:{value:"ApplePay"}},[t._v(" ApplePay ")]),a("option",{attrs:{value:"GooglePay"}},[t._v(" GooglePay ")])]),r[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("購買方式"+r[0].slice(8,r[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",cols:"30",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn checkout-submit",attrs:{type:"submit",disabled:r}},[t._v(" 送出 ")])])])]}}])})],1)])])}),n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-5 cart-step-wrapper d-flex justify-content-center mx-auto"},[a("div",{staticClass:"cart-step row"},[a("div",{staticClass:"cart-step-icon"},[t._v("1")]),a("div",{staticClass:"cart-step-text"},[a("div",[t._v("購買品項")])]),a("div",{staticClass:"connector-line"})]),a("div",{staticClass:"checkout-step row"},[a("div",{staticClass:"checkout-step-icon"},[t._v("2")]),a("div",{staticClass:"checkout-step-text"},[t._v("填寫地址與結帳")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-group-item d-flex justify-content-between"},[a("span",[t._v("運費總計")]),a("span",[t._v("NT$ 0")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider-wrapper"},[a("div",{staticClass:"divider"})])}],i=(a("a9e3"),a("b64b"),a("5530")),c=a("1157"),l=a.n(c),u={name:"Checkout",data:function(){return{form:{name:"",email:"",tel:"",address:"",payment:"",message:""}}},props:{cart:{},cartTotal:Number,checkoutTotal:Number,coupon:{}},methods:{backToCart:function(){this.$emit("backtocart")},createOrder:function(){var t=this,e=this.$loading.show({opacity:1,isFullPage:!0,zIndex:999}),a="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/orders"),r=Object(i["a"])({},this.form);this.coupon.enabled&&(r.coupon=this.coupon.code),this.$http.post(a,r).then((function(a){a.data.data.id&&(Object.keys(t.form).forEach((function(t){;""})),t.$refs.formvalidation.reset(),t.$refs.checkoutform.reset(),l()("#orderModal").modal("show")),t.$router.push("/"),t.$bus.$emit("cartUpdate",{cart:{}}),e.hide()})).catch((function(a){console.log(a),t.$router.push("/"),e.hide()}))}}},f=u,d=(a("335c"),a("2877")),p=Object(d["a"])(f,o,n,!1,null,null,null),v=p.exports,m={name:"Cart",data:function(){return{cart:{},coupon:{},coupon_code:"",checkingout:!1,isLoading:!1,couponExpire:!1}},components:{checkout:v},created:function(){var t=this.$loading.show({container:this.$refs.cart,opacity:1,isFullPage:!0});this.getCart(t)},computed:{cartTotal:function(){var t=0;return this.cart.length>0&&this.cart.forEach((function(e){t+=e.product.price*e.quantity})),t},checkoutTotal:function(){return this.coupon.enabled?Math.ceil(this.cartTotal*this.coupon.percent/100):this.cartTotal}},methods:{getCart:function(t){var e=this,a="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping");this.$http.get(a).then((function(a){e.cart=a.data.data,t&&t.hide(),e.$bus.$emit("cartUpdate",{cart:e.cart})}))},quantityUpdata:function(t,e){var a=this,r=this.$loading.show({container:this.$refs.cartboard,opacity:.8,isFullPage:!0});(!/^[0-9]+$/.test(e)||e<1)&&(e=1);var s="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping"),o={product:t,quantity:e};this.$http.patch(s,o).then((function(){a.getCart(r)}))},removeAllCartItem:function(){var t=this,e=this.$loading.show({container:this.$refs.cartboard,opacity:.8,isFullPage:!0}),a="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping/all/product");this.$http.delete(a).then((function(){t.getCart(e)}))},removeCartItem:function(t){var e=this,a=this.$loading.show({container:this.$refs.cartboard,opacity:.8,isFullPage:!0}),r="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping/").concat(t);this.$http.delete(r).then((function(){e.getCart(a)}))},cartOrCheckout:function(){this.checkingout=!this.checkingout,this.$refs.checkout.$refs.formvalidation.reset(),this.$refs.checkout.$refs.checkoutform.reset()},addCoupon:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/coupon/search");this.$http.post(e,{code:this.coupon_code}).then((function(e){t.coupon=e.data.data,t.couponExpire=!1,t.isLoading=!1})).catch((function(e){t.couponExpire=!0;var a=e.response.data.errors;if(a)a.code.forEach((function(t){console.log(t)})),t.isLoading=!1;else{var r=e.response.data.message;console.log(r),t.isLoading=!1}}))}}},h=m,g=(a("6fe5"),Object(d["a"])(h,r,s,!1,null,null,null));e["default"]=g.exports},dbb4:function(t,e,a){var r=a("23e7"),s=a("83ab"),o=a("56ef"),n=a("fc6a"),i=a("06cf"),c=a("8418");r({target:"Object",stat:!0,sham:!s},{getOwnPropertyDescriptors:function(t){var e,a,r=n(t),s=i.f,l=o(r),u={},f=0;while(l.length>f)a=s(r,e=l[f++]),void 0!==a&&c(u,e,a);return u}})},e439:function(t,e,a){var r=a("23e7"),s=a("d039"),o=a("fc6a"),n=a("06cf").f,i=a("83ab"),c=s((function(){n(1)})),l=!i||c;r({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(t,e){return n(o(t),e)}})},e538:function(t,e,a){var r=a("b622");e.f=r}}]);
//# sourceMappingURL=chunk-006c9c15.9a05507e.js.map