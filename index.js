const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/Products");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", __dirname + "/templates/views");
app.set("view engine", "twig");

app.get("/", (req, res) => {
  res.render("home", {
    name: "World!",
    users: [
      { name: "Jeff Deutsch", email: "jadeutsch@student.fullsail.edu" },
      { name: "Scott Oxhorn", email: "sigtauguy@gmail.com" },
    ],
  });
});

app.use("/products", productRouter);

app.listen(3000);
