var index = 0;

function addBannerAnimation() {
  $(".banner_bg").animate({ marginTop: -index * 160 + "px" }, 200);
  $(".banner_control em").animate({ top: index * 55 + "px" }, 200);
}
function startInterval() {
  timer = setInterval(function() {
    index++;
    if (index === 3) {
      index = 0;
    }
    addBannerAnimation();
  }, 1000);
}
startInterval();
