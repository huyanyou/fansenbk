<script lang="ts" setup>
import { GetLoginStatusApi, GetWxQrCodeApi } from "../utils/http";
import { WXCodeRes } from "../utils/http/type";

let visible = $ref(false);
let parenNodeShow = $ref(false);
const containRef = $ref<HTMLDivElement>();
const showDetail = () => {
  visible = true;
  parenNodeShow = true;
};
// 鼠标移动到遮罩层关闭抽屉
const moveCloseDetail = (event: MouseEvent) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
  if (elementUnderMouse?.className === "arco-drawer-mask") {
    visible = false;
  }
};
// 二维码
let qrCode = $ref<WXCodeRes>({
  subscribe_scene: "",
  image_url: "",
});
let height = $ref("");

let showScrool = $ref(false);

/**
 * 添加监听滚动,滚动大于100px显示返回向上
 */
function addScroolTop() {
  window.addEventListener("scroll", (event) => {
    document.documentElement.scrollTop > 100
      ? (showScrool = true)
      : (showScrool = false);
  });
}
/**
 * 过渡滚动到顶部
 */
function scroolTop() {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/**
 * 隐藏菜单栏时候的抽屉
 */
let menuVisible = $ref(false);
let openMenu = () => {
  menuVisible = true;
};
let closeMenu = () => {
  menuVisible = false;
};

onMounted(async () => {
  height = containRef?.clientHeight + "px";
  GetWxQrCodeApi()
    .then((res) => {
      qrCode = res.data;
      console.log("qrCode", qrCode);
      const timer = setInterval(() => {
        GetLoginStatusApi(qrCode.subscribe_scene)
          .then((loginRes) => {
            // console.log('token', res)
            if (loginRes.msg !== "用户登陆成功") return;
            localStorage.setItem("token", loginRes.data.token);
            localStorage.setItem(
              "userinfo",
              JSON.stringify(loginRes.data.user)
            );
            $fetch("/api/login", {
              method: "POST",
              body: JSON.stringify({
                token: loginRes.data.token,
                subscribe_scene: res.data.subscribe_scene,
              }),
            })
              .then((res) => {
                // 打开新的窗口
                window.open("/experience", "_self");

                console.log("res ssss", res);
              })
              .catch((err) => {
                console.log("err", err);
              });
            clearInterval(timer);
          })
          .catch((err) => {
            console.log("err", err);
          });
      }, 1000);
    })
    .catch((err) => {
      console.log("err", err);
    });
  addScroolTop();
});
</script>

<template>
  <div id="home">
    <!-- style="max-width: 1366px;" -->
    <div>
      <div class="header-affix">
        <APageHeader style="height: 72px" :show-back="false">
          <template #title>
            <img src="@/public/home/logo.png" alt="" srcset="" />
          </template>
          <template #subtitle>
            <AMenu
              mode="horizontal"
              style="height: 72px; max-width: 410px"
              @mouseenter="showDetail"
              class="header-btn min-display"
            >
              <AMenuItem key="0" class="menu-exper-text">产品介绍</AMenuItem>
              <AMenuItem key="1" class="menu-exper-text">案例介绍</AMenuItem>
              <AMenuItem key="2" class="menu-exper-text">关于我们</AMenuItem>
            </AMenu>
          </template>
          <template #extra>
            <AButton class="online-text min-display" type="primary"
              >在线体验</AButton
            >
            <AButton
              class="target-btn max-un-display"
              @click="openMenu"
              type="primary"
              >导航栏</AButton
            >
          </template>
        </APageHeader>
        <div
          v-show="parenNodeShow"
          id="parentNode"
          @mousemove="moveCloseDetail"
        ></div>
      </div>

      <!-- <iframe ref="yunIframeRef" src="https://www.720yun.com/t/50vk671h72y" frameborder="no" width="700" height="500">
        </iframe> -->
      <!-- <AAffix>
                <div v-show="parenNodeShow" id="parentNode" @mousemove="moveCloseDetail">
                </div>
            </AAffix> -->
      <!-- 官网首页产品介绍内容 -->
      <div ref="containRef" id="home-contont">
        <slot />
        <!-- <HomeAppScenario />
                <HomeAppLink />
                <HomeAppContactInfo /> -->

        <div
          class="top-scrool"
          :style="{
            opacity: showScrool ? '1' : '0',
          }"
          @click="scroolTop"
        >
          <!-- <icon-arrow-up /> -->
          <IconDoubleUp size="30" />
        </div>
        <div class="wechat-info">
          <APopover id="wechat-style" position="left">
            <div
              style="
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <IconWechat size="30" />
            </div>
            <template #content>
              <div class="wechat-scan">
                <h1>扫一扫</h1>
                <h4>在线为您提供服务</h4>
                <!-- <QRCodeVue3 value="简单二维码" /> -->
                <div ref="qrCodeRef">
                  <img
                    :src="qrCode.image_url"
                    width="200"
                    height="200"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div class="wechat-code"></div>
            </template>
          </APopover>
        </div>
        <div class="home-bottom">
          Copyright ©2020 - 2023 FeiDu Technology Rights
          Reserved.洛阳飞度智能科技有限责任公司 版权所有 豫ICP备1234567890号
        </div>
      </div>
    </div>
    <!-- <div id="menuNode" class="max-un-display" :class="{
            'menu-container': menuVisible
        }">
        </div> -->
    <!-- class="menuPhone" -->
    <ADrawer
      style="height: calc(100vh - 72px); top: 72px"
      width="100vw"
      :render-to-body="true"
      :visible="menuVisible"
      @cancel="closeMenu"
    >
    </ADrawer>
  </div>
  <ADrawer
    :header="false"
    @close="parenNodeShow = false"
    popup-container="#parentNode"
    placement="top"
    :visible="visible"
  >
    <div>
      <ASpace direction="vertical" :size="16" style="display: block">
        <ARow class="grid-demo">
          <ACol :span="12">
            <!-- <div>12 - 50%</div> -->
            <DrawerDetail />
          </ACol>
          <ACol :span="12">
            <div>12 - 50%</div>
          </ACol>
        </ARow>
      </ASpace>
    </div>
  </ADrawer>
