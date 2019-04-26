var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/drinks", function(req, res) {
    db.Drink.findAll({}).then(function(drinks) {
      res.json(drinks);
    });
    console.log(drinks);
  });
  
};

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Drink.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Drink.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
// };
