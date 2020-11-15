<template>
    <div class="box" style="background:#fff;margin-bottom:1px">
        <img src="https://res.tuwan.com/templet/play/index/images/yuewanlogo3.png" />
        <div class="right">
                <van-search v-model="value" style="height:50px;width:180px;" placeholder="请输入搜索关键词" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    img{
        float: left;
        width: 110px;
        height: 30px;
        display: block;
        margin: 10px;
    }
    .box{
        height:50px;
        width: 100%;
    }
    .right{
        float: right;
    }
</style>

<script>
import Vue from 'vue'
import { Search } from 'vant'

Vue.use(Search)
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
