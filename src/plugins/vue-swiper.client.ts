import { register } from "swiper/element/bundle";
// import { Swiper,SwiperSlide } from "swiper/vue/swiper-vue"

export default defineNuxtPlugin((nuxtApp) => {
  register();
  // 注册组件
  // nuxtApp.vueApp.component('Swiper', Swiper)
  // nuxtApp.vueApp.component('swiper-slide', SwiperSlide)
});
