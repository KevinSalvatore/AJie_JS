/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 1; j < len - i; j++) {
      if (nums[i] + nums[i + j] === target) return [i, i + j];
    }
  }
};
