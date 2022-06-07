"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.category, { foreignKey: "categoryId" });
    }
  }
  product.init(
    {
      title: DataTypes.STRING,
      price: DataTypes.FLOAT,
      description: DataTypes.TEXT,
      rating: DataTypes.FLOAT,
      mainImage: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
