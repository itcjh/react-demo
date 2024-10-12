const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    proxy("/api1", {
      target: "http://192.168.1.131:8080", //请求转发给谁
      changeOrigin: true,
      pathRewrite: { "^/api1": "" },
    }),
    proxy("/api2", {
      target: "http://192.168.1.131:8080",
      changeOrigin: true,
      pathRewrite: { "^/api2": "" },
    })
  );
};
