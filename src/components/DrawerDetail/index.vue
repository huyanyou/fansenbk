<script setup lang="ts">
const { title = "22" } = defineProps<{
  title?: string;
}>();
</script>
<template>
  <div>
    {{ title }}
  </div>
</template>
<style scoped></style>
