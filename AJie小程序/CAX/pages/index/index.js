import cax from "../../cax/index";
Page({
  onLoad() {
    const info = wx.getSystemInfoSync();
    const stage = new cax.Stage(
      info.windowWidth,
      info.windowHeight,
      "myCanvas",
      this
    );
    const rect = new cax.Rect(100, 100, {
      fillStyle: "black"
    });
    rect.originX = 50;
    rect.originY = 50;
    rect.x = 100;
    rect.y = 100;
    rect.rotation = 30;
    stage.add(rect);
    cax.To.get(rect).to().x(200, 2000, cax.easing.elasticInOut).start();
    setInterval(function() {
      stage.update();
    });
  }
});