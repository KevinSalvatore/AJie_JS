function performanceX() {
  return 6;
}
function performanceS() {
  return 5;
}
function performanceA() {
  return 3;
}
function performanceB() {
  return 2;
}
function performanceC() {
  return 1;
}
function performanceD() {
  return 0;
}
function calculateBounce(performanceLevel, salary) {
  let level = 0;
  switch (performanceLevel) {
    case "X":
      level = performanceX();
      break;
    case "S":
      level = performanceS();
      break;
    case "A":
      level = performanceA();
      break;
    case "B":
      level = performanceB();
      break;
    case "C":
      level = performanceC();
      break;
    default:
      level = performanceD();
      break;
  }
  return level * salary;
}
console.log(calculateBounce("S", 20000));
