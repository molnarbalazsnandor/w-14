const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  fs.readFile(`${__dirname}/pizza_data.json`, (err, data) => {
    if (err) {
      console.log("hiba:", err);
      res.status(500).send("hibavan");
    } else {
      let pizzaData = JSON.parse(data);
      res.status(200).send(pizzaData);
    }
  });
});

app.listen(9000, (_) => console.log("http://127.0.0.1:9000"));
