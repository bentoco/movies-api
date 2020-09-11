const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./src/routes");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const db = require("./src/database");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

mongoose
  .connect("mongodb://localhost/movies-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGOOSE: Connected successfully!");
  })
  .catch((err) => {
    console.log("Failed connection!" + err);
  });

app.get("/", function (req, res, next) {
  res.send("Welcome to the Movies API !!!");
  next();
});

app.listen(port, () => {
  console.log(`Movies API works on port ${port}...`);
});
