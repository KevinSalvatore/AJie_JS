// let box = document.getElementById("box");
// let width = 0;
// box.addEventListener("click", ()=>{
//   width+=10;
//   box.style.width = width+"px";
// })

let process = document.querySelector(".process-v");
let width = -2;
let interval = setInterval(() => {
  width += 2;
  if (width > 100) {
    clearInterval(interval);
  }
  process.style.width = width + "%";
}, 100);

let next = document.getElementById("next");
next.addEventListener("click", () => {
  let preload = document.querySelector(".view.preload");
  preload.style.transform = "translate3d(0," + (-100 + "%,0)");
});
