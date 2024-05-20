module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define("movie", {
    name: DataTypes.TEXT,
    description: {
      type: DataTypes.TEXT,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
    age: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
  });
  return Movies;
};
