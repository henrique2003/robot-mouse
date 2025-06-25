const robot = require("robotjs");

const intervaloMovimento = 3;
const tempoVolta = 1;
const pixeis = 20;

function moveMouseSlightly() {
  const pos = robot.getMousePos();

  robot.moveMouse(pos.x + pixeis, pos.y);
  setTimeout(() => {
    robot.moveMouse(pos.x, pos.y);
  }, 1000 * tempoVolta);
}

console.log("Movimentando o mouse a cada 3 segundos...");

setInterval(moveMouseSlightly, 1000 * intervaloMovimento);

setInterval(() => {}, 1 << 30);
