export type LoginBody = {
  subscribe_scene: string;
  token: string;
};
export default defineEventHandler(async (event) => {
  const body = await readBody<LoginBody>(event);
  if (!body.token || body.token.length === 0) {
    return {
      data: "",
      msg: "登陆失败",
      status: 400,
      err: "token不能为空",
    };
    // 设置状态码
  }
  // 设置cookie
  setCookie(event, "token", body.token, {
    httpOnly: true,
  });

  // 存储到缓存中
  // console.log('token', token)
  // 解析token
  return {
    data: "",
    msg: "登陆成功",
    status: 200,
    err: "",
  };
});
