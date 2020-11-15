<template>
    <div>
        <!-- <div v-for="(item,index) in game" :key="index">
            <img :src="item.randimg" />
            <p>{{item.dtidname}}</p>
        </div> -->
        <!-- <van-tabs v-model="active">
            <van-tab title="标签 1"  v-for="(item,index) in game" :key="index">
                <div  v-html="item.desc">

                </div>
            </van-tab>
        </van-tabs>     -->
    <div class="swiper-container  game">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(item,index) in game" :key="index" style=""  @click="changes(index)" :class="{active:index == num}">
                <img :src="item.randimg" />
                <p>{{item.dtidname}}</p>
            </li>
        </ul>
    </div>
        <div v-for="(item,index) in game" v-show="index==num" :key="index">
            <h3>{{item.dtidname}}</h3>
            <p>接单{{item.total/1}}次</p>
        </div>
        <div v-for="(item,index) in game" v-show="index==num" v-html="item.desc" style="font-size:8px;background:white" :key="index"></div>
        <!-- <keep-alive>
            <component :is="isWhich"></component>
        </keep-alive> -->

    </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
import jsonp from 'jsonp'
Vue.use(Tab)
Vue.use(Tabs)
export default {
  mounted () {
    jsonp(`https://yapi.tuwan.com/Content/getContentApi/?id=${this.$route.params.myid}=_jsonppbn1s5ti4g`, '', (err, res) => {
      if (err) {
        // console.log(err)
      } else {
        this.game = res.gameinfo
        this.$nextTick(() => {
          new Swiper('.game', {
            // loop: true,
            slidesPerView: 3,
            // centeredSlides: true,
            // spaceBetween: 10,
            // observeParents: true,
            // observer: true,
            spaceBetween: 20
          })
        })
      }
    })
  },
  data () {
    return {
      game: [],
      num: 0
    }
  },
  methods: {
    changes (key) {
      this.num = key
    }
  }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    ul{
        li{
            background: white;
            margin-top: 10px;
            margin-bottom: 10px;
            padding-top:3px;
            // padding-left: 5px;
            // padding-right: 5px;
            border-radius: 7px;
            color: #f92246;
            font-size: 8px;
        }
    }
    img{
        height: 80px;
        width: 100px;
        border-radius: 7px;
        display: block;
    }
</style>
