var Type = {};
for (let i = 0, type; (type = ["String", "Array", "Number"][i++]); ) {
  (function(type) {
    Type["is" + type] = function(obj) {
      if (Object.prototype.toString.call(obj) === "[object " + type + "]")
        return true;
      else return false;
    };
  })(type);
}
console.log(Type.isString([]));
