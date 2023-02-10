<script lang="ts" setup>
import type HomeAppRdpServer from "@/components/home/AppRdpServer/index.vue";
import { Message } from "@arco-design/web-vue";
import { producesDt } from "@/utils/home/index";
import { Produce } from "~~/src/utils/home/types";
const produces = $ref<Produce[]>(producesDt);

const rdpServerRef = $ref<InstanceType<typeof HomeAppRdpServer> | undefined>();
let rdpLoading = $ref(true);
/**
 * 获取rdp连接状态
 */
const rdpStatus = (statu: number) => {
  switch (statu) {
    case 0:
      // GuacamoleStatus('正在连接')
      // alert('正在连接')
      break;
    case 1:
      // GuacamoleStatus('连接成功')
      // alert('连接成功')
      // Message.success('连接成功')
      break;
    case 2:
      // GuacamoleStatus('连接失败')

      // alert('连接失败')
      break;
    case 3:
      rdpLoading = false;
      Message.success("连接成功");
      break;
    default:
      // alert('其他')
      break;
  }
};

// let visibles = $ref([false, false, false, false])
onMounted(async () => {
  nextTick(() => {
    rdpServerRef?.createRdpServer();
  });
});
</script>

<template>
  <NuxtLayout name="description">
    <ASpin :loading="rdpLoading" style="width: 100%" tip="正在连接...">
      <div>
        <HomeAppRdpServer ref="rdpServerRef" @rdp-status="rdpStatus" />
      </div>
    </ASpin>
    <template v-for="(item, index) in produces">
      <HomeProductIntroduceLeft v-if="item.direction === 'left' && index !== 0">
        <template #title>
          {{ item.title }}
        </template>
        <template #desc> {{ item.desc }} <br /> </template>
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
    <!-- <HomeAppScenario />
        <HomeAppLink />
        <HomeAppContactInfo /> -->
  </NuxtLayout>
</template>

<style scoped lang="scss"></style>
