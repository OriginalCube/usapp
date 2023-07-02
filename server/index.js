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

connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/v1/login", (req, res) => {
  const data = req.body;
  res.send(data);
});

app.use("/api/v1/accounts", require("./routes/Database"));

const mainServer = app.listen(PORT, () =>
  console.log(`start listening on port : ${PORT}`)
);

const io = require("socket.io")(mainServer, { cors: { origin: "*" } });
io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`user ${socket.id} join the room ${data}.`);
  });
  socket.on("disconnect", () => console.log("user disconnected"));
});
