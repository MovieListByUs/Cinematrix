const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('movies', 'root', 'roots', {
  host: 'localhost',
  dialect: 'mysql',



});

const db = {};
db.sequelize = sequelize;


// db.Series = require("../../models/seriesModels.js")(sequelize, DataTypes);
db.Movies = require("../models/movies.js")(sequelize, DataTypes);
db.Users = require("../models/User.js")(sequelize, DataTypes);

db.MyList = require("../models/MyList.js")(sequelize, DataTypes);

db.Users.hasMany(db.Movies);
db.Movies.belongsTo(db.Users);

db.Users.belongsToMany(db.Movies, { through: "MyList" });
db.Movies.belongsToMany(db.Users, { through: "MyList" });






sequelize
  .authenticate()
  .then(() => {

    console.log('all good');


  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });


// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("Database & tables created!");
//   })
//   .catch((error) => {
//     console.error("Error creating database & tables:", error);
//   });


module.exports = db;
