<template>
  <div class="announcement" v-if="scrollY === 0">
    <div class="message">
      <i class="fas fa-bell"></i>
      <span class="text ml-2">歡慶父親節 ! 現在輸入優惠碼【 LOVE88 】，結帳優惠88折</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrollY: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      this.scrollY = window.top.scrollY
    }
  }
}
</script>

<style lang="scss">
.announcement {
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  margin: 0;
  height: 2.5rem;
  padding: 10px;
  background-color: #ffedaf;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .message {
    line-height: 2.5rem;
    vertical-align: middle;
    .text {
      font-size: 0.8rem;
    }
    .fa-bell {
      line-height: 2.5rem;
      vertical-align: middle;
      path {
        fill: #ffedaf;
        stroke: #000000;
        stroke-width: 18px;
      }
    }
  }
}
</style>
