<script lang="ts" setup>
import { Swiper as SwiperContainer, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { FreeMode, Navigation, Thumbs, Scrollbar, Pagination } from "swiper";
let activeKey = $ref("1");
const modules = [FreeMode, Navigation, Thumbs];
</script>

<template>
  <h1>test</h1>
  <ARow :gutter="24" justify="center">
    <ACol :span="4">
      <ATabs
        :active-key="activeKey"
        ref="aTabsRef"
        class="my-tabs"
        trigger="hover"
        :animation="true"
        default-active-key="2"
      >
        <ATabPane key="1" title="Tab 1"> Content of Tab Panel 1 </ATabPane>
        <ATabPane key="2" title="Tab 2"> Content of Tab Panel 2 </ATabPane>
        <ATabPane key="3">
          <template #title>Tab 3</template>
          Content of Tab Panel 3
        </ATabPane>
      </ATabs>
    </ACol>
  </ARow>
  <ARow>
    <ACol :flex="1">
      <swiper-container
        :grid="{
          rows: 1,
        }"
        :modules="modules"
        slides-per-view="auto"
        :speed="500"
        :loop="true"
        :css-mode="false"
      >
        <swiper-slide>
          <ARow>
            <ACol :flex="1">
              <img
                style="width: 100%"
                src="@/assets/img/test.jpg"
                alt=""
                srcset=""
              />
            </ACol>
            <ACol :flex="1">text</ACol>
          </ARow>
        </swiper-slide>
        <swiper-slide>
          <ARow>
            <ACol :flex="1">
              <img
                style="width: 100%"
                src="@/assets/img/test.jpg"
                alt=""
                srcset=""
              />
            </ACol>
            <ACol :flex="1">text</ACol>
          </ARow>
        </swiper-slide>
        <swiper-slide>
          <ARow>
            <ACol :flex="1">
              <img
                style="width: 100%"
                src="@/assets/img/test.jpg"
                alt=""
                srcset=""
              />
            </ACol>
            <ACol :flex="1">text</ACol>
          </ARow>
        </swiper-slide>
      </swiper-container>
    </ACol>
  </ARow>
</template>

<style scoped lang="scss">
.my-tabs {
  background-color: aliceblue;

  :deep(.arco-tabs-nav::before) {
    background-color: unset;
  }

  :deep(.arco-tabs-content) {
    display: none;
  }
}
</style>
