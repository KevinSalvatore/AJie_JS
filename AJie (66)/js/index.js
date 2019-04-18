const fs = require("fs");
const files = [];
const walk = function(path) {
  fs.readdirSync(path).forEach(item => {
    console.log(item);
  });
  console.log("***")
  fs.readdir(path, function(err, items) {
    console.log(items);
  });
  console.log("###")
};
walk("../");
console.log(files);
