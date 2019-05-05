//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
    songLists: [],
    canIUse: wx.canIUse("button.open-type.getUserInfo")
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
    wx.showLoading({
      title: "Loading",
      mask: true
    });
    const songLists = wx.getStorageSync("songLists");
    if (songLists && songLists.length) {
      this.setData({
        songLists
      });
      wx.hideLoading();
      return false;
    }
    wx.request({
      url: app.globalData.API_BASE + "/top/list",
      data: {
        idx: 1
      },
      success: res => {
        if (res.statusCode === 200) {
          this.setData({
            songLists: res.data.playlist.tracks
          });
          wx.setStorageSync("songLists", res.data.playlist.tracks);
        }
        wx.hideLoading();
      }
    });
  },
  handlePLayAudio: function(event) {
    const audioID = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../play/play?id=${audioID}`
    })
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  }
});
