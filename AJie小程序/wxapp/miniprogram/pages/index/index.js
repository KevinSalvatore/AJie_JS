//index.js
const WXAPI = require("../../wxapi/mian.js");

Page({
  data: {
    goods: [],
    categories: [],
    activeCategoryId: 0,
    banners: [],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0,
    goodsRecommend: []
  },
  swiperchange(e) {
    console.log(e.detail.current);
    this.setData({
      swiperCurrent: e.detail.current
    });
  },
  onLoad() {
    this.loadGoods(); //商品
    this.getBanners(); //广告
    this.getCategory(); //类别
    this.getRecommend();
  },
  loadGoods() {},
  getBanners() {
    WXAPI.getBanners({
      type: "new"
    }).then(res => {
      if (res.code === 0) {
        //code === 0 : 数据没有问题
        this.setData({
          banners: res.data
        });
      }
    });
  },
  getCategory() {},
  getRecommend() {
    WXAPI.loadGoods({
      recommandStatus: 1
    }).then(res => {
      console.log(res);
      if (res.code === 0) {
        this.setData({
          goodsRecommend: res.data
        });
      }
    });
  }
});
