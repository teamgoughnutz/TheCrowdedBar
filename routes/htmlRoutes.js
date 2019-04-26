<<<<<<< HEAD
//The Crowded Bar HTML Routes

var db = require("../models");
=======
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
>>>>>>> ddavidson

module.exports = function(app) {
  app.get("/", function(req, res) {
<<<<<<< HEAD
    db.Drink.findAll({}).then(function(dbDrinks) {
      res.render("index", {
        msg: "NORM!!",
        drinks: dbDrinks
=======
    db.Drink.findAll({}).then(function(dbDrink) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbDrink
>>>>>>> ddavidson
      });
    });
  });

  //WTF??
  // Load example page and pass in an example by id
<<<<<<< HEAD
  app.get("/drink/:id", function(req, res) {
    db.Drink.findOne({ where: { id: req.params.id } }).then(function(dbDrink) {
=======
  app.get("/example/:id", function(req, res) {
    db.Drink.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
>>>>>>> ddavidson
      res.render("example", {
        example: dbDrink
      });
    });
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
