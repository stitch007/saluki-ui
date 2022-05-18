<template>
  <SaCarousel autoplay :show-arrow="false">
    <img class="carousel-img" src="https://image-1304160910.file.myqcloud.com/saluki-ui/carousel-1.jpg" alt="">
    <img class="carousel-img" src="https://image-1304160910.file.myqcloud.com/saluki-ui/carousel-2.jpg" alt="">
    <img class="carousel-img" src="https://image-1304160910.file.myqcloud.com/saluki-ui/carousel-3.jpg" alt="">
    <img class="carousel-img" src="https://image-1304160910.file.myqcloud.com/saluki-ui/carousel-4.jpg" alt="">
  </SaCarousel>
</template>

<style scoped>
.carousel-img {
  height: 220px;
  width: 100%;
  object-fit: cover;
}
</style>
