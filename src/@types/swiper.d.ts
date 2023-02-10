import type Swiper from "swiper";

export type MySwiperEvents = {
  detail: Swiper[];
  srcElement: {
    swiper: Swiper;
  };
  target: {
    swiper: Swiper;
  };
};
export interface HTMLSwiperElement extends HTMLElement {
  swiper: Swiper;
}
