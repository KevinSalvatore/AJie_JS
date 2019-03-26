function Otaku(name, age) {
  this.name = name;
  this.age = age;
}
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function() {
  console.log(this.name);
};
var boy_1 = new Otaku("Kevin", 18);
var girl_1 = new Otaku("Amy", 18);
function objectFactory(conFn, name, age) {
  var obj = new Object();
  conFn.call(obj, name, age);
  return obj;
}
var boy_2 = objectFactory(Otaku, "Jack", 18);
console.log(boy_2);