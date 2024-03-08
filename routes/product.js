"use strict";
const express = require("express");

const product = require("../controler/product");

const router = express.Router();

router.get("/get-products/:type", product.getProducts);
router.get("/get-product/:id", product.getProduct);
router.get("/get-suggested-product", product.suggestedProducts);

module.exports = router;