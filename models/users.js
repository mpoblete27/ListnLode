module.exports = function(sequelize, DataTypes) {
var Users = sequelize.define('users', {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pins_liked: {
      type: DataTypes.INTEGER
    },
    number_of_uploads: {
      type: DataTypes.INTEGER
    },
    number_of_pins: {
        type: DataTypes.INTEGER
      },
      number_of_posts: {
        type: DataTypes.INTEGER
      }
    });

  Users.associate = function(models) {
    Users.hasMany(models.Pins, {
      onDelete: 'cascade'
    });
    Users.hasMany(models.Upload, {
      onDelete: 'cascade'
    });
    Users.hasMany(models.Posts, {
      onDelete: 'cascade'
    })

  }

  return Users;
};