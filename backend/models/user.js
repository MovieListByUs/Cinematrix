module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
        validate: {
          len: [3, 10]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        trim: true,
        validate: {
          isEmail: true,
          len: [7, 20]
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        trim: true,
        validate: {
          len: [7, Infinity]
        }
      },
      profilePhoto: {
        type: DataTypes.JSON,
        defaultValue: {
          url: "",
          publicid: null
        }
      },
      bio: {
        type: DataTypes.STRING
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      isAccountVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return User;
  };