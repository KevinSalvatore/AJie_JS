let oType = document.querySelectorAll(".item-price");
oType.forEach(element => {
  element.addEventListener("click", () => {
    for (const iterator of oType) {
      iterator.classList.remove("active");
    }
    element.classList.add("active");
  });
});

// let wrapper = document.querySelectorAll(".wrapper");
// let a = document.querySelectorAll(".wrapper>a");
// let style = document.querySelectorAll(".price-way");
// a.forEach(element => {
//   element.addEventListener("click", () => {
//     for (const iterator of style) {
//       iterator.classList.remove("change");
//     }
//     element.querySelector(".price-way").classList.add("change");
//   });
// });

var aType = document.querySelectorAll(".price-way");
var bTpye = document.querySelectorAll(".weui-cell_access");
for (let i = 0; i < bTpye.length; i++) {
  bTpye[i].addEventListener("click", function() {
    for (let j of aType) {
      j.classList.remove("change");
    }
    aType[i].classList.add("change");
  });
}

let goPay = document.getElementById("goPay");
let dialog = document.getElementById("iosDialog2");
goPay.onclick = function() {
  dialog.style.display = "block";
  dialog.style.opacity = 1;
};
