module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define("movie", {
    name: DataTypes.TEXT,
    description: {
      type: DataTypes.TEXT,
    },
    imgUrl: {
      type: DataTypes.STRING,
    },
    year: DataTypes.INTEGER,
    author: DataTypes.TEXT,
    category: DataTypes.TEXT,
    time: DataTypes.INTEGER,
  });
  return Movies;
};
