const { Router } = require("express");
const router = new Router();
// Models
const Product = require("../models").product;
const Review = require("../models").review;

// Get all reviews
router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    res.send(reviews);
  } catch (e) {
    next(e);
  }
});

// Get all reviews per product
router.get("/:productId", async (req, res) => {
  const productId = req.params.productId;
  try {
    const reviews = await Review.findAll({ where: { productId: productId } });
    res.send(reviews);
  } catch (e) {
    console.log(e.message);
  }
});

//Create new review
router.post("/", async (req, res) => {
  try {
    const { name, description, productId } = req.body;
    const newComment = await Review.create({ name, description, productId });
    res.send(newComment);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
