<template>
    <div>
        <!-- <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item, index) in arry" :key="index">
                <img :src="item.image" />
            </van-swipe-item>
        </van-swipe> -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"  v-for="(item, index) in arry" :key="index"  @click="handlePreview(index,item)"><img :src="item.image"/></div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { ImagePreview } from 'vant'
import Swiper from 'swiper'
Vue.use(ImagePreview)

export default {
  components: {
    [ImagePreview.Component.name]: ImagePreview.Component
  },
  data () {
    return {
      show: false,
      index: 0,
      list: []
    }
  },
  props: ['arry'],
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true
    })
  },
  methods: {
    onChange (index) {
      this.index = index
    },
    handlePreview (index, item) {
      this.list = this.arry.map(item => {
        return item.image
      })
      // console.log(this.list)

      ImagePreview({
        startPosition: index,
        images: this.list
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 img{
     width: 100%;
 }
  .swiper-container {
     width: 100%;
     height: 200px;
 }

</style>
