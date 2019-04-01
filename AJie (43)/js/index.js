let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    const element = args[i];
    sum += element;
  }
  return sum;
}

console.log(sum(...arr));