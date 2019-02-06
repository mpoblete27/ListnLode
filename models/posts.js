var Posts = sequelize.define('posts', {
    post_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    topic_id: {
        type: sequelize.INTEGER
    },
    user_id: {
        type: sequelize.INTEGER
    },
    users_in_post: {
        type: sequelize.INTEGER
    },
    post_message: {
        type: sequelize.STRING
    }
});