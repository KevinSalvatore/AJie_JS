/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
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
