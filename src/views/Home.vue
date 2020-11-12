<template>
    <div>
        <home-header></home-header>
        <homeSwiper>
            <div class="swiper-slide" v-for="item in this.datalist.gamelist" :key="item.dtid">
                <img :src="item.images">
                <p>{{item.gamename}}</p>
            </div>
        </homeSwiper>
        <home-detail>
            <ul>
                <li v-for="item in this.datalist.QuickPlay" :key="item.id">
                    <img :src="item.imgurl">
                    <p>{{item.nickname}}</p>
                    <p>{{item.price}}元/{{item.typeflag}}</p>
                </li>
            </ul>
        </home-detail>
        <div v-if="this.datalist">
            <home-game>
            </home-game>
        </div>
      Home
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
           }
           *{
               margin: 0;
               padding: 0;
           }
</style>
