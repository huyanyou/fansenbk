<script lang="ts" setup>
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>

<template>
  <div>
    <h2>
      全渠道或 挨打我是大三的
      <span>与带哦风暴腐败缩放八宝饭分八宝饭考虑</span>
    </h2>
    <p>
      大幅巴士咖啡吧风暴金卡少部分精氨酸v大巴司机被点击萨博附近啊撒v附近啊v时间
    </p>
    <ARow>
      <ACol :flex="1">
        <swiper-container
          ref="test"
          :grid="{
            rows: 1,
          }"
          :space-between="70"
          slides-per-view="auto"
          :speed="500"
          :css-mode="false"
        >
          <swiper-slide>
            <img
              style="width: 100%; height: 200px"
              src="@/assets/img/test.jpg"
              alt=""
              srcset=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              style="width: 100%"
              src="@/assets/img/test.jpg"
              alt=""
              srcset=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              style="width: 100%"
              src="@/assets/img/test.jpg"
              alt=""
              srcset=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              style="width: 100%"
              src="@/assets/img/test.jpg"
              alt=""
              srcset=""
            />
          </swiper-slide>
        </swiper-container>
      </ACol>
    </ARow>
    <ARow :gutter="24">
      <ACol :span="8">
        <div class="social">
          <h1>社交媒体营销</h1>
          <p>
            在公众号、直播、短视频、小红书等场景开展品牌营销，让内容与商品直接关联，实现流量到销量的无缝转化
          </p>
          <ALink>dgbiasdgiasdsi</ALink>
        </div>
      </ACol>
      <ACol :span="8">
        <div class="social">
          <h1>社交媒体营销</h1>
          <p>
            在公众号、直播、短视频、小红书等场景开展品牌营销，让内容与商品直接关联，实现流量到销量的无缝转化
          </p>
          <ALink>dgbiasdgiasdsi</ALink>
        </div>
      </ACol>
      <ACol :span="8">
        <div class="social">
          <h1>社交媒体营销</h1>
          <p>
            在公众号、直播、短视频、小红书等场景开展品牌营销，让内容与商品直接关联，实现流量到销量的无缝转化
          </p>
          <ALink>dgbiasdgiasdsi</ALink>
        </div>
      </ACol>
    </ARow>
  </div>
</template>

<style scoped lang="scss">
.social {
  border-top: #040505 solid 3px;
}
</style>
