<template>
  <div class="home-wrapper" ref="home-warpper">
    <div class="overlay-loading" ref="overlay-loading"></div>
    <div class="home mx-auto" ref="home">
      <div class="products">
        <div class="row">
          <div class="col-3 col-lg-2 category-wrapper">
            <div class="products-category">
              <div class="title">商品分類</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item" @click="$router.push('/category?n=1')">
                  <i class="fas fa-utensils"></i>
                  廚房餐桌
                </li>
                <li class="list-group-item" @click="$router.push('/category?n=2')">
                  <i class="fas fa-couch"></i>
                  空間佈置
                </li>
                <li class="list-group-item" @click="$router.push('/category?n=3')">
                  <i class="fas fa-laptop-house"></i>
                  質感生活
                  </li>
                <li class="list-group-item" @click="$router.push('/category?n=4')">
                  <i class="fas fa-tshirt"></i>
                  品味衣著
                </li>
                <li class="list-group-item" @click="$router.push('/category?n=5')">
                  <i class="fas fa-pencil-ruler"></i>
                  文具小物
                </li>
                <li class="list-group-item" @click="$router.push('/category?n=6')">
                  <i class="fas fa-cocktail"></i>
                  食品飲料
                </li>
                <li class="list-group-item" @click="$router.push('/category?n=7')">
                  <i class="fas fa-hiking"></i>
                  戶外休閒
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-9 col-lg-10 d-flex justify-content-center">
            <div class="hot-sales w-100 row d-flex align-items-center" v-if="products.length > 0">
              <div class="col-12 col-sm-6 hot-swiper-wrapper">
                <div class="outer-title">本月熱賣 TOP 5</div>
                <hot-swiper :products="hotProducts"></hot-swiper>
              </div>
              <div class="col-12 col-sm-6 rank-wrapper">
                <div class="title">本月熱賣 TOP 5</div>
                <ul class="list-group list-group-flush">
                  <li
                    v-for="(item,index) in hotProducts"
                    class="list-group-item d-flex flex-row"
                    :key="`top-5-${item.id}`"
                    @click="$router.push(`/product/${item.id}`)"
                  >
                    <div class="rank">{{ `0${index + 1}` }}</div>
                    <div class="image-wrapper">
                      <div class="image" :style="`background: url(${item.imageUrl[0]}) no-repeat center/contain;`"></div>
                    </div>
                    <span class="title">{{ item.title }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="row w-100">
          <div class="col-0 col-xl-2"></div>
          <div class="card-decks-wrapper col-12 col-xl-10">
            <div class="title">熱賣商品</div>
            <div v-for="i in Math.ceil(products.length/numCardsRow)" :key="`row_${i}`">
              <div class="card-deck" v-if="products.slice((i - 1) * numCardsRow, i * numCardsRow).length > 0">
                <div v-for="item in products.slice((i - 1) * numCardsRow, i * numCardsRow)" :key="item.id" class="card my-5" :id="item.id"  @click="$router.push(`/product/${item.id}`)"> <!-- @mouseover="getDescription(item)" -->
                  <div class="img-wrapper">
                    <div :style="`background: url(${item.imageUrl[0]}) no-repeat center/contain;`" class="card-img-top"></div>
                  </div>
                  <div class="discount-badge" v-show="0.85 > item.price/item.origin_price">{{ `${(item.price/item.origin_price).toFixed(1) * 10} 折` }}
                  </div>
                  <div class="card-body">
                    <div class="card-content">
                      <p class="card-title">{{ item.title }}</p>
                      <div class="rating w-100 d-flex align-items-center">
                        <span v-for="(score, index) in item.rating.rate" :class="score" class="star-item" :key="index"></span>
                        <span class="count">{{ `(${item.rating.count})`  }}</span>
                      </div>
                      <div class="price-wrapper">
                        <span class="price">{{ item.price | priceFormat }}</span>
                        <span class="original-price" v-show="item.origin_price > item.price">{{ item.origin_price | priceFormat }}</span>
                      </div>
                    </div>
                  </div>
                  <popover :product="item" :windowWidth="windowWidth" :cartId="cartId" @getCart="getCart"></popover>
                </div>
                <div class="card my-5 border-0 no-use" v-for="i in numCardsRow - products.slice((i - 1) * numCardsRow, i * numCardsRow).length" :key="`surplus_${i}`">
                </div>
              </div>
            </div>
            <pagination :pages="pagination" @emit-pages="getProducts" class="pagination-wrapper"></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.css'
import popover from '@/components/Popover'
import pagination from '@/components/Pagination'
import hotSwiper from '@/components/HotSwiper.vue'
export default {
  name: 'products',
  data () {
    return {
      products: [],
      hotProducts: [],
      cart: {},
      pagination: {},
      isLoading: false,
      windowWidth: window.innerWidth
    }
  },
  components: {
    pagination,
    hotSwiper,
    popover
  },
  computed: {
    cartId: function () {
      if (this.cart.length > 0) {
        return this.cart.map(item => item.product.id)
      }
      return []
    },
    numCardsRow: function () {
      if (this.windowWidth >= 576 && this.windowWidth < 768) {
        return 3
      } else if (this.windowWidth >= 768) {
        return 4
      }
      return 2
    }
  },
  created () {
    this.getProducts()
    this.getCart()
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  methods: {
    getSwiper () {
      this.mySwiper = new Swiper('.hot-sales.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>'
          }
        }
      })
    },
    getProducts (page = 1) {
      const loader = this.$loading.show({
        container: this.$refs.overlayLoading,
        isFullPage: true,
        opacity: 1
      }, { default: this.$createElement('MyLoading') })
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products?paged=16&page=${page}`
      this.$http.get(url)
        .then((res) => {
          this.products = res.data.data
          this.products.forEach(item => {
            item.rating = this.rating()
          })
          if (page === 1 && this.hotProducts.length === 0) {
            for (let i = 0; i < 5; i++) {
              const randomProduct = this.products[Math.floor(Math.random() * this.products.length)]
              const hotProductsId = this.hotProducts.map(item => item.id)
              if (hotProductsId.includes(randomProduct.id)) {
                i -= 1
              } else {
                this.hotProducts.push(randomProduct)
              }
            }
          }
          this.getSwiper()
          this.pagination = res.data.meta.pagination
          loader.hide()
          window.scrollTo(0, 0)
        })
    },
    getCart (loader) {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then((res) => {
          this.cart = res.data.data
          this.$bus.$emit('cartUpdate', {
            cart: this.cart
          })
          if (loader) {
            loader.hide()
          }
        })
    },
    rating () {
      const result = { rate: [], count: 0 }
      const score = Math.floor((2.5 + Math.random() * 2) * 2.5) / 2
      for (let i = 0; i < Math.floor(score); i++) {
        result.rate.push('on')
      }
      if (score % 1 !== 0) {
        result.rate.push('half')
      }
      while (result.rate.length < 5) {
        result.rate.push('off')
      }
      result.count = Math.floor((50 + Math.random() * 500))
      return result
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
$pink: #FA7268;
$navy: #00457C;
$blue: #0079C1;
$gray: #484848;
$light-gray: #a8a8ab;
.home-wrapper {
  display: flex;
  flex-direction: column;
}
.home {
  min-height: calc(100vh - 15.5rem);
  width: 100%;
  overflow: hidden;
  .router-link-active {
    color: $blue;
  }
  .products {
    margin: 3.5rem auto 2rem auto;
    @media (min-width: 768px) {
      margin-top: 3rem;
      max-width: 992px;
    }
    @media (min-width: 1200px) {
      max-width: 992px;
    }
    @media (min-width: 1441px) {
      max-width: 1200px;
    }
    .row {
      margin: 0;
    }
    .category-wrapper{
      display: none;
      @media (min-width: 768px) {
        display: flex;
      }
      .products-category {
        margin-left: 2rem;
        @media (min-width: 992px) {
          margin-left: 1rem;
        }
        @media (min-width: 1200px) {
          margin-left: 0rem;
        }
        .title {
          font-size: 1rem;
          color: $gray;
          font-weight: 500;
          margin-bottom: 0.5rem;
          @media (min-width: 992px) {
            font-size: 1.25rem;
          }
        }
        .list-group {
          width: 100%;
          .list-group-item {
            font-size: 0.8rem;
            font-weight: 500;
            padding: 0.75rem 0.75rem;
            cursor: pointer;
            @media (min-width: 768px) {
              font-size: 0.9em;
            }
            .svg-inline--fa {
              margin-right: 0.5rem;
              width: 20px;
              path {
                fill: #ffffff;
                stroke: #000000;
                stroke-width: 18px;
              }
            }
          }
          .list-group-item:hover {
            color: $pink;
            .svg-inline--fa {
              path {
                stroke: $pink;
              }
            }
          }
        }
      }
    }
    .hot-sales {
      width: 100%;
      margin: 1rem 0;
      @media (min-width: 768px) {
        margin: 0 0 3rem 0;
      }
      .hot-swiper-wrapper {
        padding: 0;
        margin-bottom: 1rem;
        @media (min-width: 375px) {
          margin-bottom: 2rem;
        }
        @media (min-width: 576px) {
          margin-bottom: 0;
          padding: 1rem;
        }
        .outer-title {
          font-size: 1rem;
          font-weight: 500;
          margin-left: 1rem;
          margin-bottom: 1rem;
          @media (min-width: 375px) {
            margin-bottom: 2rem;
          }
          @media (min-width: 576px) {
            display: none;
          }
        }
      }
      .rank-wrapper {
        padding: 0;
        .title {
          display: none;
          @media (min-width: 576px) {
            display: inline-block;
            padding: 1rem;
            font-size: 1rem;
            font-weight: 500;
          }
          @media (min-width: 992px) {
            font-size: 1.25rem;
          }
        }
        .list-group-item:hover {
          filter: opacity(0.8)
        }
        .list-group-item {
          margin: 0.1rem 0;
          height: 100%;
          cursor: pointer;
          .image-wrapper {
            height: 3rem;
            min-width: 3rem;
            width: 3rem;
            background: #e1e1e6;
            display: flex;
            align-items: center;
            .image {
              width: 100%;
              padding-top: 100%;
            }
          }
          .rank {
            color: $light-gray;
            font-size: 1.25rem;
            font-weight: 500;
            margin-right: 0.5rem;
            line-height: 3rem;
            height: 3rem;
            vertical-align: middle;
          }
          .title {
            padding: 0;
            font-size: 0.8rem;
            font-weight: 500;
            margin: 0 1rem;
            line-height: 1.5em;
            height: 3em;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            visibility: visible;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            @media (min-width: 992px) {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
    .card-decks-wrapper {
      width: 100%;
      padding: 0;
      .title {
        margin-left: 1rem;
        font-size: 1rem;
        font-weight: 500;
        @media (min-width: 576px) {
          margin-left: 2rem;
        }
        @media (min-width: 992px) {
          font-size: 1.25rem;
        }
      }
      .card-deck {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        @media (min-width: 576px) {
          padding: 2rem;
        }
        .card {
          margin: 1rem 0.5rem !important;
          border: none;
          width: 48%;
          height: 18rem;
          cursor: pointer;
          @media (min-width: 376px) {
            height: 20rem;
          }
          @media (min-width: 576px) {
            width: 100%;
          }
          .img-wrapper{
            position: relative;
            width: 100%;
            background: #e1e1e6;
            display: flex;
            align-items: center;
            .card-img-top {
              width: 100%;
              padding-top: 100%;
            }
          }
          .discount-badge {
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 2px 0 2px 0;
            z-index: 5;
            background: $pink;
            font-weight: 700;
            font-size: 14px;
            color: #ffffff;
            box-shadow: 1px 1px 2px 0 rgba(0,0,0,0.2);
            text-align: center;
            padding: 5px 6px;
            line-height: 1;
          }
          .card-body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0.5rem;
            display: inline-block;
            position: relative;
            width: 100%;
            padding-bottom: 100%;
            position: relative;
            .card-content {
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              top: 0;
              margin-top: 1rem;
              .card-title {
                height: 2.5rem;
                line-height: 1.25rem;
                text-align: start;
                font-size: 0.9rem;
                font-weight: 700;
                color: $gray;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                visibility: visible;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                @media (min-width: 992px) {
                  width: auto;
                  font-size: 16px;
                }
              }
              .price-wrapper {
                width: 100%;
                text-align: start;
                flex-grow: 1;
                bottom: 10px;
                .price {
                  display: inline-block;
                  width: 100%;
                  vertical-align: middle;
                  font-weight: 500;
                  font-size: 0.9rem;
                  margin-right: 6px;
                  color: $navy;
                  @media (min-width: 992px) {
                    width: auto;
                    font-size: 16px;
                  }
                }
                .original-price {
                  vertical-align: middle;
                  text-decoration: line-through;
                  font-size: 0.8rem;
                  line-height: 20px;
                  color: $light-gray;
                  @media (min-width: 992px) {
                    width: auto;
                    font-size: 14px;
                  }
                }
              }
              .rating {
                margin-bottom: 0.5rem;
                .star-item{
                  display: inline-block;
                  width: 10px;
                  height: 10px;
                  margin-right: 3px;
                  background-repeat: no-repeat;
                  background-size: 10px 10px;
                }
                .star-item:last-child{
                  margin-right: 0;
                }
                .on{
                  background-image: url('../../public/images/star/star24_on@2x.png')
                }
                .off{
                  background-image: url('../../public/images/star/star24_off@2x.png')
                }
                .half{
                  background-image: url('../../public/images/star/star24_half@2x.png')
                }
                .count {
                  margin-left: 5px;
                  font-size: 10px;
                  font-weight: 500;
                }
              }
            }
          }
        }
        .no-use {
          cursor: default;
        }
      }
    }
  }
}
.overlay-loading {
  z-index: -999;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
