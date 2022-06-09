"use strict";

const product = require("../models/product");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("reviews", "productId", {
      type: Sequelize.INTEGER,
      references: {
        model: "products",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("reviews", "productId");
  },
};
