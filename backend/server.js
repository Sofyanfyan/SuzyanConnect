const dotenv = require("dotenv");
dotenv.config();
let MongoDB = require("./config/db");
MongoDB();
const express = require("express");
const app = express();
const router = require("./routes/router");
const chats = require("./data/data");
const port = process.env.PORT || 5000;
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
