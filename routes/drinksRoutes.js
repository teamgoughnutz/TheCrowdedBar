//Les Drinks Routes

var db = require("../models");

//Routes
module.exports = function (app) {

    //Get Drunk
    app.get("/api/getdrunk", function (req, res) {
        // Add sequelize code to find all GETDRUNK drinks and return the result to the user with res.json
        db.Drinks.findAll({
           
        }).then(function (dbGetDrunk) {
            res.json(dbGetDrunk);
        })
            .catch(err => {
                console.log(err.message);
                res.send(500);
            });
    });

    app.get("/api/getdrunk/:id", function (req, res) {
        // Add sequelize code to find all GETDRUNK drinks and return the result to the user with res.json
        db.Drinks.findAll({
            where: {
            id: []
            }
        }).then(function (dbGetDrunk) {
            res.json(dbGetDrunk);
        })
            .catch(err => {
                console.log(err.message);
                res.send(500);
            });
    });

    app.post("/api/getdrunk", function (req, res) {
        // Add sequelize code for creating a drink using req.body,
        db.Drinks.create({
            name: req.body.name,
            body: req.body.body,
            CategoryId: 1

            // then return the result using res.json
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });

    //Stay Sober

    app.get("/api/staysober", function (req, res) {
        // Add sequelize code to find all staysober drinks and return the result to the user with res.json
        db.Category.findAll({
            where: {
                CategoryId: 2
            }
        }).then(function (dbstaySober) {
            res.json(dbstaySober);
        })
            .catch(err => {
                console.log(err.message);
                res.send(500);
            });
    });

    app.post("/api/staysober", function (req, res) {
        // Add sequelize code for creating a drink using req.body,
        db.Drinks.create({
            name: req.body.name,
            body: req.body.body,
            CategoryId: 2

            // then return the result using res.json
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });
}
