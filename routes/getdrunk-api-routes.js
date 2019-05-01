//GetDrunk API Routes

//Dependencies
var db = require("../models");

//Routes
module.exports = function (app) {
    //GET route for returning ALL DRINKS in the GETDRUNK category
    app.get("/api/getdrunk", function (req, res) {
        // Add sequelize code to find all GETDRUNK drinks and return the result to the user with res.json
        db.Category.findAll({ where: {
            CategoryId: 1
        }}).then(function (dbGetDrunk) {
            res.json(dbGetDrunk);
        })
            .catch(err => {
                console.log(err.message);
                res.send(500);
            });
    });

//POST route for creating a new GETDRUNK drink
app.post("/api/getdrunk", function (req, res) {
    // Add sequelize code for creating a drink using req.body,
    db.drunkDrink.create({
        name: req.body.name,
        body: req.body.body,
        
        // then return the result using res.json
    }).then(result => res.json(result))
        .catch(function (err) {
            console.log(err.message);
            res.send(500);
        });
});
}


