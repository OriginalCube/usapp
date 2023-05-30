require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT,
  app = express();
app.get("/api/v1", (req, res) => {
  res.send("hello !!!!");
});
const connectDb = require("./config/db");

connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/v1/login", (req, res) => {
  const data = req.body;
  res.send(data);
});

app.use("/api/v1/accounts", require("./routes/Database"));

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
