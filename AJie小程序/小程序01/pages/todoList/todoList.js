Page({
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    userInfo: {},
    addShow: false
  },
  getUserInfo: function(e) {
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  addTodoShow: function(e) {
    this.setData({
      addShow: true
    });
  },
  addTodoHide: function(e) {
    this.setData({
      addShow: false
    });
  }
});
