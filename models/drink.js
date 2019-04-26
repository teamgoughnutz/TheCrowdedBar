module.exports = function(sequelize, DataTypes) {
  var Drink = sequelize.define("Drink", {
    title: DataTypes.STRING,
    body: DataTypes.TEXT,
    catergory: DataTypes.STRING

  });
  return Drink;
};
