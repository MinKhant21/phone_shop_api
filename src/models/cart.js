'use strict';
const {
  Model
} = require('sequelize');
const uuid = require('uuid')

module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Associate Cart with User
      Cart.belongsTo(models.User, {
        foreignKey: 'user_id', // This should match the field in the Cart model
        onDelete: 'CASCADE' // Define the deletion behavior if the associated User is deleted
      });

      // Associate Cart with Product
      Cart.belongsTo(models.Product, {
        foreignKey: 'product_id', // This should match the field in the Cart model
        onDelete: 'CASCADE' // Define the deletion behavior if the associated Product is deleted
      });
    }
  }
  Cart.init({
    cart_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: () => uuid.v4(),
    },
    user_id:{
      type:DataTypes.UUID,
      allowNull: false,
    },
    product_id:{
      type: DataTypes.UUID,
      allowNull: false,
    },
    total_quantity: {
      type: DataTypes.STRING
    },
    total_price: {
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
    modelName: 'Cart',
  });
  return Cart;
};