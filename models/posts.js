module.exports = function(sequelize, DataTypes) {
var Posts = sequelize.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    topic_id: {
        type: DataTypes.INTEGER
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    users_in_post: {
        type: DataTypes.INTEGER
    },
    post_message: {
        type: DataTypes.STRING
    }
});

Posts.associate = function(models) {
    Posts.belongsTo(models.Users, {
        foreignKey: {
            allowNull: false
        }
    });
};

// var postArray = [];

    return Posts
};