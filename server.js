var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

// Sets Express 
var app = express();
var PORT = 2121;

// Configure
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// Starts server
// =============================================================
var port = process.env.PORT || 2121;
app.listen(port, function() {
  console.log("App listening on PORT " + PORT);
});
