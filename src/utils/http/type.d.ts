// 范型返回类型
export type MyResponseType<T> = {
  code: number;
  data: T;
  msg: string;
  err: string;
};

export type WXCodeRes = {
  subscribe_scene: string;
  image_url: string;
};
/**
 * 用户信息
 */
export type User = {
  city: string;
  country: string;
  group_id: number;
  headimgurl: string;
  id: number;
  language: string;
  nickname: string;
  phone: string;
  province: string;
  remark: string;
  subscribe: number;
  subscribe_time: number;
};
export type GetLoginStatusRes = {
  token: string;
  user: User;
};
