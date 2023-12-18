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
    }
  }
  Order.init({
    order_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.UUID
    },
    user_id:{
      type: Sequelize.DataTypes.UUID,
      allowNull: false,
    },
    product_id:{
      type: Sequelize.DataTypes.UUID,
      allowNull: false,
    },
    total_quantity: {
      type: Sequelize.STRING
    },
    total_price: {
      type: Sequelize.STRING
    },
    arrive: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};