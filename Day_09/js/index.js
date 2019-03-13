// const btn = document.getElementById("btn");
// btn.onclick = () => {
//   console.log(1);
// }
// btn.onclick = () => {
//   console.log(2);
// }
// btn.addEventListener('click', function (){
//   console.log("btn Click 1")
// });
// btn.addEventListener('click', function (){
//   console.log("btn Click 2")
// });

const ev = document.getElementById("ev");
const evParent = document.getElementById("evParent");

// evParent.addEventListener('click',()=>{
//   console.log("Parent");
// },true);
// ev.addEventListener('click',()=>{
//   console.log("Child");
// },true);
// document.body.addEventListener('click',()=>{
//   console.log("Body");
// },true);
// document.documentElement.addEventListener('click',()=>{
//   console.log("Html");
// },true);
// window.addEventListener('click',()=>{
//   console.log("Window");
// },true);

// evParent.addEventListener('click',()=>{
//   console.log("Parent");
// },false);
// ev.addEventListener('click',()=>{
//   console.log("Child");
// },false);
// document.body.addEventListener('click',()=>{
//   console.log("Body");
// },false);
// document.documentElement.addEventListener('click',()=>{
//   console.log("Html");
// },false);
// window.addEventListener('click',()=>{
//   console.log("Window");
// },false);

ev.addEventListener(
  "click",
  () => {
    console.log("Child Capture");
    // event.stopPropagation();
  },
  true
);
ev.addEventListener(
  "click",
  () => {
    console.log("Child BuBBle 01");
    // event.stopImmediatePropagation();
  },
  false
);
ev.addEventListener(
  "click",
  event => {
    console.log(event.currentTarget, event.target);
    console.log("Child BuBBle 02");
  },
  false
);
evParent.addEventListener(
  "click",
  () => {
    console.log("Parent Capture");
  },
  true
);
evParent.addEventListener(
  "click",
  () => {
    console.log("Parent BuBBle");
  },
  false
);
ev.onclick = () => {
  console.log("DOM-01");
};

const tar = document.getElementById("list");
Array(tar).forEach(obj => {
  obj.addEventListener(
    "click",
    event => {
      console.log(event.target.innerHTML);
    },
    true
  );
});

// tar.addEventListener(
//   "click",
//   event => {
//     console.log(event.target.innerHTML);
//   },
//   true
// );
