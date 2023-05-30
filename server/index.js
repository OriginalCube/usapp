const express = require("express"),
  PORT = 5000,
  app = express();
app.get("/api/v1", (req, res) => {
  res.send("hello !!!!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/v1/login", (req, res) => {
  const data = req.body;
  res.send(data);
});

app.post("/api/v1/register", (req, res) => {
  const data = req.body;
  console.log(data);
  res.send(data);
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
