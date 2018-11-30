// Set up MySQL connection.
//var mysql = require("mysql");


//////////////////////

// Dependencies
var Sequelize = require("sequelize");
var sequelize;
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
if(process.env.JAWSDB_URL){
  sequelize = new Sequelize(process.env.JAWSDB_URL)
}else{
  sequelize = new Sequelize("pickAflick", "root", "Automata90!", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
}


// Exports the connection for other files to use
module.exports = sequelize;


