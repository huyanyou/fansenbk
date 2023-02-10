<script lang="ts" setup>
const { title = "标题显示" } = defineProps<{
  title?: string;
}>();

const productRef = $ref<Element>();
let visible = $ref(false);
// onBeforeMount
/**
 * 监听是否出现在视图界面展示
 */
function initObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          console.log("进入视图");
          visible = true;
          observer.unobserve(el);
        }
      });
    },
    {
      root: document.querySelector(".__nuxt"),
      rootMargin: "0px",
      threshold: 0.5,
    }
  );
  observer.observe(productRef as Element);
}
onMounted(() => {
  nextTick(() => {
    // 监听是否出现在视图
    // initObserver()
  });
});
</script>

<template>
  <div class="product-introduce" ref="productRef">
    <ASpace direction="vertical" style="display: block">
      <ARow>
        <ACol :span="16">
          <!-- <Transition name="homeLeft"> -->
          <!-- v-show="visible" -->
          <div class="product-box" ref="productImgRef">
            <div class="product-img"></div>
          </div>
          <!-- </Transition> -->
        </ACol>
        <ACol :span="8">
          <!-- <Transition name="homeRight"> -->
          <!-- v-show="visible" -->
          <div class="product-box product-detail">
            <h1 class="title">
              <slot name="title"> 标题显示2 </slot>
            </h1>
            <span class="desc">
              <slot name="desc">
                这里是库房一体化系统的介大四啊撒大三大四的大三大四的绍语句
                1231231232112312312312312312312312大四的啊撒大三的31313311231231231231231
              </slot>
            </span>
            <slot name="other"></slot>
          </div>
          <!-- </Transition> -->
        </ACol>
      </ARow>
    </ASpace>
  </div>
</template>

<style scoped lang="scss">
@import url("@/assets/css/produce.ant.scss");

.product-introduce {
  display: block;
  // 左右居中
  height: 778px;

  // 上下居中
  // display: flex;
  // align-items: center

  .arco-space {
    max-width: 1366px;
    margin: auto auto;
    height: 100%;

    :deep(.arco-space-item) {
      height: 100%;
    }

    :deep(.arco-row) {
      height: 100%;
    }

    :deep(.arco-col) {
      height: 100%;
    }
  }
}

.product-detail {
  width: 80%;
  margin: auto auto;

  .title {
    margin-bottom: 50px;
  }

  .desc {
    font-size: 16px;
    font-weight: normal;
    //文本溢出换行
    // overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }
}

.product-box {
  // max-width: 326px;
  // 溢出文字向下
  text-align: left;
  // 上下居中
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  // 文本溢出向下
  // overflow: hidden;
  text-overflow: ellipsis;

  h1 {
    // margin-top: 290px;
  }

  .desc {
    font-size: 16px;
    font-weight: normal;
  }
}

.product-img {
  /**
    style="height: 500px;width: 888.89px;background-color: #D8D8D8;border-radius: 5px;" */
  height: 500px;
  max-width: 888.89px;
  background-color: #d8d8d8;
  border-radius: 5px;
}
</style>
