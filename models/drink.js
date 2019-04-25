var Sequelize = require('sequelize');
var Model = Sequelize.Model;

module.exports = function(sequelize, DataTypes) {
  
  class Post extends Model {}
  Post.init({
    
    title: {
      type: Sequelize.STRING(160),
      allowNull: false,
      validate: {
        len: [1, 160]
      }
    },
    body: {
      type: Sequelize.TEXT(400),
      allowNull: false,
      validate: {
        len: [1]
      }
      
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Get Drunk"
    }
  }, {
    sequelize,
    modelName: 'Drink'
  });
  return Post
};
