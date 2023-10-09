const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const chats = require("./data/data");
const port = process.env.PORT || 5000;

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
