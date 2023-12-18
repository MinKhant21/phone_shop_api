'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsToMany(models.User, {
        foreignKey: 'user_id', // This should match the field in the Cart model
        onDelete: 'CASCADE' // Define the deletion behavior if the associated User is deleted
      });

      // Associate Cart with Product
      Order.belongsTo(models.Product, {
        foreignKey: 'product_id', // This should match the field in the Cart model
        onDelete: 'CASCADE' // Define the deletion behavior if the associated Product is deleted
      });
    }
  }
  Order.init({
    order_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    user_id:{
      type: DataTypes.UUID,
      allowNull: false,
    },
    product_id:{
      type:DataTypes.UUID,
      allowNull: false,
    },
    total_quantity: {
      type: DataTypes.STRING
    },
    total_price: {
      type: DataTypes.STRING
    },
    arrive: {
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
    modelName: 'Order',
  });
  return Order;
};