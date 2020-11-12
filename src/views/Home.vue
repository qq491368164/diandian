<template>
    <div class="box">
        <home-header></home-header>
        <homeSwiper style="background:#fff;">
            <div class="swiper-slide" v-for="item in this.datalist.gamelist" :key="item.dtid" >
                <img :src="item.images">
                <p>{{item.gamename}}</p>
            </div>
        </homeSwiper>
        <home-detail style="background:#fff;margin-top:10px;margin-bottom:10px;padding-top:10px;padding-bottom:10px">
            <div style="text-align:center;margin-top:10px;color: rgb(249, 34, 70);">为您推荐</div>
            <ul>
                <li v-for="item in this.datalist.QuickPlay" :key="item.id" @click="handleHot(item.id)">
                    <img :src="item.imgurl">
                    <p>{{item.nickname}}</p>
                    <p style="color: rgb(249, 34, 70);">{{item.price}}元/{{item.typeflag}}</p>
                </li>
            </ul>
        </home-detail>
        <div v-if="this.datalist">
            <home-game>
            </home-game>
        </div>
    </div>
</template>

<script>
import homeHeader from '@/views/Home/HomeHeader'
import homeSwiper from '@/views/Home/HomeSwiper'
import homeDetail from '@/views/Home/HomeDetail'
import homeGame from '@/views/Home/HomeGame'
import jsonp from 'jsonp'
import Swiper from 'swiper/bundle'// swipe6 之前， 所有的功能都集成再swiper核心包
// swiper6之后， 功能分离了。
import 'swiper/swiper-bundle.css'
export default {
  data () {
    return {
      datalist: []
    }
  },
  components: {
    homeHeader,
    homeSwiper,
    homeDetail,
    homeGame
  },
  mounted () {
    jsonp('https://yapi.tuwan.com/Index/getPlayIndexApi/?type=chat&callback=_jsonp5l50dyeabxi', '', (err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.datalist = res
        console.log(this.datalist)
      }
    })
    new Swiper('.swiper-container', {
      spaceBetween: 30,
      // freeMode: true,
      loop: true,
      // speed: 2500,
      slidesPerGroup: 4,
      slidesPerView: 5,
      // centeredSlides : true,
      // watchSlidesProgress : true,
      observeParents: true,
      observer: true,
      // direction:"vertical"
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })
  },
  methods: {
    handleHot (id) {
      // 编程式导航
      // location.href="#/center"

      // console.log(this.$router)
      // this.$router.push(`/detail/${id}`) //detail ,传参， detail 接收参数，请求数据，

      this.$router.push({
        name: 'hot', // 6-动态路由
        params: {
          myid: id
        }
      })
    }
  }

}
</script>
<style lang="scss" scoped>
           img{
                   width:50px;
           }
           p{
               font-size: 10px;
               color: #999;
           }
           .swiper-slide{
               text-align: center;
               font-size: 8px;
               white-space:nowrap;
           }
           *{
               margin: 0;
               padding: 0;
           }
</style>
