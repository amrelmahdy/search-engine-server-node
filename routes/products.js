const express = require("express");
const router = express.Router();

const productController = require("./../controllers/product_controller");


router.get("/", productController.getProductsList);
router.get("/faceted-navigator", productController.getFacetedNavigatorData);
router.post("/search", productController.search);
router.post("/search/category", productController.searchByCategory);
router.post("/search/price", productController.searchByPrice);

module.exports = router;