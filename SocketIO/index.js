import express from "express";
import morgan from "morgan";
import path from "path";
import SocketIO from "socket.io";

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(morgan("dev"));

app.get("/", (request, response) => {
  response.render("index");
});

let server = app.listen(3000, () => {
  console.log("OK, Done!");
});

let io = SocketIO(server);
