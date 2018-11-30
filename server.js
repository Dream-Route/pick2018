var express = require('express');
var path = require('path')
var PORT = process.env.PORT || 8080;
var app = express();
var sequelize = require("./config/connection.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

////////////////////////////////???????????///////


//require("../app/routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("../app/routes/html-routes.js")(app);

sequelize.query("SELECT * FROM movies").then(function(result){
    console.log(result);
})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
