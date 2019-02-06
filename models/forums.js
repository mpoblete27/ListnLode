var Forums = sequelize.define('forums', {
    topic_id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    topic_name: {
        type: sequelize.STRING
    },
    post_id: {
        type: sequelize.INTEGER
    },
    user_id: {
        type: sequelize.INTEGER
    },
    users_in_topic: {
        type: sequelize.INTEGER
    }
});