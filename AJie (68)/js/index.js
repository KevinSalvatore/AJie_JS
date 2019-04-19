let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  initRoundPopulation = 80,
  round = [];

const WIDTH = document.documentElement.clientWidth,
  HEIGHT = document.documentElement.clientHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

init();
animate();
function init() {
  for (let i = 0; i < initRoundPopulation; i++) {
    round[i] = new RoundItem(
      i,
      Math.random() * WIDTH,
      Math.random() * HEIGHT,
      ctx
    );
    round[i].draw();
  }
}
function animate() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let star of round) {
    star.move();
  }
  requestAnimationFrame(animate);
}