</template>

<style scoped lang="scss">
#home {
  width: 100%;
  // overflow-x: overlay;
}

.header-affix {
  position: fixed;
  top: 0;
  width: 100%;
  // min-width: 1366px;
  z-index: 1001;
}

.arco-page-header {
  background-color: #ffffff;
  padding: 0 0;
  // 上下居中
  display: flex;
  align-items: center;
  box-shadow: 0 4px 24px rgb(0 0 0 / 6%);

  // 内容居中
  :deep(.arco-page-header-wrapper) {
    width: 1366px;
    margin: 0 auto;
  }

  // opacity: ;

  :deep(.arco-page-header-header) {
    width: 100%;
  }

  :deep(.arco-page-header-divider) {
    display: none;
  }

  :deep(.arco-page-header-main) {
    width: calc(100% - 127px);
  }

  :deep(.arco-page-header-subtitle) {
    width: calc(100% - 190px);
    color: black;
  }
}

.header-btn {
  .arco-btn {
    font-size: 16px;
    font-weight: 500;
  }

  :deep(.arco-btn-text) {
    // color: red;
    --primary-6: 00, 00, 00;
  }
}

.header-coll {
  display: none;
}

.menu-exper-text {
  --primary-6: 0, 0, 0;
  color: rgb(var(--primary-6));
  font-size: 16px;
  font-weight: 500;

  :deep(.arco-menu-selected-label) {
    display: none;
  }
}

.menu-exper-btn {
  // background-color: red;
  --primary-6: 255, 255, 255;

  background-color: rgb(var(--arcoblue-6)) !important;
  color: rgb(var(--primary-6)) !important;
  float: right;
}

.header-extra {
  .arco-btn {
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
  }
}

.home {
  // min-width: 1366px;
  max-width: 1366px;
}

#home-contont {
  :deep(div.product-introduce:nth-child(1)) {
    background-color: rgba(248, 249, 255, 1);
  }

  margin-top: 72px;
}

.contain {
  // min-width: 1366px;
  max-width: 1366px;

  // height: calc(100vh - 72px);
  overflow: scroll;
}

#parentNode {
  height: v-bind("height");
  width: 100vw;
  position: absolute;
  // top: 72px;
  overflow: hidden;
  z-index: 10001;
}

.arco-space {
  display: block;
}

.grid-demo .arco-col {
  height: 48px;
  line-height: 48px;
  color: var(--color-white);
  text-align: center;
}

.grid-demo .arco-col:nth-child(2n) {
  background-color: rgba(var(--arcoblue-6), 0.9);
}

.grid-demo .arco-col:nth-child(2n + 1) {
  background-color: var(--color-primary-light-4);
}

.home-bottom {
  text-align: center;
  height: 72px;
  width: 100%;
  background: #f9f9f9;
  box-shadow: 0px 4px 49px 9px rgba(0, 0, 0, 0.1);
  line-height: 72px;
}

.wechat-info {
  position: fixed;
  width: 56px;
  height: 56px;
  background-color: red;
  border-radius: 50%;
  // z-index: 2;
  top: 50%;
  display: flex;
  // 居中
  justify-content: center;
  align-items: center;
  right: 3%;
  top: 84vh;
}

.top-scrool {
  position: fixed;
  width: 56px;
  height: 56px;
  background-color: red;
  border-radius: 50%;
  // z-index: 2;
  top: 50%;
  display: flex;
  // 居中
  justify-content: center;
  align-items: center;
  right: 3%;
  top: 76vh;
  cursor: pointer;
  transition: opacity 0.5s;

  :hover {
    color: rgb(var(--primary-6));
  }
}

.wechat-scan {
  // position: absolute;
  width: 205.21px;
  height: 280px;
  background-color: #ffffff;
  border-radius: 10px;
  top: 50%;
  right: 100%;
  // transform: translateY(-50%);
  text-align: center;

  h1 {
    font-size: 16px;
    font-weight: normal;
  }

  h4 {
    font-size: 16px;
    font-weight: normal;
  }
}

#menuNode {
  z-index: 1001;
  position: fixed;
  top: 72px;
}

.menu-container {
  width: calc(100%);
  height: calc(100vh - 72px);
}

// .menuPhone {
//     height: calc(100vh - 72px) !important;
//     top: 72px !important;
// }

// 当屏幕宽度小于 768px 时，隐藏
@media (max-width: 768px) {
  .min-display {
    display: none;
  }

  .header-menu-active {
    display: none;
  }

  .online-text {
    display: none;
  }

  .header-coll {
    display: unset;
  }
}

// 屏幕宽度大于 768px 时，隐藏
@media (min-width: 768px) {
  .header-coll {
    display: none;
  }

  .max-un-display {
    display: none;
  }
}
</style>
