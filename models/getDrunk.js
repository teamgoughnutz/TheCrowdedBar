//GetDrunk drinks js

module.exports = function(sequelize, DataTypes) {
    var drunkDrink = sequelize.define("Get Drunk Drink", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50]
        }
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [500]
      },
      feeling: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [5]
      }
    });

      return drunkDrink;
    };