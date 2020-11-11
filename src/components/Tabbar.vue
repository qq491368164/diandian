<template>
    <div>
        <ul>
            <li>首页<i class="iconfont icon-electronics"></i></li>
            <li>聊天室<i class="iconfont icon-comments"></i></li>
            <li>我的<i class="iconfont icon-account"></i></li>
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

</style>
