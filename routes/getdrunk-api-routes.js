//GetDrunk API Routes

//Dependencies
var db = require("../models");

//Routes
module.exports = function (app) {
    //GET route for returning ALL DRINKS in the GETDRUNK category
    app.get("/api/getdrunk", function (req, res) {
        // Add sequelize code to find all GETDRUNK drinks and return the result to the user with res.json
        db.GetDrunk.findAll({}).then(function (dbGetDrunk) {
            res.json(dbGetDrunk);
        })
            .catch(err => {
                console.log(err.message);
                res.send(500);
            });
    });

    //WORK ON THIS/THESE!!

    //GET route for returning all drinks in the GETDRUNK category
    //3 subcats are Angry, Sad, Happy
    app.get("/api/getdrunk/:category", function (req, res) {
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
}


//POST route for creating a new GETDRUNK drink
app.drink("/api/drinks/getdrunk", function (req, res) {
    // Add sequelize code for creating a drink using req.body,
    db.Drink.create({
        name: req.body.name,
        ingredients: req.body.ingredients,
        category: req.body.category,
        feeling: req.body.feeling
        // then return the result using res.json
    }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
})