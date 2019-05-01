//Le Model for Les Drinks

module.exports = function(sequelize, DataTypes) {
    var drunkDrink = sequelize.define("Get Drunk Drink", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1,50]
        }
      },
      category: "", ///////TODO
      subcat: "", ////TODO
      recipe: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [500]
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [500]
    }

  });

  return drunkDrink;
};

//////
//////
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