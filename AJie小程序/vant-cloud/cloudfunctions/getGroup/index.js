// 云函数入口文件
const cloud = require("wx-server-sdk");

const env = "ajie-an8yh";

cloud.init();

const db = cloud.database({
  env
});

exports.main = async () => {
  return await db.collection("group").get({
    success(res) {
      return res;
    }
  });
};
