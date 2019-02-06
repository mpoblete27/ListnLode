module.exports = function(sequelize, DataTypes) {
var Uploads = sequelize.define('uploads', {
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
    number_of_pins: {
        type: DataTypes.STRING
    },
    upload_url: {
        type: DataTypes.STRING
    }
});

Uploads.associate = function(models) {
    Uploads.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
    Uploads.hasMany(models.Pins, {
        onDelete: "cascade"
    })
  };

// var songArray = [];
// 
// var songToUpload = ??;
// 
// var currentSong = songArray[?];
// 
// 
// var uploadSong = (function(uploads), {
//  
// (songArray.push(songToUpload); 
// 
// });
// 
// 
// var play = (function(uploads), {
// currentSong = songArray[?];
// if (playingSong === true{
// play(); };
// else { console.log("that is not playing."); }
// 
// });
// 
// 
return Uploads;
};
