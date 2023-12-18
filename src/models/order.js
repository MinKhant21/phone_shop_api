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