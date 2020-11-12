<template>
  <div>
        <tabbar></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'
import '@/assets/iconfont/iconfont.css'
export default {
  components: {
    tabbar
  }
}
</script>

<style lang="scss" scoped>
  *{
    margin:0;
    padding: 0;
  }
  html,body{
    height: 100%;
  }
  section{
    margin-bottom: 50px;
  }
</style>
