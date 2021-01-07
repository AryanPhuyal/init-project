const express = require('express')
const router = express.Router();
// const { createProduct, getProducts, deleteProduct, updateProduct } = require('../controller/product')
const {createCategory,deleteCategory,getCategory,updateCategory} =require('../controller/catagory')
const authMiddleware = require('../middleware/auth')

router.get('/', getCategory);
router.delete('/:id',authMiddleware, deleteCategory);
router.put('/:id',authMiddleware, updateCategory)
router.post('/',authMiddleware, createCategory)

module.exports = router;