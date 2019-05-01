//GetDrunk API Routes

//Dependencies
var db = require("../models");

//Routes
module.exports = function (app) {
    //GET route for returning ALL DRINKS in the GETDRUNK category
    app.get("/api/getdrunk", function (req, res) {
        // Add sequelize code to find all GETDRUNK drinks and return the result to the user with res.json
        db.drunkDrink.findAll({}).then(function (dbGetDrunk) {
            res.json(dbGetDrunk);
        })
            .catch(err => {
                console.log(err.message);
                res.send(500);
            });
    });
};

//POST route for creating a new GETDRUNK drink
 app.post("/api/drinks/getdrunk", function (req, res) {
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

//We are tabling this idea for now. If we have time after getting everything else working, we can try working in the "feelings" to GETDRUNK options
//GET route for returning all drinks in the GETDRUNK category
//3 subcats are Angry, Sad, Happy
//app.get("/api/getdrunk/:category", function (req, res) {
// Add sequelize code to find all drinks where the category is equal to req.params.category,
// db.drunkDrink.findAll({
//where: {
//  category: req.params.category
//}
//         // return the result to the user with res.json
//     }).then(function (result) {
//         res.json(result)
//     })
//         .catch(err => {
//             console.log(err.message);
//             res.send(500);
//         });
// });


//Cris TODO - figuring out how to route for feelings assignment
//POST route for creating a new GETDRUNK drink
// app.post("/api/drinks/getdrunk", function (req, res) {
//     // Add sequelize code for creating a drink using req.body,
//     db.drunkDrink.create({
//         name: req.body.name,
//         category: req.body.category,
//         recipe: req.body.recipe,
//         // then return the result using res.json
//     }).then(result => res.json(result))
//         .catch(function (err) {
//             console.log(err.message);
//             res.send(500);
//         });
// });


