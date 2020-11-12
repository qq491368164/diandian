<template>
    <div>
       <hot-swiper :arry="datalist"  v-if="datalist.length">
       </hot-swiper>
    </div>
</template>
<script>
import jsonp from 'jsonp'
import hotSwiper from '@/views/Detail/HotSwiper'
export default {
  mounted () {
    jsonp(`https://yapi.tuwan.com/Content/getContentApi/?id=${this.$route.params.myid}=_jsonppbn1s5ti4g`, '', (err, res) => {
      if (err) {
        console.log(err)
      } else {
        this.datalist = res.dyarr
        console.log(this.datalist)
      }
    })
  },
  components: {
    hotSwiper
  },
  data () {
    return {
      datalist: []
    }
  }
}
</script>
