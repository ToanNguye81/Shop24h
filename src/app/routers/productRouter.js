// Khai báo thư viện ExpressJS
const express = require("express");

// Khai báo router app
const router = express.Router();

// Import product middleware
const productMiddleware = require("../middlewares/productMiddleware");

// Import course controller
const productController = require("../controllers/productController")

router.get("/products", productMiddleware.getAllProductMiddleware, productController.getAllProduct)

router.post("/products", productMiddleware.createProductMiddleware, productController.createProduct)

router.get("/products/:productId", productMiddleware.getDetailProductMiddleware, productController.getProductById)

router.put("/products/:productId", productMiddleware.updateProductMiddleware, productController.updateProductById)

router.delete("/products/:productId", productMiddleware.deleteProductMiddleware, productController.deleteProductById)

module.exports = router;