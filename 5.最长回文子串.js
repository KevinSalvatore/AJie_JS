/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var isRight = function(s) {
    let times = Math.floor(s.length / 2);
    let result = true;
    for (let i = 0; i < times; i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        result = false;
        break;
      }
    }
    return result;
  };
  let length = s.length,
    str = "";
  for (let l = length; l > 0; --l) {
    let x = length - l;
    let i = 0;
    while (i <= x) {
      let temp = s.substr(i, l);
      if (isRight(temp)) {
        return temp;
      }
      ++i;
    }
  }
  return str;
};
