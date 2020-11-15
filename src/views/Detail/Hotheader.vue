<template>
    <ul>
        <router-link :to="'/hot/'+id+'/fuwu'" tag="li" active-class="active">服务</router-link>
        <router-link :to="'/hot/'+id+'/dongtai'" tag="li" active-class="active">动态</router-link>
    </ul>
</template>

<script>
export default {

  props: ['gameInfo', 'id']
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
    color:red;
  }
</style>
