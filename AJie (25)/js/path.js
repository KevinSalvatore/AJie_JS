let volumnController = document.querySelector(".volumn-controller"),
  volumnPath = volumnController.querySelector(".volumn-path"),
  dragButton = volumnController.querySelector(".drag-button");

let dragButtonPos = dragButton.getBoundingClientRect();
//path 总点数
let pathTotalLength = parseInt(volumnPath.getTotalLength());
let points = [];
//第一个点的x坐标
let startX = volumnPath.getPointAtLength(0).x;
// clientX - startX
let music = document.querySelector("#music");
music.volume = 1;
for (let i = 0; i < pathTotalLength; i++) {
  let p = volumnPath.getPointAtLength(i);
  // 将每个path上的点的y坐标存起来
  // button client 计算后， 取出来y
  // 唯一
  points[Math.round(p.x) - startX] = Math.round(p.y);
}
// console.log(points);

function movePoint(event) {
  // console.log(event.clientX, event.clientY);
  // 通过鼠标的偏移， 让button走起来
  // cx cy 值， path 来移到
  // 圆环不是被拖动的， 计算，来移动的
  let diffX = event.clientX - Math.round(dragButtonPos.left + 12);
  console.log(diffX);
  diffX < 0 && (diffX = 0); //左边界
  diffX >= points.length && (diffX = points.length - 1); //右边界
  dragButton.setAttribute("cx", diffX + startX);
  dragButton.setAttribute("cy", points[diffX]);

  // 往左边 拖负值?
}
dragButton.addEventListener("mousedown", function(event) {
  document.addEventListener("mousemove", movePoint);
});
document.addEventListener("mouseup", function() {
  document.removeEventListener("mousemove", movePoint);
});
