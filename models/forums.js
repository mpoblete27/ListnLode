var Forums = sequelize.define('forums', {
    post_id: {
        type: sequelize.INTEGER
    },
    topic_name: {
        type: sequelize.STRING
    },
    topic_id: {
        type: sequelize.INTEGER
    },
    user_id: {
        type: sequelize.INTEGER
    },
    users_in_topic: {
        type: sequelize.INTEGER
    }
});