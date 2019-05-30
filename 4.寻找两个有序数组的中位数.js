/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [...nums1, ...nums2].sort((a, b) => a - b);
  let length = arr.length;
  if (length % 2) {
    return arr[Math.floor(length / 2)];
  } else {
    return (arr[length / 2] + arr[length / 2 - 1]) / 2;
  }
};
