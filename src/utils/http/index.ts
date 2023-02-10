import http from "~~/src/composables/useHttp";
import { GetLoginStatusRes, MyResponseType, WXCodeRes } from "./type";

export enum MYAPI {
  Login = "/incr",
  GetWxQrCode = "/oa/qrcode",
  GetLoginStatus = "/oa/check",
}

/**
 * 登陆
 * @returns
 */
export async function LoginApi() {
  return http<{ count: number }>(MYAPI.Login);
}
/**
 * 获取微信二维码
 */
export async function GetWxQrCodeApi() {
  return http<MyResponseType<WXCodeRes>>(MYAPI.GetWxQrCode);
}
/**
 * 获取登陆状态
 */
export async function GetLoginStatusApi(subscribe_scene: string) {
  return http<MyResponseType<GetLoginStatusRes>>(MYAPI.GetLoginStatus, {
    method: "POST",
    body: {
      subscribe_scene,
    },
  });
}
