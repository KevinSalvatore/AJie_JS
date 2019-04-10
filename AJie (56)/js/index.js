function AJ(arr) {
  this.nodeList = arr;
}

AJ.prototype.css = function(styleObj) {
  this.nodeList.forEach(node => {
    for (const key in styleObj) {
      eval("node.style." + key + " = styleObj." + key);
    }
  });
  return this;
};

AJ.prototype.html = function(html) {
  this.nodeList.forEach(node => {
    node.innerHTML = html;
  });
  return this;
};

var factory = {};

factory.wrapper = function(nodeList) {
  return new AJ(nodeList);
};

var $ = function(parameter) {
  if (typeof parameter === "function") {
    let callback = parameter;
    document.addEventListener(
      "DOMContentLoaded",
      function() {
        callback();
      },
      false
    );
  } else if (typeof parameter === "string") {
    let selector = parameter;
    return factory.wrapper(DOMEle(selector));
  } else {
    return;
  }
};

function DOMEle(string) {
  let selectors = string.split(" ");
  let range = [document];
  selectors.forEach(selector => {
    let temp = [];
    range.forEach(ele => {
      temp = temp.concat(Array.from(ele.querySelectorAll(selector)));
    });
    range = temp;
  });
  return range;
}

$("#container .content div")
  .css({
    width: "200px",
    height: "200px",
    backgroundColor: "grey"
  })
  .html("我爱你！");
