module.exports = function(sequelize, DataTypes) {
var Pins = sequelize.define('pins', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    track_name: {
        type: DataTypes.STRING
    },
    user_id: {
        type: DataTypes.INTEGER
    },
    pin_url: {
        type: DataTypes.STRING
    }
});

Pins.associate = function(models) {
    Pins.belongsTo(models.Uploads, {
        foreignKey: {
            allowNull: false
        }
    });
    Pins.belongsTo(models.Users, {
        foreignKey: {
            allowNull: false
        }
    });
};

// var pinArray = [];

return Pins;
};