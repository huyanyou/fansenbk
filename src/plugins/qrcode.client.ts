// // // nuxt3使用vue-qr组件插件
import { defineNuxtPlugin } from "#app";
import VueQr from "vue-qr/src/packages/vue-qr.vue";
export default defineNuxtPlugin(async (nuxtApp) => {
  // 仅在客户端使用vue-qr组件
  // const VueQr = require("vue-qr/src/packages/vue-qr.vue").default
  nuxtApp.vueApp.component("VueQr", VueQr);
});
// export { }
