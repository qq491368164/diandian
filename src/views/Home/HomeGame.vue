<template>
    <div>
        <ul v-for="(item,index) in this.datalist.hot" :key="index">
          <li v-for="data in item.data" :key="data.id">
              <div class="actor">
                <img :src="data.imgurl"/>
                <p>{{data.nickname}}</p>
              </div>
          </li>
        </ul>
    </div>
</template>

<script>
import jsonp from 'jsonp'
export default {
  data () {
    return {
      datalist: []
    }
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
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
  ul{
    display: flex;
    list-style: none;
    justify-content: space-around;
               font-size: 10px;
               color: #999;
    li{
      flex: 1;
      img{
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
