const QQ_MAP_KEY = "SARBZ-L4O65-NHJIF-QVACY-CPPI6-NIBR6";

wx.cloud.init({
  env: "ajie-an8yh"
});

const db = wx.cloud.database();

export const addEmotion = (openid, emotion) => {
  return db.collection("diary").add({
    data: {
      openid,
      emotion,
      tsModified: Date.now()
    }
  });
};

export const geocoder = (lat, lon, success = () => {}, fail = () => {}) => {
  return wx.request({
    url: "https://apis.map.qq.com/ws/geocoder/v1/",
    data: {
      location: `${lat}, ${lon}`,
      key: QQ_MAP_KEY,
      get_poi: 0
    },
    success,
    fail
  });
};

export const getWeather = (lat, lon) => {
  return wx.cloud.callFunction({
    name: "he-weather",
    data: {
      lat,
      lon
    }
  });
};
