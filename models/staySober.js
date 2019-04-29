//StaySober drinks js

module.exports = function(sequelize, DataTypes) {
    var soberDrink = sequelize.define("Stay Sober Drink", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [50]
        }
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [500]
      },
    });

      return Post;
    };
   