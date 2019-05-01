module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    Category.associate = function(models) {
        //association for category to drinks
        Category.hasMany(models.Drinks);
      };

    return Category;
};