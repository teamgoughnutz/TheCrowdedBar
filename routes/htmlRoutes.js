//The Crowded Bar HTML Routes

var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Drink.findAll({}).then(function(dbDrinks) {
      res.render("index", {
        msg: "NORM!!",
        drinks: dbDrinks
      });
    });
  });

  //WTF??
  // Load example page and pass in an example by id
  app.get("/drink/:id", function(req, res) {
    db.Drink.findOne({ where: { id: req.params.id } }).then(function(dbDrink) {
      res.render("example", {
        example: dbDrink
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
