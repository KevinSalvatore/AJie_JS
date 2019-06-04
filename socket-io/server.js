const server = require("http").createServer();

const io = require("socket.io")(server);

server.listen(3000);
