export type Produce = {
  title: string;
  desc: string;
  // 方向
  direction: "left" | "right";
};

export type Login = {
  // 手机号
  phone: string;
  // 验证码
  code: string;
  // 姓名
  name: string;
  // 单位名称
  company: string;
};
