var Users = sequelize.define('users', {
    user_id: {
      type: Sequelize.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    pins_liked: {
      type: Sequelize.INTEGER
    },
    number_of_uploads: {
      type: Sequelize.INTEGER
    },
    number_of_pins: {
        type: Sequelize.INTEGER
      },
      number_of_posts: {
        type: Sequelize.INTEGER
      }
    });