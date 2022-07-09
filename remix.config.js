/*
 * @Author: jweboy
 * @Date: 2021-12-17 15:58:11
 * @LastEditors: jweboy
 * @LastEditTime: 2022-01-06 22:10:13
 */
/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  browserBuildDirectory: "public/build", // 浏览器端构建目录
  publicPath: "/build/", // 浏览器端静态资源前缀
  serverBuildDirectory: "build",// 服务器端构建目录
  devServerPort: 8002,
  serverDependenciesToBundle: ["react-markdown"],
};
