//The Crowded Bar API Routes
//we will most likley NOT NEED this file for our Project, but for now it's here as a reference for Cris

//Dependencies
var db = require("../models");

<<<<<<< HEAD
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
=======
var passport = require("../config/passport");

module.exports = function(app) {
  // Get all examples
  app.get("/api/drinks", function(req, res) {
    db.Drink.findAll({}).then(function(drinks) {
      res.json(drinks);
    });
   
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        console.log(err);
        res.json(err);
        // res.status(422).json(err.errors[0].message);
>>>>>>> ddavidson
      });
  });
  
};

<<<<<<< HEAD
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
=======
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
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
>>>>>>> ddavidson
  });
};