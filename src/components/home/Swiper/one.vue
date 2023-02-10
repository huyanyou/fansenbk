<script lang="ts" setup>
import { FreeMode } from "swiper";
import { HTMLSwiperElement, MySwiperEvents } from "~~/src/@types/swiper";
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/vue";
import "swiper/css";
import type Swiper from "swiper/types/swiper-class";
// MySwiperEvents.
let swiperContainerRef = $ref<Swiper>();
const modules = [FreeMode];
let activeImgIndex = $ref(0);
// 轮播图改变获取当前的index
const activeIndexChange = (swiper: Swiper) => {
  activeImgIndex = swiper.realIndex;
  console.log("activeIndexChange", swiper);
};

const getSwiper = (swiper: Swiper) => {
  swiperContainerRef = swiper;
};

/**
 * 点击选择正确的img
 */
const clickImg = (index: number) => {
  // activeImgIndex = index
  swiperContainerRef!.slideTo(index);
};
onMounted(() => {});
</script>

<template>
  <ARow>
    <ACol :flex="1" style="flex-shrink: 1">
      <div class="header-introduce">
        <h1>快速布局新零售<br />深挖全域业绩增长</h1>
        <p>
          有赞已帮助
          <span>539,178</span>
          个品牌<br />
          成功与
          <span>489,204,935</span>
          名消费者建立可持续客户关系
        </p>
        <div>
          <AButton type="primary" size="large">免费使用</AButton>
          <AButton type="primary" style="margin-left: 20px" size="large"
            >了解详情</AButton
          >
        </div>
        <p>或咨询电话详情:31231231231312</p>
      </div>
    </ACol>
    <ACol :flex="1" class="img-container">
      <SwiperContainer
        @swiper="getSwiper"
        :modules="modules"
        id="swiper-img"
        @slide-change="activeIndexChange"
        :space-between="30"
        :looped-slides="1"
        :loop="true"
        :slides-per-view="1"
        :observer="true"
        :observe-parents="true"
        :speed="500"
        :css-mode="false"
      >
        <SwiperSlide>
          <img
            class="img-content"
            src="@/assets/img/test.jpg"
            alt=""
            srcset=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            class="img-content"
            src="@/assets/img/test.jpg"
            alt=""
            srcset=""
          />
          <!-- <div>2</div> -->
        </SwiperSlide>
        <SwiperSlide>
          <img
            class="img-content"
            src="@/assets/img/test.jpg"
            alt=""
            srcset=""
          />
          <!-- <div>3</div> -->
        </SwiperSlide>

        <!-- <swiper-slide style="height: unset;">
                    <img class="img-content" src="@/assets/img/test.jpg" alt="" srcset="">
                </swiper-slide>
                <swiper-slide style="height: unset;">
                    <img class="img-content" src="@/assets/img/test.jpg" alt="" srcset="">
                </swiper-slide>
                <swiper-slide style="height: unset;">
                    <img class="img-content" src="@/assets/img/test.jpg" alt="" srcset="">
                </swiper-slide>
                <swiper-slide style="height: unset;">
                    <img class="img-content" src="@/assets/img/test.jpg" alt="" srcset="">
                </swiper-slide> -->
      </SwiperContainer>

      <ARow class="img-bottom">
        <ACol :flex="1" style="z-index: 3">
          <ARow>
            <ACol :span="8" class="img-text"> 啥都好的海鸥 </ACol>
            <ACol :span="4"></ACol>
            <ACol :span="4">
              <img
                @click="clickImg(0)"
                :class="{
                  'active-img': activeImgIndex === 0 || activeImgIndex === 4,
                }"
                src="@/assets/img/test.jpg"
                alt=""
                srcset=""
                style="
                  width: 60px;
                  height: 60px;
                  border-radius: var(--border-radius-medium);
                "
              />
            </ACol>
            <ACol @click="clickImg(1)" :span="4">
              <img
                :class="{
                  'active-img': activeImgIndex === 1,
                }"
                src="@/assets/img/test.jpg"
                alt=""
                srcset=""
                style="
                  width: 60px;
                  height: 60px;
                  border-radius: var(--border-radius-medium);
                "
              />
            </ACol>
            <ACol @click="clickImg(2)" :span="4">
              <img
                :class="{
                  'active-img': activeImgIndex === 2,
                }"
                src="@/assets/img/test.jpg"
                alt=""
                srcset=""
                style="
                  width: 60px;
                  height: 60px;
                  border-radius: var(--border-radius-medium);
                "
              />
            </ACol>
          </ARow>
        </ACol>
      </ARow>

      <!-- <div style="z-index: 2;">
                <div style="flex: 1;">
                    飞度 大三了的
                </div>
                <div style="flex: 1;">
                    <ARow :gutter="24">
                        <ACol :span="8">
                            <img src="@/assets/img/test.jpg" alt="" srcset="" style="width: 100% border-radius: 50%;">
                        </ACol>
                        <ACol :span="8">2</ACol>
                        <ACol :span="8">3</ACol>
                    </ARow>
                </div>
            </div> -->
    </ACol>
  </ARow>
</template>

<style scoped lang="scss">
.header-introduce {
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    color: #040505;
    font-weight: 600;
    white-space: pre-wrap;
    margin-bottom: 24px;
    font-size: 52px;
    font-weight: 500;
    line-height: 68px;
  }

  p {
    font-size: 18px;
    margin-bottom: 64px;
    white-space: pre-wrap;
    line-height: 36px;
  }
}

.img-container {
  border-radius: var(--border-radius-medium);
  overflow: hidden;
  position: relative;
  // height: 600px;

  .img-bottom {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: calc(100% - 73px);
    display: flex;
    height: 110px;
    padding: 0 28px 0 45px;
    align-items: center;
    justify-content: space-between;
    z-index: 1;

    ::before {
      // 高斯模糊
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: hsla(0, 0%, 100%, 0.3);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
    }

    .img-text {
      // 上下居中
      margin: auto 0;
    }

    .active-img {
      opacity: 0;
    }
  }

  :deep(.swiper-backface-hidden swiper-slide) {
  }

  :deep(.swiper-slide) {
    height: 100% !important;
  }
}

.img-content {
  border-radius: var(--border-radius-medium);
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  // height: v-bind('imgHeight === 0 ? "" : imgHeight + "px"');
}
</style>
