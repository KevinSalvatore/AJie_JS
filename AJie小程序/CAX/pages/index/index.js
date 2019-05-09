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
    rect.y = 170;
    rect.rotation = 30;
    stage.add(rect);

    const bitmap = new cax.Bitmap("/images/wx.png");
    stage.add(bitmap);
    bitmap.on("tap", () => {
      console.log("bitmap tap");
    });

    const sprite = new cax.Sprite({
      framerate: 7,
      imgs: ["/images/mario-sheet.png"],
      frames: [
        [0, 0, 32, 32],
        [32 * 1, 0, 32, 32],
        [32 * 2, 0, 32, 32],
        [32 * 3, 0, 32, 32],
        [32 * 4, 0, 32, 32],
        [32 * 5, 0, 32, 32],
        [32 * 6, 0, 32, 32],
        [32 * 7, 0, 32, 32],
        [32 * 8, 0, 32, 32],
        [32 * 9, 0, 32, 32],
        [32 * 10, 0, 32, 32],
        [32 * 11, 0, 32, 32],
        [32 * 12, 0, 32, 32],
        [32 * 13, 0, 32, 32],
        [32 * 14, 0, 32, 32]
      ],
      animations: {
        walk: {
          frames: [0, 1]
        },
        happy: {
          frames: [11, 12, 13, 14]
        },
        win: {
          frames: [7, 8, 9, 10]
        }
      },
      currentAnimation: "win"
    });
    sprite.x = 100;
    sprite.y = 100;
    stage.add(sprite);

    const button = new cax.Button({
      width: 100,
      height: 40,
      text: "I'm Buttoon!"
    });
    button.x = 20;
    button.y = 20;
    stage.add(button);

    cax.To.get(rect)
      .to()
      .x(200, 2000, cax.easing.elasticInOut)
      .start();
    setInterval(function() {
      stage.update();
    });
  }
});
