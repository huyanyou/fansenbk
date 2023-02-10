<script setup lang="ts">
import Guacamole from "guacamole-common-js";
import { GuacamoleStatus } from "@/utils/home/index";
import { Message } from "@arco-design/web-vue";
const wsURL = "ws://www.singzer.cn:9528/ws";
let client: Guacamole.Client;
let display: Guacamole.Display;
const emit = defineEmits<{
  (event: "rdpStatus", statu: number): void;
}>();
const targetData = {
  // guacad_addr: 'guacd.mojotv.cn:4822',
  asset_protocol: "rdp",
  // asset_host: '10.13.5.41',
  // asset_port: '3389',
  // asset_user: 'Administrator',
  // asset_password: 'Admin123qwe',
  screen_width: 1366,
  screen_height: 768,
  screen_dpi: 72,
};
const viedeoRef = $ref<HTMLDivElement>();
function serialize(obj: { [x: string]: string | number | boolean }) {
  let str = [];
  for (const p in obj)
    if (obj[p]) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
function handleMouseState(mouseState: Guacamole.Mouse.State) {
  const scaledMouseState = Object.assign({}, mouseState, {
    x: mouseState.x / display.getScale(),
    y: mouseState.y / display.getScale(),
  });
  client.sendMouseState(scaledMouseState);
}
/**
 * 设置宽高
 */
function resize() {
  let pixelDensity = window.devicePixelRatio | 1;
  const width = viedeoRef!.clientWidth * pixelDensity;
  const height = viedeoRef!.clientHeight * pixelDensity;
  if (display.getWidth() !== width || display.getHeight() !== height) {
    console.log("resize", display.getWidth(), display.getHeight());
    client.sendSize(targetData.screen_width, targetData.screen_height);
  }
  setTimeout(() => {
    const scale = Math.min(
      viedeoRef!.clientWidth / Math.max(display.getWidth(), 1),
      viedeoRef!.clientHeight / Math.max(display.getHeight(), 1)
    );
    display.scale(scale);
  }, 100);
}
/**
 * 创建rdp连接
 */
function createRdpServer() {
  if (client) return;
  let tunnel = new Guacamole.WebSocketTunnel(wsURL);
  client = new Guacamole.Client(tunnel);
  display = client.getDisplay();
  viedeoRef!.appendChild(display.getElement());
  const params = serialize(targetData);
  client.connect(params);
  // 设置宽高
  // resize()
  // 判断是否连接成功
  client.onstatechange = (state: Guacamole.Client.State) => {
    switch (state) {
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
        emit("rdpStatus", 3);
        viedeoRef!.onmouseenter = resize;
        break;
      default:
        // alert('其他')
        break;
    }
  };
  let mouse = new Guacamole.Mouse(display.getElement());
  mouse.onmouseout = () => {
    if (!display) return;
    display.showCursor(false);
  };
  viedeoRef!.onclick = () => {
    viedeoRef!.focus();
  };
  viedeoRef!.onfocus = () => {
    // viedeoRef!.className = 'focus'
  };
  viedeoRef!.onblur = () => {
    // viedeoRef!.className = ''
  };
  let keyboard = new Guacamole.Keyboard(viedeoRef);
  keyboard.onkeydown = (keysym: number) => {
    client.sendKeyEvent(1, keysym);
  };
  keyboard.onkeyup = (keysym: number) => {
    client.sendKeyEvent(0, keysym);
  };
  mouse.onmousedown = mouse.onmouseup = mouse.onmousemove = handleMouseState;
  setTimeout(() => {
    resize();
    viedeoRef!.focus();
  }, 1000);
}
defineExpose({
  createRdpServer,
});
</script>
<template>
  <!-- <ASpin :loading="loading"> -->
  <div ref="viedeoRef" tabindex="0" class="viedeo"></div>
  <!-- </ASpin> -->
</template>
<style scoped lang="scss">
.viedeo {
  margin: 0 auto;
  display: flex;
  // 内容居中
  align-items: center;
  justify-content: center;
  width: 1366px;
  height: 768px;
  outline: none !important;
}

.viedeo:focus {
  outline: none !important;
}

.viedeo:focus-visible {
  outline: none !important;
}
</style>
