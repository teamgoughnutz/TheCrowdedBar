require("dotenv").config();
var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Middleware for authenication
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({ secret: process.env.SECRET, resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session()); // manage with cookies

// Routes
require("./routes/api-routes")(app);
require("./routes/htmlroutes")(app);
require("./routes/categoryRoutes")(app);
require("./routes/drinksRoutes")(app);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
