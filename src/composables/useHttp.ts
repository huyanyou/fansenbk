const baseURL = "https://fit-oa.singzer.cn/api";
const http = $fetch.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  onRequest: (config) => {},
  onRequestError: (error) => {},
  onResponse: (response) => {
    // 获取后端返回的cookie
  },
  onResponseError: (error) => {},
  credentials: "omit",
});
export default http;
