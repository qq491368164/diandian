<template>
    <div class="swiper-container">
          <div class="swiper-wrapper">
              <slot></slot>
          </div>
    <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
    .swiper-container{
        height: 90px;
    }
</style>
