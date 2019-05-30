const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    const url = req.url;
    if (/^\/static\//.test(url)) {
      staticServer(req, res);
      return;
    }
    fs.readFile("./static/index.html", "binary", (err, file) => {
      res.write(file, "binary");
      res.end();
    });
  })
  .listen(3000, () => {
    console.log("OK!");
  });
function staticServer(req, res) {
  let url = req.url;
  if (url === "/static/") url += "index.html";
  const filePath = path.join(__dirname, url);
  fs.exists(filePath, exists => {
    if (!exists) {
      res.end("Not Found!");
    } else {
      fs.readFile(filePath, "binary", (err, file) => {
        if (!err) {
          res.write(file, "binary");
          res.end();
        }
      });
    }
  });
}
