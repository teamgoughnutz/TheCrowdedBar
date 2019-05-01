//Les Category Routes

var db = require("../models");

module.exports = function(app) {
  app.get("/api/category", function(req, res) {
    db.Category.findAll({
      include: [db.Drinks]
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.get("/api/category/:id", function(req, res) {
    db.Category.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Drinks]
    }).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });

  app.post("/api/category", function(req, res) {
    db.Category.create(req.body).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });
};