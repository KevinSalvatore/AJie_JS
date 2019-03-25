var index = 0;
var timer = null;
$(".thumbs li").mouseover(function() {
  clearInterval(timer);
  var n = $(this).index();
  index = n;
  addBannerAnimation();
});
$(".thumbs li").mouseout(function() {
  timer = startInterval();
});
function addBannerAnimation() {
  $(".banner_bg").animate({ marginTop: -index * 160 + "px" }, 200);
  $(".banner_control em").animate({ top: index * 55 + "px" }, 200);
}
function startInterval() {
  return setInterval(function() {
    index++;
    if (index === 3) {
      index = 0;
    }
    addBannerAnimation();
  }, 1000);
}
var timer = startInterval();
