var express = require("express");
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes");

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Set up the middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up request handler to use routers defined in apiRoutes and htmlRoutes
app.use("/", [apiRoutes, htmlRoutes]);

// Start the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
