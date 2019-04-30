//StaySober API Routes

//Dependencies
var db = require("../models");

//Routes
module.exports = function (app) {
    //GET route for returning all drinks in STAYSOBER category
    app.get("/api/staysober", function (req, res) {
        db.StaySober.findAll({}).then(function (dbStaySober) {
            res.json(dbStaySober)
                .catch(err => {
                    console.log(err.message);
                    res.send(500);
                });
        });
    });

    //POST route for creating a new STAYSOBER drink
    app.post("/api/staysober", function (req, res) {
        // Add sequelize code for creating a drink using req.body,
        db.soberDrink.create({
            name: req.body.name,
            //do i need to default this one for staysober?? if so, do it in the models
            category: req.body.category,
            recipe: req.body.recipe,
            // then return the result using res.json
        }).then(result => res.json(result))
            .catch(function (err) {
                console.log(err.message);
                res.send(500);
            });
    });
};
