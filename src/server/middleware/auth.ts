export default defineEventHandler(async (event) => {
  // 除了首页，其他页面都需要登录
  // 匹配是否包含/experience

  //  ? :useStorage().setItem('token')
  // const token = await useStorage()
  // console.log('token', token)
  const reg = /\/experience/;

  if (reg.test(event.path as string)) {
    // 获取cookie
    const token = getCookie(event, "token");
    if (!token) {
      console.log("132131");
      sendRedirect(event, "/");
    } else {
      // 将token传递给页面
      // 将路径转换成/experience?token=xxx
    }
  }
});
