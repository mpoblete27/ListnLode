// hi
var Pins = sequelize.define('pins', {
    pin_id: {
        type: sequelize.INTEGER
    },
    track_name: {
        type: sequelize.STRING
    },
    user_id: {
        type: sequelize.INTEGER
    },
    pin_url: {
        type: sequelize.STRING
    }
});