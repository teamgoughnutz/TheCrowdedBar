//The Crowded Bar API Routes

//Dependencies
var db = require("../models");

//Routes
module.exports = function (app) {
  //GET route for all drinks
  app.get("/api/drinks", function (req, res) {
    //sequelize code to find all drinks and return them to the user with res.json
    db.Drink.findAll({}).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });

  //GET route for returning all drinks of a specific category (either GETDRUNK or STAYSOBER)
  app.get("/api/drinks/category/:category", function (req, res) {
    // Add sequelize code to find all drinks where the category is equal to req.params.category,
    db.Drink.findAll({
      where: {
        category: req.params.category
      }
      // return the result to the user with res.json
    }).then(function (result) {
      res.json(result)
    })
      .catch(err => {
        console.log(err.message);
        res.send(500);
      });
  });

  //GET route for retrieving a single drink
  app.get("/api/drinks/:id", function (req, res) {
    // Add sequelize code to find a single drink where the id is equal to req.params.id,
    db.Drink.findOne({
      where: {
        id: req.params.id
      }
      // return the result to the user with res.json
    }).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });
};