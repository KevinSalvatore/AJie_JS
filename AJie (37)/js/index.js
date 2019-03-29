Function.prototype.myCall = function(obj) {
  let object = obj || global;
  object.fn = this;
  var args = [];
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  let result = eval("object.fn(" + args + ")");
  delete object.fn;
  return result;
};

function fn1() {
  console.log(1);
}
function fn2() {
  console.log(2);
}

fn1.myCall.myCall(fn2);
Function.prototype.myCall.myCall(fn2);
fn2.myCall();

// function fn1(a) {
//   console.log(a);
// }

// function fn2() {
//   console.log("*");
// }

// fn1.myCall(fn2, "HelloWorld!");