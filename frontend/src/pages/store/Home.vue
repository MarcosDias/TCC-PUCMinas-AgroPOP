<template>
  <div>

    <carousel :perPage="1" :autoplay="true">
      <slide v-for="(img, i) in imgs"
        :key="i">
        <img style="height: 100%;width: 100%;" :src="img">
      </slide>
    </carousel>

    <div style="height:300px;" />

  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'Home',
  components: {
    Carousel, Slide
  },
  data: () => ({
    imgs: [
      require('../../assets/imgs/banner1.jpg'),
      require('../../assets/imgs/banner2.jpg')
    ]
  })
}
</script>
