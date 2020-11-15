<template>
    <div>
        <div v-for="(item,index) in this.info" :key="index" style="height:400px;background:white;margin-bottom:10px;margin-top:10px" >
            <div>
                <img :src="item.images" style="width:100%"/>
                <p>{{item.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import jsonp from 'jsonp'
export default {
  data () {
    return {
      info: []
    }
  },
  mounted () {
    jsonp(`https://yapi.tuwan.com/Content/getContentApi/?id=${this.$route.params.myid}=_jsonppbn1s5ti4g`, '', (err, res) => {
      if (err) {
        // console.log(err)
      } else {
        this.info = res.dynamiclist.data
        console.log(this.info)
      }
    })
  }
}
</script>
