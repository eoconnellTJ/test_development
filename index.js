var express = require("express");
var app = express();
var pg = require("pg");
var products = require("./data/products");
var footerlinks = require("./data/footer");

app.set("port", process.env.PORT || 5000);

app.use(express.static(__dirname + "/public"));

// views is directory for all template files
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(request, response) {
  response.render("pages/index", { footerlinks });
});

app.get("/category", (req, res) => {
  res.render("pages/category", { footerlinks });
});

app.get("/product", (req, res) => {
  res.render("pages/product", { products, footerlinks });
});

app.get("/custom", (req, res) => {
  res.render("pages/custom", { footerlinks });
});

app.get("/cart", (req, res) => {
  res.render("pages/cart", { footerlinks });
});

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"));
});
