(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60c005b8"],{1876:function(t,e,a){},"335c":function(t,e,a){"use strict";var s=a("8631"),r=a.n(s);r.a},"6fe5":function(t,e,a){"use strict";var s=a("1876"),r=a.n(s);r.a},8418:function(t,e,a){"use strict";var s=a("c04e"),r=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var c=s(e);c in t?r.f(t,c,i(0,a)):t[c]=a}},8631:function(t,e,a){},"99af":function(t,e,a){"use strict";var s=a("23e7"),r=a("d039"),i=a("e8b5"),c=a("861d"),o=a("7b0b"),n=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),v=a("b622"),f=a("2d00"),m=v("isConcatSpreadable"),p=9007199254740991,h="Maximum allowed index exceeded",_=f>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),g=d("concat"),C=function(t){if(!c(t))return!1;var e=t[m];return void 0!==e?!!e:i(t)},y=!_||!g;s({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,s,r,i,c=o(this),d=u(c,0),v=0;for(e=-1,s=arguments.length;e<s;e++)if(i=-1===e?c:arguments[e],C(i)){if(r=n(i.length),v+r>p)throw TypeError(h);for(a=0;a<r;a++,v++)a in i&&l(d,v,i[a])}else{if(v>=p)throw TypeError(h);l(d,v++,i)}return d.length=v,d}})},b789:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.checkingout,expression:"!checkingout"}],ref:"cart",staticClass:"cart"},[a("div",{staticClass:"router-wrapper mt-3"},[a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"mr-2 router"},[t._v("首頁")])]),a("i",{staticClass:"fas fa-chevron-right"}),a("span",{staticClass:"ml-2"},[t._v("購物車")])],1),t.cart.length?a("div",{staticClass:"my-5 cart-step-wrapper d-flex justify-content-center mx-auto"},[t._m(0),t._m(1)]):t._e(),t.cart.length?t._e():a("div",{staticClass:"empty-cart w-100 text-center my-5"},[a("div",{staticClass:"text-align-center"},[a("h1",{staticClass:"mt-5"},[t._v("你的購物車中沒有商品")]),a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"btn mt-5 back-to-homepage"},[t._v("回首頁選購")])]),a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"btn mt-5 ml-3 back-to-homepage"},[t._v("我不要")])])],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-8 cart-board"},[a("div",{staticClass:"table-wrapper d-flex flex-column"},[a("table",{staticClass:"table"},[t.cart.length?a("tbody",t._l(t.cart,(function(e){return a("tr",{key:e.id},[a("td",{staticClass:"td-img",class:{borderless:1===t.cart.length}},[a("div",{staticClass:"img-wrapper mx-auto my-auto"},[a("img",{staticClass:"cart-image",attrs:{src:e.product.imageUrl},on:{click:function(a){return t.$router.push("/product/"+e.product.id)}}})])]),a("td",{staticClass:"align-middle td-title",class:{borderless:1===t.cart.length}},[t._v(" "+t._s(e.product.title)+" ")]),a("td",{staticClass:"align-middle td-quantity",class:{borderless:1===t.cart.length}},[e.quantity<=4?a("select",{directives:[{name:"model",rawName:"v-model",value:e.quantity,expression:"item.quantity"}],staticClass:"form-control",on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(e,"quantity",a.target.multiple?s:s[0])},function(a){return t.quantityUpdata(e.product.id,e.quantity)}]}},[t._l(Array.from(Array(4).keys()),(function(e){return a("option",{key:e},[t._v(" "+t._s(e+1)+" ")])})),a("option",{attrs:{value:"5"}},[t._v("5+")])],2):t._e(),a("validation-observer",[a("form",{on:{submit:function(t){t.preventDefault()}}},[a("validation-provider",{attrs:{rules:"required|numeric|min_value:1"},scopedSlots:t._u([{key:"default",fn:function(s){var r=s.errors;return[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.quantity,expression:"item.quantity",modifiers:{lazy:!0}},{name:"show",rawName:"v-show",value:e.quantity>4,expression:"item.quantity > 4"}],staticClass:"form-control",attrs:{id:"quantity-input-"+e.product.id,type:"text"},domProps:{value:e.quantity},on:{change:[function(a){return t.$set(e,"quantity",a.target.value)},function(a){return t.quantityUpdata(e.product.id,e.quantity)}]}}),r[0]?a("span",{staticClass:"text-danger td-quantity-error"},[t._v(t._s("數量"+r[0].slice(e.product.id.length+16,r[0].length)))]):t._e()]}}],null,!0)})],1)])],1),a("td",{staticClass:"align-middle text-right td-amount",class:{borderless:1===t.cart.length}},[t._v(" "+t._s(t._f("priceFormat")(e.product.price*e.quantity))+" ")]),a("td",{staticClass:"align-middle",class:{borderless:1===t.cart.length}},[a("button",{staticClass:"btn",on:{click:function(a){return t.removeCartItem(e.product.id)}}},[a("i",{staticClass:"fa fa-times"})])])])})),0):t._e()]),t.cart.length?a("div",{staticClass:"clear-cart-wrapper mb-3 flex-grow-1 d-flex align-items-end"},[a("div",{staticClass:"clear-cart",on:{click:function(e){return t.removeAllCartItem()}}},[t._v("清空購物車")])]):t._e()])]),t.cart.length?a("div",{staticClass:"col-4 cart-summary"},[a("div",{staticClass:"card cart-card mx-auto"},[a("div",{staticClass:"card-header"},[t._v(" 訂單摘要 ")]),a("div",{staticClass:"card-body d-flex flex-column"},[a("ul",{staticClass:"list-group h-100"},[a("li",{staticClass:"list-group-item d-flex justify-content-between"},[a("span",[t._v("商品總計")]),a("span",[t._v(t._s(t._f("priceFormat")(t.cartTotal)))])]),t._m(2),t._m(3),a("div",{staticClass:"list-group-item d-flex w-100 pt-2"},[a("div",{staticClass:"cart-total w-100 d-flex justify-content-between"},[a("span",[t._v("結帳金額")]),a("span",[t._v(t._s(t._f("priceFormat")(t.cartTotal)))])])]),a("div",{staticClass:"list-group-item"},[a("div",{staticClass:"goToCheckout btn d-flex justify-content-center",on:{click:t.cartOrCheckout}},[t._v(" 前往結帳 ")])])])])])]):t._e()])]),a("checkout",{directives:[{name:"show",rawName:"v-show",value:t.checkingout,expression:"checkingout"}],ref:"checkout",attrs:{cart:t.cart},on:{backtocart:t.cartOrCheckout}})],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart-step row"},[a("div",{staticClass:"cart-step-icon"},[t._v("1")]),a("div",{staticClass:"cart-step-text"},[a("div",[t._v("購買品項")])]),a("div",{staticClass:"connector-line"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkout-step row"},[a("div",{staticClass:"checkout-step-icon"},[t._v("2")]),a("div",{staticClass:"checkout-step-text"},[t._v("填寫地址與結帳")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-group-item d-flex justify-content-between"},[a("span",[t._v("運費總計")]),a("span",[t._v("NT$ 0")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider-wrapper"},[a("div",{staticClass:"divider"})])}],i=(a("99af"),a("4160"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"checkout",staticClass:"checkout"},[a("div",{staticClass:"router-wrapper mt-3"},[a("i",{staticClass:"fas fa-chevron-left",on:{click:t.backToCart}}),a("span",{staticClass:"mx-2 router",on:{click:t.backToCart}},[t._v("返回購物車")])]),t._m(0),a("div",{staticClass:"row"},[t.cart.length?a("div",{staticClass:"mt-5 col-4 offset-1 cart-summary"},[a("div",{staticClass:"card cart-card mx-auto"},[a("div",{staticClass:"card-header"},[t._v(" 訂單摘要 ")]),a("div",{staticClass:"card-body d-flex flex-column"},[a("ul",{staticClass:"list-group h-100"},[a("li",{staticClass:"list-group-item d-flex justify-content-between"},[a("span",[t._v("商品總計")]),a("span",[t._v(t._s(t._f("priceFormat")(t.cartTotal)))])]),t._m(1),t._m(2),a("div",{staticClass:"list-group-item d-flex w-100 mt-3"},[a("div",{staticClass:"cart-total w-100 d-flex justify-content-between"},[a("span",[t._v("結帳金額")]),a("span",[t._v(t._s(t._f("priceFormat")(t.cartTotal)))])])])])])])]):t._e(),a("div",{staticClass:"mt-3 col-6 justify-content-center checkout-form"},[a("validation-observer",{ref:"formvalidation",staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid;return[a("form",{ref:"checkoutform",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:r,attrs:{id:"username",type:"text"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("收件人姓名"+s[0].slice(9,s[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:r,attrs:{id:"email",type:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("Email"+s[0].slice(6,s[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required|numeric|min:8"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"tel"}},[t._v("電話")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:r,attrs:{id:"tel",type:"tel"},domProps:{value:t.form.tel},on:{input:function(e){e.target.composing||t.$set(t.form,"tel",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("電話"+s[0].slice(4,s[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"address"}},[t._v("地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:r,attrs:{id:"address",type:"text"},domProps:{value:t.form.address},on:{input:function(e){e.target.composing||t.$set(t.form,"address",e.target.value)}}}),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("地址"+s[0].slice(8,s[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors,r=e.classes;return[a("label",{attrs:{for:"message"}},[t._v("購買方式")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",class:r,attrs:{id:"payment",required:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.form,"payment",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"",disabled:""}},[t._v(" 請選擇付款方式 ")]),a("option",{attrs:{value:"WebATM"}},[t._v(" WebATM ")]),a("option",{attrs:{value:"ATM"}},[t._v(" ATM ")]),a("option",{attrs:{value:"CVS"}},[t._v(" CVS ")]),a("option",{attrs:{value:"Barcode"}},[t._v(" Barcode ")]),a("option",{attrs:{value:"Credit"}},[t._v(" Credit ")]),a("option",{attrs:{value:"ApplePay"}},[t._v(" ApplePay ")]),a("option",{attrs:{value:"GooglePay"}},[t._v(" GooglePay ")])]),s[0]?a("span",{staticClass:"text-danger"},[t._v(t._s("購買方式"+s[0].slice(8,s[0].length)))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"message"}},[t._v("留言")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",cols:"30",rows:"3"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn checkout-submit",attrs:{type:"submit",disabled:s}},[t._v(" 送出 ")])])])]}}])})],1)])])}),c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-5 cart-step-wrapper d-flex justify-content-center mx-auto"},[a("div",{staticClass:"cart-step row"},[a("div",{staticClass:"cart-step-icon"},[t._v("1")]),a("div",{staticClass:"cart-step-text"},[a("div",[t._v("購買品項")])]),a("div",{staticClass:"connector-line"})]),a("div",{staticClass:"checkout-step row"},[a("div",{staticClass:"checkout-step-icon"},[t._v("2")]),a("div",{staticClass:"checkout-step-text"},[t._v("填寫地址與結帳")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-group-item d-flex justify-content-between"},[a("span",[t._v("運費總計")]),a("span",[t._v("NT$ 0")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divider-wrapper"},[a("div",{staticClass:"divider"})])}],o=(a("b64b"),a("1157")),n=a.n(o),l={name:"Checkout",data:function(){return{form:{name:"",email:"",tel:"",address:"",payment:"",message:""}}},props:{cart:{}},computed:{cartTotal:function(){var t=0;return this.cart.forEach((function(e){t+=e.product.price*e.quantity})),t}},methods:{backToCart:function(){this.$emit("backtocart")},createOrder:function(){var t=this,e=this.$loading.show({container:this.$refs.checkout,opacity:1,isFullPage:!0}),a="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/orders");this.$http.post(a,this.form).then((function(a){a.data.data.id&&(Object.keys(t.form).forEach((function(t){;""})),t.$refs.formvalidation.reset(),t.$refs.checkoutform.reset(),n()("#orderModal").modal("show")),t.$router.push("/"),t.$bus.$emit("cartUpdate",{cart:{}}),e.hide()})).catch((function(a){console.log(a),t.$router.push("/"),e.hide()}))}}},u=l,d=(a("335c"),a("2877")),v=Object(d["a"])(u,i,c,!1,null,null,null),f=v.exports,m={name:"Cart",data:function(){return{cart:{},checkingout:!1}},components:{checkout:f},created:function(){var t=this.$loading.show({container:this.$refs.cart,opacity:1,isFullPage:!0});this.getCart(t)},computed:{cartTotal:function(){var t=0;return this.cart.forEach((function(e){t+=e.product.price*e.quantity})),t}},methods:{getCart:function(t){var e=this,a="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping");this.$http.get(a).then((function(a){e.cart=a.data.data,t&&t.hide(),e.$bus.$emit("cartUpdate",{cart:e.cart})}))},quantityUpdata:function(t,e){var a=this,s=this.$loading.show({container:this.$refs.cart,opacity:1,isFullPage:!0});(!/^[0-9]+$/.test(e)||e<1)&&(e=1);var r="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping"),i={product:t,quantity:e};this.$http.patch(r,i).then((function(){a.getCart(s)}))},removeAllCartItem:function(){var t=this,e=this.$loading.show({container:this.$refs.cart,opacity:1,isFullPage:!0}),a="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping/all/product");this.$http.delete(a).then((function(){t.getCart(e)}))},removeCartItem:function(t){var e=this,a=this.$loading.show({container:this.$refs.cart,opacity:1,isFullPage:!0}),s="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping/").concat(t);this.$http.delete(s).then((function(){e.getCart(a)}))},cartOrCheckout:function(){this.checkingout=!this.checkingout,this.$refs.checkout.$refs.formvalidation.reset(),this.$refs.checkout.$refs.checkoutform.reset()}}},p=m,h=(a("6fe5"),Object(d["a"])(p,s,r,!1,null,null,null));e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-60c005b8.d5126661.js.map