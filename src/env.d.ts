/// <reference types="vue/macros-global" />
// declare module 'vue-qr/src/packages/vue-qr.vue'
// declare module 'vue-qr'
// // 声明第三方组件的类型
// declare module 'vue-qr/src/packages/vue-qr.vue' {
//     import { defineComponent } from 'vue'
//     const VueQr: ReturnType<typeof defineComponent>
//     export default VueQr
// }
// 配置全局属性localStorage

declare global {
  interface Storage {
    getItem(key: "userinfo"): string | null;
  }
}
