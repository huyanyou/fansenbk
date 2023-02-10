<script lang="ts" setup>
import { producesDt } from "@/utils/home/index";
import { Login, Produce } from "@/utils/home/types";
import { GetLoginStatusApi, GetWxQrCodeApi } from "@/utils/http";
import { WXCodeRes } from "@/utils/http/type";
const produces = $ref<Produce[]>(producesDt);
let title = $ref<"欢迎体验" | "完善信息">("欢迎体验");
// useHead({
//     link: [{
//         rel: 'stylesheet',
//         href: 'index.css'
//     }]
// })
// 弹出框可视化
let modelVisible = $ref(false);
let form = $ref<Login>({
  name: "",
  phone: "",
  code: "",
  company: "",
});
// 中国手机号正则匹配
const phoneReg = /^1[3456789]\d{9}$/;
/**
 * 在线测试登陆
 */
const openForm = () => {
  modelVisible = true;
};
/**
 * 登陆提交表单
 */
const submitLogin = (data: Record<string, any>, ev: Event) => {};

/**
 * 微信二维码
 */
let qrCode = $ref<WXCodeRes>({
  subscribe_scene: "",
  image_url: "",
});

// let visibles = $ref([false, false, false, false])
onMounted(async () => {
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
});
</script>

<template>
  <NuxtLayout name="description">
    <template v-for="(item, index) in produces">
      <HomeProductIntroduceLeft v-if="item.direction === 'left'">
        <template #title>
          {{ item.title }}
        </template>
        <template #desc>
          {{ item.desc }} <br />
          <AButton
            v-if="index === 0"
            type="primary"
            style="margin-top: 50px"
            @click="openForm"
            >在线测试
          </AButton>
        </template>
      </HomeProductIntroduceLeft>
      <HomeProductIntroduceRight v-if="item.direction === 'right'">
        <template #title>
          {{ item.title }}
        </template>
        <template #desc>
          {{ item.desc }}
        </template>
      </HomeProductIntroduceRight>
    </template>
  </NuxtLayout>
  <AModal
    class="all-border-radio"
    width="350px"
    id="login-model"
    v-model:visible="modelVisible"
    ok-text=""
    cancel-text=""
    :footer="false"
  >
    <template #title>
      <div
        style="width: 100%; text-align: left; font-weight: 900; font-size: 20px"
      >
        {{ title }}
      </div>
    </template>
    <!-- <AButton style="width: 100%;" type="outline">微信扫一扫</AButton> -->
    <div v-if="title === '欢迎体验'" style="text-align: center">
      <img
        :src="qrCode.image_url"
        height="250"
        width="250"
        alt=""
        srcset=""
        @click="title = '完善信息'"
      />
      <h4 style="text-align: center; margin-top: 20px; margin-bottom: 10px">
        扫码关注"FITFN飞度智能科技"公众号即可体验
      </h4>
    </div>
    <AForm
      v-if="title === '完善信息'"
      ref="formRef"
      id="login-form"
      auto-label-width
      :model="form"
      @submit-success="submitLogin"
    >
      <!-- <AFormItem>
            </AFormItem> -->
      <!-- <ADivider orientation="center">或</ADivider> -->
      <AFormItem
        label=""
        :rules="[
          { message: '手机号不能为空!', minLength: 1 },
          { match: phoneReg, message: '请填写正确的手机号' },
        ]"
        field="phone"
        feedback
      >
        <AInput v-model="form.phone" placeholder="请输入您的手机号" />
      </AFormItem>
      <AFormItem
        label=""
        field="code"
        :rules="[{ minLength: 1, message: '请输入验证码' }]"
        feedback
      >
        <AInput v-model="form.code" placeholder="请输入验证码" />
        <AButton type="primary">获取验证码</AButton>
      </AFormItem>
      <AFormItem
        label=""
        field="name"
        :rules="[{ minLength: 1, message: '请输入姓名' }]"
        feedback
      >
        <AInput v-model="form.name" placeholder="请输入您的姓名" />
      </AFormItem>
      <AFormItem
        label=""
        field="company"
        :rules="[{ minLength: 1, message: '请输入单位名称' }]"
        feedback
      >
        <AInput v-model="form.company" placeholder="请输入您的单位名称" />
      </AFormItem>
      <AFormItem label="">
        <AButton style="width: 100%" type="primary" html-type="submit-success"
          >开始体验</AButton
        >
      </AFormItem>
      <AFormItem label="">
        <AButton style="width: 100%" type="text"
          ><span style="color: #1d2129; font-size: 10px">暂不填写</span>
        </AButton>
      </AFormItem>
    </AForm>
  </AModal>
</template>
<style scoped lang="scss">
/**
    arco表单的label样式
*/
#login-form:deep(
    div.arco-col.arco-form-item-label-col.arco-form-item-label-col-flex
  ) {
  padding-right: 0 !important;
}

#login-form:deep(.arco-input-wrapper) {
  border-radius: 3px;
}

#login-model
  :deep(div.arco-modal-wrapper.arco-modal-wrapper-align-center > div) {
  border-radius: 16px;
}
</style>
<style>
/**
    arco的对话框的表头去掉下划线
*/
#login-model
  > div.arco-modal-wrapper.arco-modal-wrapper-align-center
  > div
  > div.arco-modal-header {
  border-bottom-width: 0px !important;
  padding-top: 10px;
}

/**
     arco的对话框的圆角
*/
/* #login-model>div.arco-modal-wrapper.arco-modal-wrapper-align-center>div {
    --border-radius-medium: var(--all-border-radio)
} */

/**
    arco的对话框的body上padding距离
*/
#login-model
  > div.arco-modal-wrapper.arco-modal-wrapper-align-center
  > div
  > div.arco-modal-body:has(.arco-form) {
  padding-bottom: 0;
}
</style>
