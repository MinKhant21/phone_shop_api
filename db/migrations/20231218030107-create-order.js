'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};