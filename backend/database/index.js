const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('movies', 'root', 'roots', {
  host: 'localhost',
  dialect: 'mysql',
});
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.Series = require("../../models/seriesModels.js")(sequelize, DataTypes);
db.Movies = require('../models/movies.js')(sequelize, DataTypes);
db.User = require('../models/user.js')(sequelize, DataTypes);
db.MyList = require('../models/Mylist.js')(sequelize, DataTypes);

db.User.hasMany(db.Movies);
db.Movies.belongsTo(db.User);

db.User.belongsToMany(db.Movies, { through: 'MyList' });
db.Movies.belongsToMany(db.User, { through: 'MyList' });

sequelize
  .authenticate()
  .then(() => {
    console.log('all good');
  })
  .catch((err) => {
    console.error(err);
  });

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log('phrase table created successfully!');
//   })
//   .catch((error) => {
//     console.error('Unable to create table : ', error);
//   });

module.exports = db;
