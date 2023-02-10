<script setup lang="ts">
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
</script>
<template>
  <div>
    <ASpace ref="arcoSpaceRef" direction="vertical" style="display: block">
      <!-- 联系方式 -->
      <ARow class="contact-info">
        <ACol :span="20">
          <ADescriptions :data="descriptionDatas" layout="inline-horizontal" />
          <ADescriptions
            class="contact-two"
            :data="descriptionDataOne"
            layout="inline-horizontal"
          />
        </ACol>
        <ACol :span="4">
          <ADescriptions class="wechat-icon" layout="inline-vertical">
            <ADescriptionsItem>
              <template #label>
                <div
                  style="
                    float: right;
                    width: 100%;
                    text-align: right;
                    color: black;
                  "
                >
                  微信公众号
                </div>
              </template>
              <div
                style="
                  float: right;
                  width: 100%;
                  text-align: right;
                  margin-top: 10px;
                  color: black;
                "
              >
                <IconWechat :size="30" />
              </div>
            </ADescriptionsItem>
          </ADescriptions>
        </ACol>
      </ARow>
    </ASpace>
  </div>
</template>
<style scoped lang="scss">
.arco-space {
  max-width: 1366px;
  margin: auto auto;
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
