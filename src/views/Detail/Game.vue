<template>
    <div v-if="datalist.length">
       <hot-swiper :arry="datalist"  >
       </hot-swiper>
       <game-header></game-header>
    </div>
</template>
<script>
import jsonp from 'jsonp'
import hotSwiper from '@/views/Detail/HotSwiper'
import Vue from 'vue'
import { Toast } from 'vant'
import gameHeader from '@/views/Detail/Game/Gameheader'

Vue.use(Toast)
export default {
  mounted () {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      overlay: true,
      duration: 0 // 值为 0 时，toast 不会消失
    })
    // console.log(111111111111111111)
    jsonp(`https://yapi.tuwan.com/Content/getContentApi/?id=${this.$route.params.myid}=_jsonppbn1s5ti4g`, '', (err, res) => {
      if (err) {
        // console.log(err)
      } else {
        this.datalist = res.dyarr
        Toast.clear()
        console.log(res, 1111111)
        this.game = res.gameinfo
      }
    })
  },
  components: {
    hotSwiper,
    gameHeader
  },
  data () {
    return {
      datalist: [],
      game: []
    }
  }
}
</script>
