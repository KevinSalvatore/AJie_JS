const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    if (req.url === "/upload" && req.method.toLocaleLowerCase() === "post") {
      const form = new formidable.IncomingForm();
      form.uploadDir = "./static";
      form.parse(req, (err, fields, files) => {
        console.log(fields);
        const oldPath = files.upload.path;
        const fileName = files.upload.name;
        const dirName = path.dirname(oldPath);
        const newPath = path.join(dirName, fileName);
        fs.rename(oldPath, newPath, err => {
          res.writeHead(200, {
            "Content-Type": "text/html"
          });
          res.end("End!");
        });
      });
      return;
    }
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(`
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="upload" id="">
  <input type="text" name="nickname" id="">
  <input type="submit" value="Sub">
</form>
    `);
  })
  .listen(8080, () => {
    console.log("Server is running at 8080");
  });
