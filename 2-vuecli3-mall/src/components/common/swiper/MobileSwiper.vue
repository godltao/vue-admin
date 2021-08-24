<template>
  <swiper>
    <swiper-item v-for="(item, id) in banners" :key="id" draggable="false">
      <a draggable="false">
        <img :src="item.image" :data-href="item.link" alt="" draggable="false">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from './Swiper'
import SwiperItem from './SwiperItem'

export default {
  name: "MobileSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {}
}
</script>

<style scoped>

</style>
