/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let amount = 0,
    temp = "";

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (temp.indexOf(c) === -1) {
      temp += c;
    } else {
      temp = temp.slice(temp.indexOf(c) + 1) + c;
    }
    if (amount < temp.length) amount = temp.length;
  }
  return amount;
};
