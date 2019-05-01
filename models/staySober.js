//StaySober drinks js

module.exports = function(sequelize, DataTypes) {
    var soberDrink = sequelize.define("Stay Sober Drink", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [50]
        },
        category: "Stay Sober"
      },
      recipe: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [500]
      },
    });

  return soberDrink;
};
