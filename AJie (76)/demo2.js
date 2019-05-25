function ListNode(val) {
  this.val = val;
  this.next = null;
}
function LinkList() {
  this.head = null;
}
LinkList.prototype.push = function(val) {
  if (this.head === null) {
    this.head = new ListNode(val);
  } else {
    let preNode = this.head;
    while (preNode.next) {
      preNode = preNode.next;
    }
    preNode.next = new ListNode(val);
  }
};
LinkList.prototype.isEmpty = function() {
  return this.head === null;
};
LinkList.prototype.pop = function() {
  if (this.head === null) {
    return null;
  } else {
    if (this.head.next === null) {
      let val = this.head.val;
      this.head = null;
      return val;
    } else {
      let preNode = this.head;
      while (preNode.next.next) {
        preNode = preNode.next;
      }
      let val = preNode.next.val;
      preNode.next === null;
      return val;
    }
  }
};

let a = new LinkList();
a.push(1);
console.log(a.pop());
console.log(a, a.isEmpty());
