const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);

app.listen(5000, () => {
  console.log("Sever listening at port 5000");
});