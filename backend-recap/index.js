require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
app.get("/users", (req, res) => {
  res.send({ name: "Tahmid", age: 22 });
});
// default
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
});
