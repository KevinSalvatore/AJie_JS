const http = require("http");
var i = 0;
http
  .createServer(function(request, response) {
    response.end(`${i++}`);
  })
  .listen(3000);
