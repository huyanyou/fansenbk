<script lang="ts" setup>
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { FreeMode, Navigation, Thumbs, Scrollbar, Pagination } from "swiper";
const modules3 = [Pagination];
</script>

<template>
  <div style="max-width: 1366px; margin: 0 auto">
    <h2>
      <span>大巴客服毕卡索本菲卡设</span><br />
      "安抚那里芬兰法拉盛泛滥了"
    </h2>
  </div>

  <ARow :gutter="24" style="margin-left: 0; margin-right: 0">
    <!-- <ACol :flex="1"></ACol>
                <ACol :flex="1">2</ACol>
                <ACol :flex="1">3</ACol>
                <ACol :flex="1">4</ACol> -->
    <ACol
      :span="24"
      style="padding-left: 0 !important; padding-right: 0 !important"
    >
      <div style="max-width: 100%; margin: 0 auto">
        <ClientOnly>
          <swiper-container
            style="width: 100%"
            :slides-perView="1"
            :space-between="10"
            :pagination="{
              clickable: true,
            }"
            :breakpoints="{
              '640': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '768': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '1024': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }"
            :modules="modules3"
            class="mySwiper"
          >
            <swiper-slide>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
              <div>
                <h1>行之有效的文档资源</h1>
                <p>
                  有赞 10
                  年服务数百万商家，沉淀了大量行之有效的案例和方法，提供您开展业务必需的营销和业务建议
                </p>
                <ul style="list-style-type: none">
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                </ul>
                <ALink> 探索在线文档 </ALink>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div>
                <h1>行之有效的文档资源</h1>
                <p>
                  有赞 10
                  年服务数百万商家，沉淀了大量行之有效的案例和方法，提供您开展业务必需的营销和业务建议
                </p>
                <ul style="list-style-type: none">
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                </ul>
                <ALink> 探索在线文档 </ALink>
              </div>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
            </swiper-slide>
            <swiper-slide>
              <div>
                <h1>行之有效的文档资源</h1>
                <p>
                  有赞 10
                  年服务数百万商家，沉淀了大量行之有效的案例和方法，提供您开展业务必需的营销和业务建议
                </p>
                <ul style="list-style-type: none">
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                </ul>
                <ALink> 探索在线文档 </ALink>
              </div>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
            </swiper-slide>
            <swiper-slide>
              <div>
                <h1>行之有效的文档资源</h1>
                <p>
                  有赞 10
                  年服务数百万商家，沉淀了大量行之有效的案例和方法，提供您开展业务必需的营销和业务建议
                </p>
                <ul style="list-style-type: none">
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                  <li>
                    <ALink>teststst</ALink>
                  </li>
                </ul>
                <ALink> 探索在线文档 </ALink>
              </div>
              <!-- <img src="@/assets/img/test.jpg" alt="" srcset=""> -->
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </ACol>
  </ARow>
</template>

<style scoped lang="scss">
// .mySwiper2:deep(.swiper-slide) {
//     text-align: center;
//     font-size: 18px;
//     background: #fff;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }
</style>
