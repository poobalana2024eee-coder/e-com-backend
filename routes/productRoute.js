const express = require("express");
const { getProduct, postProduct, deleteProduct, updateProduct } = require("../controller/productController");

const router = express.Router();

router.get("/api/getproduct", getProduct);
router.post("/api/postProduct",postProduct)
router.delete("/api/deleteProduct/:id",deleteProduct)
router.put("/api/updateProduct/:id",updateProduct)
module.exports = router;
