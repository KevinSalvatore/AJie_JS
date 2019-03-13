// function linkInfo() {
//   let a = document.getElementsByTagName("a");
//   let num = a.length + 1;
//   let href = a[0].href;
//   console.log(num);
//   console.log(a[0].href);
//   console.log(a[a.length - 1].href);
// }
// linkInfo();
// console.log(
//     document.getElementById("saxophone")
//     .classList.contains("wind")
// )
const hasClass = (id, someClass) => {
  // 判断某ID的元素具有某类名
  // 如果有=>true，反之亦然
  // 有可能找不到元素，还要找类名，提示错误
  let obj = document.getElementById(id);
  if (obj) {
    let classlist = obj.classList;
    for (let index = 0; index < classlist.length; index++) {
      const element = classlist[index];
      if (element === someClass) {
        return true;
      }
    }
    return false;
  } else {
    console.log("ERROR!");
    return false;
  }
};

if (hasClass("saxophone", "woodwind")) {
  console.log("True");
} else {
  console.log("False");
}
if (hasClass("saxophone", "brass")) {
  console.log("True");
} else {
  console.log("False");
}
if (hasClass("trumpet", "brass")) {
  console.log("True");
} else {
  console.log("False");
}
if (hasClass("contrabass", "chorphone")) {
  console.log("True");
} else {
  console.log("False");
}
// saxophone woodwind true
// saxophone brass false
// trumpet brass true
// contrabass chorphone error
