(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d3969e8c"],{"075c":function(t,e,i){},"3daa":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"homepage-wrapper"},[i("div",{staticClass:"homepage"},[i("div",{staticClass:"swiper-container-wrapper"},[i("div",{staticClass:"swiper-container jumbo-swiper-container"},[i("div",{staticClass:"swiper-wrapper"},[i("div",{staticClass:"swiper-slide"},[i("img",{staticClass:"w-100",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/0MmTvxlbN47F1yN0PnduoTF7jPCkuqu8dwQawndwEY1PQ2zH1h65BO9dcFVw0jbNTvtwNz9ZdHupme1BkF5VAkJ2rhnGlQKlp0lcoyFK0tTfEs3lb740c3rFUdtWHTv7.png"},on:{click:function(e){return t.$router.push("/search?key=夏日嚴選")}}}),i("div",{staticClass:"swiper-button-next"}),i("div",{staticClass:"swiper-button-prev"})]),i("div",{staticClass:"swiper-slide"},[i("img",{staticClass:"w-100",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/Zt5Ebl4HCveSAbLyggmF4wf8B0P8J2KctMp01huq1FHajKSLh3TpjmFjnTsVtZb2SbaTUWuHtGOElxjbFiN4pqNEOIu4HOOp4EYbSjJdqR275aBoTuvxaifDDau4i1FK.png"},on:{click:function(e){return t.$router.push("/category?n=2")}}}),i("div",{staticClass:"swiper-button-next"}),i("div",{staticClass:"swiper-button-prev"})]),i("div",{staticClass:"swiper-slide"},[i("img",{staticClass:"w-100",attrs:{src:"https://hexschool-api.s3.us-west-2.amazonaws.com/custom/lOz7ks7pLTf5u3btisI2SXHHLDddIS68RXjNplzUQTFcJQEuFDCnLRNY3YOO5Y5C2ks6HvWwQIxXozUKED7QCFxFVsdkkn99zOCpejH8tAAIdRFUC7bDFDTIAN5V7rx0.png"},on:{click:function(e){return t.$router.push("/category?n=4")}}}),i("div",{staticClass:"swiper-button-next"}),i("div",{staticClass:"swiper-button-prev"})])]),i("div",{staticClass:"swiper-pagination"})])]),t.products.length>0?i("div",[i("div",{staticClass:"section-wrapper"},[i("cardSwiper",{attrs:{title:"編輯精選",products:t.eventProducts.filter((function(t){return t.options.event.split(" ").includes("編輯精選")})),cart:t.cart}})],1),i("div",{staticClass:"section-wrapper"},[i("cardSwiper",{attrs:{title:"最近熱門",products:t.eventProducts.filter((function(t){return t.options.event.split(" ").includes("本月熱門")})),cart:t.cart}})],1),i("div",{staticClass:"section-wrapper"},[i("cardSwiper",{attrs:{title:"限時免運",products:t.eventProducts.filter((function(t){return t.options.event.split(" ").includes("免運")})),cart:t.cart}})],1)]):t._e()])])},r=[],a=(i("99af"),i("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-section"},[i("div",{staticClass:"title"},[t._v(t._s(t.title))]),i("div",{staticClass:"swiper-container-wrapper"},[i("div",{staticClass:"swiper-container card-swiper-container"},[i("div",{staticClass:"swiper-wrapper"},t._l(t.products,(function(e){return i("div",{key:"silder-"+e.id,staticClass:"swiper-slide",on:{click:function(i){return t.$router.push("/product/"+e.id)}}},[i("div",{staticClass:"card"},[i("div",{staticClass:"img-wrapper"},[i("div",{staticClass:"card-img-top",style:"background: url("+e.imageUrl[0]+") no-repeat center/contain;"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:.85>e.price/e.origin_price,expression:"0.85 > item.price/item.origin_price"}],staticClass:"discount-badge"},[t._v(t._s(10*(e.price/e.origin_price).toFixed(1)+" 折")+" ")]),i("div",{staticClass:"card-body"},[i("div",{staticClass:"card-content"},[i("p",{staticClass:"card-title"},[t._v(t._s(e.title))]),i("div",{staticClass:"price-wrapper"},[i("span",{staticClass:"price"},[t._v(t._s(t._f("priceFormat")(e.price)))]),i("span",{directives:[{name:"show",rawName:"v-show",value:e.origin_price>e.price,expression:"item.origin_price > item.price"}],staticClass:"original-price"},[t._v(t._s(t._f("priceFormat")(e.origin_price)))])])])])])])})),0),i("div",{staticClass:"swiper-pagination"}),i("div",{staticClass:"swiper-button-next card-swiper-button-next"}),i("div",{staticClass:"swiper-button-prev card-swiper-button-prev"})])])])}),n=[],c=i("7de3"),o=i.n(c),p=(i("bbe3"),{data:function(){return{}},props:{title:String,products:Array},mounted:function(){new o.a(".swiper-container.card-swiper-container",{slidesPerView:2.1,spaceBetween:"3%",loop:!0,navigation:{nextEl:".swiper-button-next.card-swiper-button-next",prevEl:".swiper-button-prev.card-swiper-button-prev"},pagination:{el:".swiper-pagination",type:"fraction"},breakpoints:{375:{slidesPerView:2.5,spaceBetween:"15%",slidesPerGroup:1},576:{slidesPerView:3.1,spaceBetween:"15%",slidesPerGroup:1},768:{slidesPerView:3.5,spaceBetween:"15%"},834:{slidesPerView:3.8,spaceBetween:"15%"},900:{slidesPerView:4.1,spaceBetween:"15%"},992:{slidesPerView:4.5,spaceBetween:"15%"},1200:{slidesPerView:5,spaceBetween:"18%",slidesPerGroup:5}}})}}),d=p,u=(i("ca49"),i("2877")),l=Object(u["a"])(d,a,n,!1,null,null,null),w=l.exports,v={data:function(){return{products:[],eventProducts:[],cart:{},mySwiper:{}}},created:function(){var t=this;this.getProducts(),this.getCart(),this.$bus.$on("cartUpdate",(function(e){t.cart=e.cart}))},components:{cardSwiper:w},mounted:function(){this.getSwiper()},methods:{getSwiper:function(){this.mySwiper=new o.a(".jumbo-swiper-container",{slidesPerView:"auto",spaceBetween:"1%",centeredSlides:!0,loop:!0,speed:800,autoplay:{delay:2500,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0}})},getProducts:function(){var t=this,e=this.$loading.show({isFullPage:!0,opacity:1},{default:this.$createElement("MyLoading")}),i="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/products?paged=999");this.$http.get(i).then((function(i){t.products=i.data.data,t.eventProducts=t.products.filter((function(t){return!(!t.options.event||0===t.options.event.length)})),e.hide()}))},getCart:function(t){var e=this,i="".concat("https://course-ec-api.hexschool.io/","api/").concat("765c633d-f16f-4821-90b7-1588004cb252","/ec/shopping");this.$http.get(i).then((function(i){e.cart=i.data.data,t&&t.hide()}))}}},f=v,h=(i("fc54"),Object(u["a"])(f,s,r,!1,null,null,null));e["default"]=h.exports},8418:function(t,e,i){"use strict";var s=i("c04e"),r=i("9bf2"),a=i("5c6c");t.exports=function(t,e,i){var n=s(e);n in t?r.f(t,n,a(0,i)):t[n]=i}},"99af":function(t,e,i){"use strict";var s=i("23e7"),r=i("d039"),a=i("e8b5"),n=i("861d"),c=i("7b0b"),o=i("50c4"),p=i("8418"),d=i("65f0"),u=i("1dde"),l=i("b622"),w=i("2d00"),v=l("isConcatSpreadable"),f=9007199254740991,h="Maximum allowed index exceeded",b=w>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=u("concat"),C=function(t){if(!n(t))return!1;var e=t[v];return void 0!==e?!!e:a(t)},m=!b||!g;s({target:"Array",proto:!0,forced:m},{concat:function(t){var e,i,s,r,a,n=c(this),u=d(n,0),l=0;for(e=-1,s=arguments.length;e<s;e++)if(a=-1===e?n:arguments[e],C(a)){if(r=o(a.length),l+r>f)throw TypeError(h);for(i=0;i<r;i++,l++)i in a&&p(u,l,a[i])}else{if(l>=f)throw TypeError(h);p(u,l++,a)}return u.length=l,u}})},ca49:function(t,e,i){"use strict";var s=i("ff85"),r=i.n(s);r.a},fc54:function(t,e,i){"use strict";var s=i("075c"),r=i.n(s);r.a},ff85:function(t,e,i){}}]);
//# sourceMappingURL=chunk-d3969e8c.384731dd.js.map