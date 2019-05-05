const app = getApp();
Page({
  data: {
    isPlay: false
  },
  onLoad: function(options) {
    const audioId = options.id;
    console.log(audioId);
    wx.request({
      url: app.globalData.API_BASE + "/song/url",
      data: {
        id: audioId
      },
      success: res => {
        if (res.statusCode === 200) {
          this.createBgAudio(res.data.data[0]);
        }
      }
    });
    wx.request({
      url: app.globalData.API_BASE + "/song/detail",
      data: {
        ids: audioId
      },
      success: res => {
        if (res.statusCode === 200) {
          this.setData({
            song: res.data.songs[0]
          });
        }
      }
    });
  },
  createBgAudio(res) {
    const bgAudioManage = wx.getBackgroundAudioManager();
    app.globalData.bgAudioManage = bgAudioManage;
    bgAudioManage.title = "title";
    bgAudioManage.src = res.url;
    bgAudioManage.onPlay(res => {
      this.setData({
        isPlay: true
      });
    });
  },
  handleToggleBGAudio() {
    const bgAudioManage = app.globalData.bgAudioManage;
    const { isPlay } = this.data;
    if (isPlay) {
      bgAudioManage.pause();
    } else {
      bgAudioManage.play();
    }
    this.setData({
      isPlay: !isPlay
    });
  }
});
