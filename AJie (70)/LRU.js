var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.obj = {};
  this.arr = [];
};
LRUCache.prototype.get = function(key) {
  if (this.arr.indexOf(key) !== -1) {
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return this.obj[key];
  } else {
    console.log("No Result!");
    return;
  }
};
LRUCache.prototype.set = function(key, value) {
  if (this.obj[key]) {
    this.obj[key] = value;
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
  } else {
    if (this.capacity === this.arr.length) {
      var k = this.arr.pop();
      delete this.obj[k];
    }
    this.obj[key] = value;
    this.arr.unshift(key);
  }
};

var LRUCacheExample = new LRUCache(5);
LRUCacheExample.set(1, "a");
LRUCacheExample.set(2, "b");
LRUCacheExample.set(3, "c");
LRUCacheExample.set(4, "d");
LRUCacheExample.set(1, "e");
LRUCacheExample.set(5, "f");
LRUCacheExample.set(6, "g");
console.log(LRUCacheExample.obj);
console.log(LRUCacheExample.get(1));
console.log(LRUCacheExample.get(6));
console.log(LRUCacheExample.get(2));


var obj = {
  1: "a",
  2: "b"
}