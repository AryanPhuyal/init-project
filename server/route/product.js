const express = require('express')
// const {createCategory,deleteCategory,getCategory,updateCategory} = require('../controller/catagory')
const { createProduct,deleteProduct,getProducts,updateProduct} = require('../controller/product')
const authMiddleware = require("../middleware/auth");

const router = express.Router();
router.get('/', getProducts);
router.post('/', authMiddleware,createProduct);
router.put('/:id',authMiddleware, updateProduct);
router.delete('/:id',authMiddleware, deleteProduct)


module.exports = router;