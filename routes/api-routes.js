
var db = require("../models");


module.exports = function (app) {
  app.get("/api/posts", function (req, res) {
    db.Drink.findAll({}).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });

  app.get("/api/posts/category/:category", function (req, res) {
    db.Drink.findAll({
      where: {
        category: req.params.category
      }
    }).then(function (result) {
      res.json(result)
    })
      .catch(err => {
        console.log(err.message);
        res.send(500);
      });
  });

  app.get("/api/posts/:id", function (req, res) {
    db.Drink.findOne({
      where: {
        id: req.params.id
      }
    }).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });

  app.post("/api/posts", function (req, res) {
    db.Drink.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });

  app.delete("/api/posts/:id", function (req, res) {
    db.Drink.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });

  app.put("/api/posts", function (req, res) {
    db.Drink.update({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }, {
        where: {
          id: req.body.id
        }
      }).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });
  app.get("/api/posts", function (req, res) {
    db.Nondrink.findAll({}).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });

  app.get("/api/posts/category/:category", function (req, res) {
    db.Nondrink.findAll({
      where: {
        category: req.params.category
      }
    }).then(function (result) {
      res.json(result)
    })
      .catch(err => {
        console.log(err.message);
        res.send(500);
      });
  });

  app.get("/api/posts/:id", function (req, res) {
    db.Nondrink.findOne({
      where: {
        id: req.params.id
      }
    }).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });

  app.post("/api/posts", function (req, res) {
    db.Nondrink.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });

  app.delete("/api/posts/:id", function (req, res) {
    db.Nondrink.destroy({
      where: {
        id: req.params.id
      }
    }).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });

  app.put("/api/posts", function (req, res) {
    db.Nondrink.update({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    }, {
        where: {
          id: req.body.id
        }
      }).then(result => res.json(result))
      .catch(function (err) {
        console.log(err.message);
        res.send(500);
      });
  });
};
