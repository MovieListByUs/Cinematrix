module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('movie', {
    name: DataTypes.TEXT,
    cats: {
      type: DataTypes.TEXT,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
    age: DataTypes.INTEGER,
    time: DataTypes.STRING,
  });
  return Movies;
};
