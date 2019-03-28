// let ran_num = Math.random();
// console.log(ran_num.toFixed(2));
// let getRamdom = (min, max) => (max - min) * Math.random() + min;
// console.log(getRamdom(2, 5));

let divideRedPacket = (money, amount) => {
  let result = [];
  let restMoney = money;
  while (amount--) {
    let redMoney = (restMoney * Math.random()).toFixed(2);
    restMoney -= redMoney;
    result.push(redMoney);
  }
  return result;
}
console.log(divideRedPacket(10, 5));