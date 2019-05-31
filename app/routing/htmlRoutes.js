var routes = require("express").Router();
var path = require("path");

// Front End Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
routes.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

routes.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = routes;
