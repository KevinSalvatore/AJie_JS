const trendings = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url:
        "https://github-trending-api.now.sh/repositories?tdsourcetag=s_pctim_aiomsg",
      success: res => {
        resolve(res);
      }
    });
  });
};

module.exports = {
  trendings
};
