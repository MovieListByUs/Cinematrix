module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
      category: {
        type: DataTypes.TEXT,
      },
    });
    return category;
  };