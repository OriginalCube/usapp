require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT,
  app = express();
app.get("/api/v1", (req, res) => {
  res.send("hello !!!!");
});
const connectDb = require("./config/db");
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "https://localhost:3000" } });

connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("disconnect", () => console.log("user disconnected"));
});

app.post("/api/v1/login", (req, res) => {
  const data = req.body;
  res.send(data);
});

app.use("/api/v1/accounts", require("./routes/Database"));

server.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
