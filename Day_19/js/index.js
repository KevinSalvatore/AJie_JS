const musicBtn = document.querySelector(".music-btn");
const bgm = document.getElementById("bgm");
musicBtn.addEventListener("click", () => {
  if (bgm.paused) {
    bgm.play();
    // musicBtn.classList.remove("off");
  } else {
    bgm.pause();
    // musicBtn.classList.add("off");
  }
  musicBtn.classList.toggle("off");
});

var swiper = new Swiper(".swiper-container", {
  direction: "vertical"
});
