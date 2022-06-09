const { Router } = require("express");
const router = new Router();
// Models
const Product = require("../models").product;
const Category = require("../models").category;

// Get all products
router.get("/", async (req, res, next) => {
  const limit = req.params.limit;
  try {
    const products = await Product.findAndCountAll({
      limit: 5,
      offset: 0,
      // where: {
      //   categoryId: 4,
      // },
    });
    res.send(products);
    console.log(products);
  } catch (e) {
    next(e);
  }
});

// Get product by Id
router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const oneProduct = await Product.findByPk(id, { include: Category });
    res.send(oneProduct);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
