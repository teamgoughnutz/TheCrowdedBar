module.exports = function (sequelize, DataTypes) {
    var Nondrink = sequelize.define("Nondrink", {
      title: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 140]
        },
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        validate: {
          len: [1, 400]
        },
        allowNull: false,
      },
      feelings: {
        type: DataTypes.STRING,
        
      }
  
  
    });
    return Nondrink;
  };