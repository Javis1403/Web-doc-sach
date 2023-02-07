const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

const route = require("./routes");
//const db = require("./config/db");

//ket noi database
//db.connect;
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Web");
    console.log("Ket noi thanh cong");
  } catch (error) {
    console.log("Ket noi that bai");
  }
}

connect();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("combined"));

app.engine(
  "hbs",
  handlebars.engine({ extname: ".hbs", helpers: { sum: (a, b) => a + b } })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//console.log(__dirname);

route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
