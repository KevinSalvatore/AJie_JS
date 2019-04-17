const videoConstraints = { width: 1366, height: 768 };
const videoNode = document.querySelector("#video");
let s;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = videoConstraints.width;
canvas.height = videoConstraints.height;
// img  add canvas  drawImage()
// 摄像头/声音 BOM
navigator.getUserMedia(
  {
    audio: true,
    video: videoConstraints
    // 视频流
  },
  function(stream) {
    s = stream;
    videoNode.srcObject = stream;
    videoNode.onloadmetadata = function(e) {
      videoNode.play();
    };
  },
  function(error) {
    console.log(error);
  }
);
function download(src) {
  if (!src) return;
  const a = document.createElement("a");
  a.setAttribute("download", new Date());
  a.href = src;
  a.click();
}
document.querySelector("#photo").addEventListener("click", function(event) {
  event.preventDefault();
  // 拍照？ canvas 抓屏
  context.drawImage(videoNode, 0, 0, canvas.width, canvas.height);
  // 自动下载的做法
  // url 下载的地址
  download(canvas.toDataURL("image/jpeg"));
});
