function A(age) {
  this.console = consolePPrint;
  this.age = age;
}

function consolePPrint() {
  console.log("A");
}

A.prototype.name = "Kevin";

var x = new A(12);
var y = new A(12);

x.name = "Jack";

// console.log(y.name);
// console.log(x.name);
console.log(Object.getPrototypeOf(x).name);
console.log(Object.getPrototypeOf(y).name);
x.sex = true;
console.log(y.sex);
console.log(x.constructor);