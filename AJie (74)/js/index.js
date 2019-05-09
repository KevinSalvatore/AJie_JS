// const search = location.search;
// if (search) {
//   const paramsObj = new URLSearchParams(search);
//   console.log(paramsObj);
//   console.log(paramsObj.get("name"));
// }

// function getQueryString() {
//   const obj = {};
//   const search = location.search.substr(1);
//   const searchArr = search.split("&");
//   searchArr.forEach(item => {
//     const ret = item.split("=");
//     obj[ret[0]] = ret[1];
//   });
//   return obj;
// }

// var user = {
//   info: {
//     avatar: ["link1", "link2", "link3"]
//   }
// };

// const link =
//   (user && user.info && user.info.avatar && user.info.avatar[1]) ||
//   "default link";
// const link = _.get(user, ["info", "avatar", 1], "default link");

function flatten(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.reduce((prev, cur) => {
    return prev.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}
const arr = [1, [2, 3, [4, 5, 6]]];

console.log(flatten(arr));
