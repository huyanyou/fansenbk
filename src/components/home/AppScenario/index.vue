<script lang="ts" setup>
import { IconWechat } from "@arco-design/web-vue/es/icon";
// const arcoSpaceRef = $ref<>()
// arco
// const cardIndex = []

const data = $ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

const swipeMarginRight = $ref(155);
const swipeLiWidth = $ref(350);
let swipeWidth = $ref(0);

// 记录开始鼠标点击开始距离
const swipeUlDomRef = $ref<HTMLUListElement>();
const swipeSlideRef = $ref<HTMLDivElement>();
let nowLeft = $ref(0);
let back = $ref(0);
let startX = $ref(0);
let isClock = $ref(true);
const mousedown = (e: MouseEvent) => {
  startX = e.clientX;
  isClock = false;
};
const mousemove = (e: MouseEvent) => {
  if (isClock) {
    return;
  }
  const moveX = e.clientX - startX;
  startX = e.clientX;
  if (moveX <= 0) {
    nowLeft += moveX;
  } else {
    if (Math.abs(nowLeft) < 2 || nowLeft === 0) {
      nowLeft = back / 2 + moveX;
    } else {
      nowLeft += moveX;
    }
  }
  if (nowLeft < back + swipeWidth * 3 || nowLeft === back + swipeWidth * 3) {
    nowLeft = 0;
  } else if (nowLeft > 0) {
    nowLeft = back / 2 + moveX;
  }
  swipeUlDomRef!.style.left = nowLeft + "px";
};
const mouseup = (e: MouseEvent) => {
  removeAnimation();
  startAnimation();
  isClock = true;
  nowLeft = Number(swipeUlDomRef!.style.left.replace("px", ""));
  nowLeft = -(swipeWidth * Math.round(Math.abs(nowLeft) / swipeWidth));
  swipeUlDomRef!.style.left = nowLeft + "px";
  const timeout = setTimeout(() => {
    removeAnimation();
    clearTimeout(timeout);
  }, 500);
};
const mouseout = (e: MouseEvent) => {};

const next = () => {
  removeAnimation();
  nowLeft -= swipeWidth;
  const time = setTimeout(() => {
    startAnimation();
    swipeUlDomRef!.style.left = nowLeft + "px";
    const timeout = setTimeout(() => {
      removeAnimation();
      if (nowLeft === back / 2) {
        nowLeft = 0;
        swipeUlDomRef!.style.left = nowLeft + "px";
      }
      clearTimeout(timeout);
    }, 500);
    clearTimeout(time);
  }, 100);
};

const startAnimation = () => {
  swipeUlDomRef!.style.transition = "left 0.5s";
};
const removeAnimation = () => {
  swipeUlDomRef!.style.transition = "none";
};

const prev = () => {
  removeAnimation();
  if (nowLeft === 0) {
    nowLeft = back / 2;
    swipeUlDomRef!.style.left = nowLeft + "px";
  }
  nowLeft += swipeWidth;
  const time = setTimeout(() => {
    startAnimation();
    swipeUlDomRef!.style.left = nowLeft + "px";
    const timeout = setTimeout(() => {
      removeAnimation();
      swipeUlDomRef!.style.left = nowLeft + "px";
      clearTimeout(timeout);
    }, 500);
    clearTimeout(time);
  }, 100);
};

//  描述列表  联系电话
const descriptionDatas = [
  {
    label: "联系电话:",
    value: "Socrates",
  },
];
const descriptionDataOne = [
  {
    label: "公司地址:",
    value: "123-1234-1234",
  },
];
onMounted(() => {
  // 获取ul下li标签的总宽度
  back = -(
    swipeUlDomRef!.children.length *
    ((swipeUlDomRef?.children[0] as HTMLLIElement)!.offsetWidth +
      swipeMarginRight)
  );
  swipeWidth =
    (swipeUlDomRef?.children[0] as HTMLLIElement)!.offsetWidth +
    swipeMarginRight;
});
</script>

