const express = require(`express`);
const Product = require(`../models/product.model`);
const router = express.Router();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require(`../controllers/product.controller`);

router.get("/", getAllProducts);
// get product by id
router.get("/:id", getProductById);
// create new product
router.post("/", createProduct);
// update existing product 
router.put("/:id", updateProduct);
//delete product
router.delete("/:id", deleteProduct);

module.exports = router;