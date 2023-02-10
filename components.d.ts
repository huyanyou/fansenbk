declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    "swiper-container": typeof import("swiper/vue/swiper-vue")["Swiper"];
    "swiper-slide": typeof import("swiper/vue/swiper-vue")["SwiperSlide"];
  }
}
export {};
