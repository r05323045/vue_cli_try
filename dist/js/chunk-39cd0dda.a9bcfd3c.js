(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39cd0dda"],{5899:function(t,a){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,a,r){var e=r("1d80"),i=r("5899"),n="["+i+"]",c=RegExp("^"+n+n+"*"),o=RegExp(n+n+"*$"),s=function(t){return function(a){var r=String(e(a));return 1&t&&(r=r.replace(c,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,a,r){var e=r("861d"),i=r("d2bb");t.exports=function(t,a,r){var n,c;return i&&"function"==typeof(n=a.constructor)&&n!==r&&e(c=n.prototype)&&c!==r.prototype&&i(t,c),t}},8418:function(t,a,r){"use strict";var e=r("c04e"),i=r("9bf2"),n=r("5c6c");t.exports=function(t,a,r){var c=e(a);c in t?i.f(t,c,n(0,r)):t[c]=r}},"99af":function(t,a,r){"use strict";var e=r("23e7"),i=r("d039"),n=r("e8b5"),c=r("861d"),o=r("7b0b"),s=r("50c4"),u=r("8418"),d=r("65f0"),p=r("1dde"),l=r("b622"),f=r("2d00"),h=l("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",m=f>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),_=p("concat"),y=function(t){if(!c(t))return!1;var a=t[h];return void 0!==a?!!a:n(t)},C=!m||!_;e({target:"Array",proto:!0,forced:C},{concat:function(t){var a,r,e,i,n,c=o(this),p=d(c,0),l=0;for(a=-1,e=arguments.length;a<e;a++)if(n=-1===a?c:arguments[a],y(n)){if(i=s(n.length),l+i>v)throw TypeError(g);for(r=0;r<i;r++,l++)r in n&&u(p,l,n[r])}else{if(l>=v)throw TypeError(g);u(p,l++,n)}return p.length=l,p}})},a9e3:function(t,a,r){"use strict";var e=r("83ab"),i=r("da84"),n=r("94ca"),c=r("6eeb"),o=r("5135"),s=r("c6b6"),u=r("7156"),d=r("c04e"),p=r("d039"),l=r("7c73"),f=r("241c").f,h=r("06cf").f,v=r("9bf2").f,g=r("58a8").trim,m="Number",_=i[m],y=_.prototype,C=s(l(y))==m,b=function(t){var a,r,e,i,n,c,o,s,u=d(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),a=u.charCodeAt(0),43===a||45===a){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===a){switch(u.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+u}for(n=u.slice(2),c=n.length,o=0;o<c;o++)if(s=n.charCodeAt(o),s<48||s>i)return NaN;return parseInt(n,e)}return+u};if(n(m,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var x,w=function(t){var a=arguments.length<1?0:t,r=this;return r instanceof w&&(C?p((function(){y.valueOf.call(r)})):s(r)!=m)?u(new _(b(a)),r,w):b(a)},N=e?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;N.length>I;I++)o(_,x=N[I])&&!o(w,x)&&v(w,x,h(_,x));w.prototype=y,y.constructor=w,c(i,m,w)}},bd21:function(t,a,r){"use strict";var e=r("cd3a"),i=r.n(e);i.a},c975:function(t,a,r){"use strict";var e=r("23e7"),i=r("4d64").indexOf,n=r("a640"),c=r("ae40"),o=[].indexOf,s=!!o&&1/[1].indexOf(1,-0)<0,u=n("indexOf"),d=c("indexOf",{ACCESSORS:!0,1:0});e({target:"Array",proto:!0,forced:s||!u||!d},{indexOf:function(t){return s?o.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},cd3a:function(t,a,r){},d2f1:function(t,a,r){"use strict";r.r(a);var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{ref:"product",staticClass:"product"},[r("div",{staticClass:"router-wrapper mt-3"},[r("router-link",{attrs:{to:"/"}},[r("span",{staticClass:"mr-2 router"},[t._v("首頁")])]),r("i",{staticClass:"fas fa-chevron-right"}),r("span",{staticClass:"ml-2"},[t._v(t._s(t.product.category))])],1),t.product.title?r("div",{staticClass:"row mt-5"},[r("div",{staticClass:"col-7 images"},[r("div",{staticClass:"main-img"},[r("img",{staticClass:"w-100",attrs:{src:t.product.imageUrl?t.product.imageUrl[0]:""}})])]),r("div",{staticClass:"col-5 info"},[r("div",{staticClass:"title"},[t._v(t._s(t.product.title))]),r("div",{staticClass:"price-wrapper"},[r("div",{staticClass:"price"},[t._v(t._s(t._f("priceFormat")(t.product.price)))]),r("div",{staticClass:"origin-price"},[t._v(t._s(t._f("priceFormat")(t.product.origin_price)))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:.85>t.product.price/t.product.origin_price,expression:"0.85 > product.price/product.origin_price"}],staticClass:"discount"},[r("div",{staticClass:"badge"},[t._v(" "+t._s(10*(t.product.price/t.product.origin_price).toFixed(1)+" 折")+" ")]),r("div",{staticClass:"save-money"},[t._v(" 省下"+t._s(t._f("priceFormat")(t.product.origin_price-t.product.price))+" ")])]),r("div",{staticClass:"content"},[t._v(" "+t._s(t.product.content)+" ")]),r("div",{staticClass:"rating"},[t._l(t.randomRating.rate,(function(t,a){return r("span",{key:a,staticClass:"star-item",class:t})})),r("span",{staticClass:"count"},[t._v(t._s("("+t.randomRating.count+")"))])],2),r("div",{staticClass:"quantity"},[r("div",[t._v("數量")]),r("div",{staticClass:"input-area"},[t.cartPatch.quantity<=4?r("select",{directives:[{name:"model",rawName:"v-model",value:t.cartQuantity,expression:"cartQuantity"}],staticClass:"form-control",on:{change:function(a){var r=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.cartQuantity=a.target.multiple?r:r[0]}}},[t._l(Array.from(Array(4).keys()),(function(a){return r("option",{key:a},[t._v(" "+t._s(a+1)+" ")])})),r("option",{attrs:{value:"5"}},[t._v("5+")])],2):t._e(),r("validation-observer",[r("validation-provider",{attrs:{rules:"required|numeric|min_value:1"},scopedSlots:t._u([{key:"default",fn:function(a){var e=a.errors;return[r("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.cartQuantity,expression:"cartQuantity",modifiers:{lazy:!0}},{name:"show",rawName:"v-show",value:t.cartPatch.quantity>4,expression:"cartPatch.quantity > 4"}],ref:"quantity-input-"+t.product.id,staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.cartQuantity},on:{change:function(a){t.cartQuantity=a.target.value}}}),e[0]?r("span",{staticClass:"text-danger quantity-error"},[t._v(t._s("數量"+e[0].slice(t.product.id.length+16,e[0].length)))]):t._e()]}}],null,!1,3771546008)})],1)],1)]),r("div",{staticClass:"put-in-cart"},[t.alreadyPut?t._e():r("div",{staticClass:"add-to-cart btn d-flex justify-content-center mt-3 mb-3",on:{click:t.addToCart}},[r("span",[t._v("放入購物車")])]),t.alreadyPut?r("div",{staticClass:"go-to-checkout btn d-flex justify-content-center mt-3 mb-3",on:{click:function(a){return t.$router.push("/cart")}}},[r("span",[t._v("立刻結帳")])]):t._e()]),r("div",{staticClass:"description"},[t._v(" "+t._s(t.product.description)+" ")])])]):t._e()])},i=[],n=(r("99af"),r("c975"),r("d81d"),r("a9e3"),{name:"Product",data:function(){return{product:{},cart:{},cartPatch:{product:String,quantity:1},cartQuantity:1,alreadyPut:!1,randomRating:{rate:[],count:Number}}},computed:{cartId:function(){return this.cart.length>0?this.cart.map((function(t){return t.product.id})):[]}},watch:{cartQuantity:function(t,a){var r=t;(!/^[0-9]+$/.test(r)||r<1)&&(r=a,this.cartQuantity=a),this.cartPatch.quantity=r}},created:function(){var t=this,a=this.$loading.show({container:this.$refs.product,opacity:1,isFullPage:!0}),r=this.$route.params.id;this.cartPatch.product=r;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/product/").concat(r);this.$http.get(e).then((function(r){t.product=r.data.data,t.getCart(a)})),this.randomRating.rate=this.rating(),this.randomRating.count=Math.floor(50+500*Math.random())},methods:{rating:function(){for(var t=[],a=Math.floor(2.5*(2.5+2*Math.random()))/2,r=0;r<Math.floor(a);r++)t.push("on");a%1!==0&&t.push("half");while(t.length<5)t.push("off");return t},addToCart:function(){var t=this,a=this.$loading.show({container:this.$refs.product,opacity:.8}),r="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping"),e="post",i=this.cartId.indexOf(this.cartPatch.product);i>=0&&(e="patch",this.cart[i].quantity===Number(this.cartPatch.quantity)&&(e="none",setTimeout((function(){a.hide()}),1e3))),"none"!==e&&this.$http[e](r,this.cartPatch).then((function(){t.getCart(a)})).catch((function(t){console.log(t.response.data.errors)})),this.alreadyPut=!0},getCart:function(t){var a=this,r="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping");this.$http.get(r).then((function(r){a.cart=r.data.data,t&&t.hide(),console.log()}))}}}),c=n,o=(r("bd21"),r("2877")),s=Object(o["a"])(c,e,i,!1,null,null,null);a["default"]=s.exports},d81d:function(t,a,r){"use strict";var e=r("23e7"),i=r("b727").map,n=r("1dde"),c=r("ae40"),o=n("map"),s=c("map");e({target:"Array",proto:!0,forced:!o||!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-39cd0dda.a9bcfd3c.js.map