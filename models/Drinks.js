//GetDrunk drinks js

module.exports = function (sequelize, DataTypes) {
  var Drinks = sequelize.define("Drinks", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [500]
    }
  });

  return Drinks;
};