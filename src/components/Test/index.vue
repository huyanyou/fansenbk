<script lang="ts" setup>
const { title = "默认标题" } = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div>
    {{ title }}
    测试路由
  </div>
</template>

<style scoped></style>
