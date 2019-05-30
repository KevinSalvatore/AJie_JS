// let htmlStr = "<p><em>lorem<strong>ipsum</strong></em></p><br/>";

// console.log(htmlStr.replace(/<[^>]+>/g, ""));

// const ary = (fn, n) => (...args) => fn(...args.slice(0, n));

// const firstTwoMax = ary(Math.max, 2);

// console.log([[2, 3, "a"], [3, 4, 5]].map(x => firstTwoMax(...x)));

var convert = function(s, numRows) {
  let str = "",
    length = s.length,
    len = (numRows - 1) * 2,
    p = 0,
    arrs = [];
  while (p < length) {
    let arr = new Array(len).fill("");
    let temp = s.substr(p, len);
    let i = 0;
    Array.from(temp).forEach(c => {
      arr[i++] = c;
    });
    str += arr.shift();
    arrs.push(arr);
    p += len;
  }
  for (let i = 0; i < len / 2 - 1; ++i) {
    arrs.forEach(arr => {
      str += arr.shift();
      str += arr.pop();
    });
  }
  arrs.forEach(arr => {
    str += arr[0];
  });
  return str;
};

console.log(convert("a", 1));