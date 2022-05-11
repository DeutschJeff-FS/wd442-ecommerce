const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Products");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", __dirname + "/templates/views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("home");
});

app.use("/products", productRouter);

app.listen(3000);
