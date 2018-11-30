// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Movies = require("../models/movies.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:movies?", function(req, res) {
    if (req.params.movies) {
      // Display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Movies.findOne({
        where: {
          routeName: req.params.movies
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Movies.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var movie = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = movie.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    Movies.create({
      routeName: routeName,
      movie_name: movie.movie_name,
      movie_rated: movie.movie_rated,
      duration: movie.duration,
      
    });

    res.status(204).end();
  });
};
