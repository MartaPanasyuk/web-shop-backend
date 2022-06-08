const { Router } = require("express");
const router = new Router();
// Models
const Category = require("../models").category;
const Product = require("../models").product;

// Get all categories
router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (e) {
    next(e);
  }
});

// Get categories by id with the products
router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const oneCategory = await Category.findByPk(id, { include: Product });
    res.send(oneCategory);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
