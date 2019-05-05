var game = new Phaser.Game(800, 600, Phaser.CANVAS, "phaser-example", {
  preload: preload,
  create: create
});
function preload() {
  game.load.image("block", "../images/box.png");
}
function create() {
  // 切水果游戏？
  game.stage.backgroundColor = "#124184";
  game.physics.startSystem(Phaser.Physics.BOX2D);
  game.physics.box2d.setBoundsToWorld();
  game.physics.box2d.gravity.y = 500;
  for (var i = 0; i < 5; i++) {
    var blockSprite = game.add.sprite(150 + i * 125, 300 - i * 50, "block");
    // blockSprite.body.angle = 30;
  }
}
