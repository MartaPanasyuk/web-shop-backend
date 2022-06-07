"use strict";

const category = require("../models/category");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("products", "categoryId", {
      type: Sequelize.INTEGER,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("products", "categoryId");
  },
};
