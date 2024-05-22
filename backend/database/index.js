const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("movies", "Selim", "Maken_wochen987", {
  host: "localhost",
  dialect: "mysql",
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Movies = require("../models/movies.js")(sequelize, DataTypes);
db.Users = require("../models/User.js")(sequelize, DataTypes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error("Error creating database & tables:", error);
  });

module.exports = db;
