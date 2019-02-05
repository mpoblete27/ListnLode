var Users = sequelize.define('users', {
    user_id: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
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