const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/", routes);

app.get("/", (req, res) => {
  return res.send("Sever started");
});

app.listen(5000, () => {
  console.log("Sever listening at port 5000");
});
