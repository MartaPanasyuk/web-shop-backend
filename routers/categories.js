const { Router } = require("express");
const router = new Router();
// Models
const Category = require("../models").category;

// Get all categories
router.get("/", async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
