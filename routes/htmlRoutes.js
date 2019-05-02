//The Crowded Bar HTML Routes

var db = require("../models");
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../private/homepage.html"));
  });

  //route to Get Drunk
  // app.get("/getdrunk", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../private/getdrunk.html"));          will add if we can get these to work
  // });

  //route to Stay Sober
  // app.get("/staysober", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../private/virgin.html"));                 will add if we can get these to work
  // });

  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the members page 
    if (req.user) {
      res.redirect("../private/homepage.html");
    }
    res.sendFile(path.join(__dirname, "../private/signup.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../private/homepage.html"));
  });
};