<template>
  <div>
    <ASpace ref="arcoSpaceRef" direction="vertical" style="display: block">
      <ARow>
        <ACol :span="12">
          <div>
            <span class="app-title">应用场景</span>
          </div>
        </ACol>
        <ACol :span="12">
          <div class="left-or-right">
            <AButton size="large" @click="prev">
              <template #icon>
                <IconLeft />
              </template>
            </AButton>
            <AButton size="large" @click="next">
              <template #icon>
                <IconRight />
              </template>
            </AButton>
          </div>
        </ACol>
      </ARow>
      <!-- 滑动轮播图 -->
      <ARow>
        <ACol :span="24">
          <div
            class="swipe-slide"
            ref="swipeSlideRef"
            @mouseup="mouseup"
            @mouseout="mouseout"
            @mousedown="mousedown"
            @mousemove="mousemove"
          >
            <div class="inner">
              <ul ref="swipeUlDomRef">
                <li v-for="(item, index) in data" :key="item">
                  <ACard>
                    Card content{{ index }} <br />
                    Card content
                  </ACard>
                </li>
                <li v-for="(item, index) in data" :key="item">
                  <ACard>
                    Card content{{ index }} <br />
                    Card content
                  </ACard>
                </li>
              </ul>
            </div>
          </div>
        </ACol>
      </ARow>
      <!-- 产品介绍底部 -->
      <!-- <ARow class="bottom-content">
                <ACol :span="3">
                    <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList>
                </ACol>
                <ACol :span="3">
                    <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList>
                </ACol>
                <ACol :span="3">
                    <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList>
                </ACol>
                <ACol :span="3">
                    <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList>
                </ACol>
                <ACol :span="3">
                    <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList>
                </ACol>
                <ACol :span="3">
                    <AList>
                        <template #header>
                            硬件产品
                        </template>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                        <AListItem>
                            <ALink>产品名字</ALink>
                        </AListItem>
                    </AList>
                </ACol>
                <ACol :span="3"></ACol>
                <ACol :span="3"></ACol>
            </ARow> -->

      <!-- 联系方式 -->
      <!-- <ARow class="contact-info">
                <ACol :span="20">
                    <ADescriptions :data="descriptionDatas" layout="inline-horizontal" />
                    <ADescriptions class="contact-two" :data="descriptionDataOne" layout="inline-horizontal" />
                </ACol>
                <ACol :span="4">
                    <ADescriptions class="wechat-icon" layout="inline-vertical">
                        <ADescriptionsItem>
                            <template #label>
                                <div style="float: right;width: 100%; text-align: right;color: black;">
                                    微信公众号
                                </div>
                            </template>
                            <div style="float: right;width: 100%; text-align: right;margin-top: 10px;color: black;">
                                <IconWechat :size="30" />
                            </div>
                        </ADescriptionsItem>
                    </ADescriptions>
                </ACol>
            </ARow> -->
    </ASpace>

    <!-- <div class="produce-content" style="height: 400px;width: 100%;">
            <ACarousel :style="{ width: '600px', height: '240px' }">
                <ACarouselItem>
                    <ACard title="Arco Card1" hoverable>
                        Card content <br />
                        Card content
                    </ACard>
                    <ACard title="Arco Card1" hoverable>
                        Card content <br />
                        Card content
                    </ACard>
                    <ACard title="Arco Card1" hoverable>
                        Card content <br />
                        Card content
                    </ACard>
                </ACarouselItem>
            </ACarousel>
        </div> -->
  </div>
</template>

<style scoped lang="scss">
// @import url('@/assets/home/index.scss');

.arco-space {
  max-width: 1366px;
  margin: auto auto;
  // min-width: 1366px;
}

.app-title {
  font-size: 28px;
  font-weight: bold;
  color: #3d3d3d;
}

.left-or-right {
  text-align: right;
  display: flex;
  // 内容靠右面
  justify-content: flex-end;

  .arco-btn {
    // --primary-5: 255 255 255;
    // --primary-6: 255 255 255;
    color: black;
  }
}

.swipe-slide {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  -moz-user-select: none;
  /*火狐*/
  -webkit-user-select: none;
  /*webkit浏览器*/
  -ms-user-select: none;
  /*IE10*/
  -khtml-user-select: none;
  /*早期浏览器*/
  user-select: none;
  z-index: -1;

  .inner {
    position: relative;
    width: 5000px;
    height: 100%;

    ul {
      height: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      position: absolute;
      display: block;
      left: 0;
      width: -moz-fit-content;
      width: -webkit-fit-content;
      width: fit-content;
      margin: 0 0;
      // 宽度随li标签的宽度和数量而定

      li {
        height: 100%;
        float: left;
        margin-right: v-bind('swipeMarginRight + "px"');
        width: v-bind('swipeLiWidth + "px"');
        display: list-item;
      }
    }
  }
}

.bottom-content {
  :deep(.arco-list-header) {
    border-bottom: 0;
  }

  :deep(.arco-list) {
    border: 0;
    --link-6: rgba(61, 61, 61, 0.81);
  }

  :deep(.arco-list-content > .arco-list-item) {
    border-bottom: 0;
  }
}

.contact-info {
  margin-top: 40px;
  margin-bottom: 40px;
}

.contact-two {
  margin-top: 20px;
}

.wechat-icon {
  :deep(
      div
        > table
        > tbody
        > tr
        > td
        > div.arco-descriptions-item-label.arco-descriptions-item-label-inline
    ) {
    text-align: right;
  }
}
</style>
