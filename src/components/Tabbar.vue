<template>
    <div>
        <ul>
            <router-link to="/home" tag="li" active-class="active">
              <i class="iconfont icon-electronics"></i>
              <span>首页</span>
            </router-link>
            <router-link to="/room" tag="li" active-class="active">
              <i  class="iconfont icon-comments"></i>
              <span>聊天室</span>
            </router-link>
            <router-link to="/center" tag="li" active-class="active">
              <i class="iconfont icon-account"></i>
              <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
  div{
    position: fixed;
    z-index: 100;
    bottom: 0px;
    left:0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    background:white;
    text-align: center;
    ul{
      display: flex;
      li{
        flex:1;
        display: flex;
        flex-direction: column;
        i{
          font-size:20px;
        }
        span{
          font-size:12px;
        }
      }
    }
  }
  .active{
    color: rgb(249, 34, 70);
  }

</style>
