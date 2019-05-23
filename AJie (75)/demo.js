function sum(num = err("First"), otherNum = err("Second")) {
  return sum;
}

function err(message) {
  throw new Error(message);
}

console.log(sum(1, 2));
