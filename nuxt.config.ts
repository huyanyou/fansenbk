// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import { LogLevel } from "consola";
export default defineNuxtConfig({
  vite: {
    vue: {
      reactivityTransform: true,
      template: {
        compilerOptions: {
          // 排除不是vue组件引起的警告
          // isCustomElement: (tag) => ["swiper-container", "swiper-slide"].includes(tag)
        },
      },
    },
    plugins: [
      AutoImport({
        resolvers: [ArcoResolver()],
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/, // .md
        ],
        dts: "auto-imports.d.ts",
        imports: [
          "vue",
          "vue-router",
          // vue的语法糖$ref
          "vue/macros",
        ],
        vueTemplate: true,
      }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true,
          }),
        ],
        // dirs: ['./src/components'],
        extensions: ["vue"],
        deep: true,
        dts: "components.d.ts",
        directives: true,
        // globalNamespaces: ['global'],
        include: [/\.vue$/, /\.vue\?vue/],
      }),
    ],
    ssr: {
      noExternal: [
        "moment",
        "@arco-design/web-vue",
        "compute-scroll-into-view",
      ],
    },
    server: {
      proxy: {
        "/api": {
          target: "https://fit-oa.singzer.cn",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/"),
        },
        // '^/api': {
        //     target: 'https://fit-oa.singzer.cn',  //这里是接口地址
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/api/, '/api')
        // },
      },
    },
    optimizeDeps: {
      exclude: ["vue-qr"],
    },
    build: {
      chunkSizeWarningLimit: 1600,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/index.scss" as *;',
        },
      },
    },
  },
  srcDir: "src/",
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  modules: [
    // ["@nuxtjs/axios", { proxyHeaders: false }]
    // "@nuxtjs/axios"
    // qrcodejs
    // '@nuxt/devtools',
    "@nuxt/devtools",
  ],
  ssr: true,
  // 配置link
  app: {
    // head: {
    //     script: [{
    //         // assets下的qrcode.js
    //         src: '/js/qrcode.js',
    //     }]
    // }
  },
  // 在客户端使用qrcodejs
  plugins: [
    // { src: '~/plugins/qrcode.client', mode: 'client' },
  ],
  // vue-qr 无法导入
  build: {
    transpile: [
      "vue-qr",
      "@diadal/vue3-qr-code-styling",
      "vue-qr/src/packages/vue-qr.vue",
    ],
  },
  // 配置自动注册组件
  // components: true,
  // 声明组件类型
  typescript: {
    typeCheck: true,
  },
  nitro: {
    debug: true,
    logLevel: LogLevel.Info,
  },
  components: {
    dirs: ["components"],
  },
});
