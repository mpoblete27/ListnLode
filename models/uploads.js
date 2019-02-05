// hi
var Uploads = sequelize.define('uploads', {
    upload_id: {
        type: sequelize.INTEGER
    },
    track_name: {
        type: sequelize.STRING
    },
    user_id: {
        type: sequelize.INTEGER
    },
    number_of_pins: {
        type: sequelize.STRING
    },
    upload_url: {
        type: sequelize.STRING
    }
});