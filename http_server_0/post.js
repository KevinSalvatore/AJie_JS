const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.method, req.url);
    if (req.method === "POST" && req.url === "/user/") {
      let data = "";
      req.on("data", chunk => {
        data += chunk;
      });
      req.on("end", () => {
        res.end(data);
      });
    }
  })
  .listen(3000, () => {
    console.log("Running");
  });
