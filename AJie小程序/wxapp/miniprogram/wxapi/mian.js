const CONFIG = require("./config");

const API_BASE_URL = "https://api.it120.cc";
const request = (url, needSubDomain, method, data) => {
  return new Promise((resolve, reject) => {
    let _url =
      API_BASE_URL + (needSubDomain ? "/" + CONFIG.subDomain : "") + url;

    wx.request({
      url: _url,
      data,
      header: { "content-type": "application/x-www-form-urlencoded" },
      method,
      dataType: "json",
      responseType: "text",
      success: result => {
        resolve(result.data);
      },
      fail: error => {
        reject(error);
      },
      complete: () => {}
    });
  });
};
module.exports = {
  loadGoods: data => {
    return request("/shop/goods/list", true, "post", data);
  },
  getBanners: data => {
    return request("/banner/list", true, "get", data);
  },
  getCategory: data => {
    return request();
  }
};
