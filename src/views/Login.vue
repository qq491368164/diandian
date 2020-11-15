<template>
  <div class="box">
    <div class="log">
        <h3>登陆账号</h3>
        <p>请登录点点约玩账号</p>
    </div>
    <input type="text" placeholder="请输入账号"/>
    <input type="text" placeholder="请输入密码"/>
    <!-- <button @click="handleLogin">login</button> -->
    <van-button round type="info" size="large" color="#ff626b" @click="handleLogin" style="margin-bottom:15px">立即登录</van-button>
    <van-button round type="info" size="large" color="#E8E8E8" @click="handlere">返回上一页</van-button>
  </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'vant'
Vue.use(Button)

export default {
  methods: {
    handleLogin () {
      localStorage.setItem('token', '后端返回的加密后的token字段')
      this.$router.push('/center')
    },
    handlere () {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
    *{
        margin: 0;
        padding: 0;
    }
    html,body{
        height: 100%;
    }
    .box{
        background: white;
        height: 590px;
        width: 100%;
        overflow: hidden;
        input{
            border: none;
            width: 80%;
            border-bottom: 1px solid #999;
            margin: 30px;
        }
        .log{
            margin: 20px;
            h3{
                color: black;
                font-weight: 100;
                font-size: 30px;
                margin: 5px;
            }
            p{
                color: #333;
                margin: 5px;
            }
        }
    }
</style>
