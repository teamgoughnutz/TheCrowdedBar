module.exports = function(sequelize, DataTypes) {
  var Drink = sequelize.define("Drink", {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1,140]
      },
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      validate:{
        len:[1,400]
      },
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Get Drunk"
    }

  });
  return Drink;
};
