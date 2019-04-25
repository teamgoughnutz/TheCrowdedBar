module.exports = function (sequelize, DataTypes) {
  var Drink = sequelize.define("Drink", {
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
      defaultValue: "Get Drunk"
    }

  });


  return Drink;

};