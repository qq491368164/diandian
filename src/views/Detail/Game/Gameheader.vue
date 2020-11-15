<template>
    <div>
      <header>
        <ul>
            <li  @click=" isWhich='gamefuwu' "  :class="isWhich==='gamefuwu'?'active' :''">服务</li>
            <li  @click=" isWhich='gamedongtai' " :class="isWhich==='gamedongtai'?'active' :''">动态</li>
        </ul>
      </header>

      <keep-alive>
        <component :is="isWhich"></component>
      </keep-alive>
    </div>
</template>

<script>
// import Vue from 'vue'
import gamedongtai from '@/views/Detail/Game/gamedongtai'
import gamefuwu from '@/views/Detail/Game/gamefuwu'
export default {
  components: {
    gamefuwu,
    gamedongtai
  },
  data () {
    return {
      isWhich: 'gamefuwu',
      active: 'active'
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
    ul{
    display: flex;
    height: 50px;
    line-height: 50px;
    text-align: center;
    z-index:100;
    position: sticky; //粘性定位
    top: 0px;
    background-color: white;
        li{
      flex:1
        }
    }
    .active{
        color: red;
    }
</style>
