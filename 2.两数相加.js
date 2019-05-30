/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let p1 = l1,
    p2 = l2,
    result = null,
    point = null,
    plus = false;
  while (p1 || p2 || plus) {
    let x = 0,
      y = 0;
    if (p1) {
      x = p1.val;
      p1 = p1.next;
    }
    if (p2) {
      y = p2.val;
      p2 = p2.next;
    }
    let temp = x + y + (plus ? 1 : 0);
    if (temp > 9) {
      temp = temp - 10;
      plus = true;
    } else {
      plus = false;
    }
    if (!result) {
      result = point = new ListNode(temp);
    } else {
      point.next = new ListNode(temp);
      point = point.next;
    }
  }
  return result;
};
