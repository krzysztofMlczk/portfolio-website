const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
var path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.resolve("../frontend")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("../frontend/pages/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve("../frontend/pages/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.resolve("../frontend/pages/contact.html"));
});

app.post("/submit-contact", (req, res) => {
  let name = req.body.userName;
  let email = req.body.userEmail;
  let msg = req.body.userMsg;

  console.log(name, email, msg);
});

app.listen(port, function () {
  console.log("Server is running on port " + port);
});
