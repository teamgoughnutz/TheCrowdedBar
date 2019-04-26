module.exports = function (sequelize, DataTypes) {
    var Nondrink = sequelize.define("Nondrink", {
      title: {
        type: DataTypes.STRING(140),
        allowNull: false,
        validate: {
          len: [1,140]
        }
      },
      body: {
        type: DataTypes.TEXT(400),
        allowNull: false,
        len: [1]
      },
      catergory: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Stay Sober"
      }
  
    });
    
  
    return Nondrink;
    
  };