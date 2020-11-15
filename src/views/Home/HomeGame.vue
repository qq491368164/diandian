<template>
    <div>
        <ul v-for="(item,index) in this.datalist.hot" :key="index"  style="background:#fff;margin-top:10px;margin-bottom:10px;padding-top:10px;padding-bottom:10px">
          <div style="text-align:center;color: rgb(249, 34, 70);padding:1px">{{item.title}}</div>
          <div class="people">
            <li v-for="data in item.data" :key="data.id" @click="handleClick(data.id)">
                <div class="actor">
                  <img :src="data.imgurl"/>
                  <p>{{data.nickname}}</p>
                  <p style="color: rgb(249, 34, 70);">{{data.price}}元/{{data.typeflag}}</p>
                </div>
            </li>
          </div>
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
  },
  methods: {
    handleClick (id) {
      // 编程式导航
      // location.href="#/center"

      // console.log(this.$router)
      // this.$router.push(`/detail/${id}`) //detail ,传参， detail 接收参数，请求数据，

      this.$router.push({
        name: 'game', // 6-动态路由
        params: {
          myid: id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
  .people{
    display: flex;
    list-style: none;
    justify-content: space-around;
    font-size: 10px;
    color: #999;
    background: white;
    text-align: center;
    li{
      flex: 1;
      img{
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
