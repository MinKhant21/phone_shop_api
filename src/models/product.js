'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category,{
        foreignKey:'category_id',
      })
    }
  }
  Product.init({
    product_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    category_id: {
      type: DataTypes.UUID,
      allowNull:false
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    quantity: {
      type: DataTypes.STRING
    },
    buy_price: {
      type: DataTypes.STRING
    },
    sell_price: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};