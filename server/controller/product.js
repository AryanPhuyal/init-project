const asyncHandler = require('express-async-handler')
const Product = require('../modal/Product');

exports.createProduct = asyncHandler(async (req, res) => {
    console.log(req.body)
    const { name, category, price, description } = req.body
    const user = req.user._id;
    const product = new Product({name, category, price, description,user});
    await product.save();
    res.json({success: true, message: "Successfully created user"})
})
exports.updateProduct = asyncHandler(async (req, res) => {
    const {name, price, description} = req.body;
    const productId = req.params.id;
    const user = req.user._id;
    const product = await Product.findById(productId);
    if (!product) {
        res.status(409)
        throw  new Error("Product not exists")
    }
    if (name && name !== '')
        product.name = name;
    if (price && price !== '')
        product.price = price;
    if (description && description !== '')
        product.description = description
    await product.save();
    res.json({success:true,message:"Successfully update product"})

})
exports.getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json({success:true,message:"successfully fetched Product",data:products})

})

// exports.getProduct = asyncHandler(async (req, res) => {
//
// })

exports.deleteProduct = asyncHandler(async (req, res) => {
    const checkProduct = await Product.findById(req.params.id);
    if (!checkProduct) {
        res.status(409)
        throw new Error("Product Not Found")
    }
    if(checkProduct.user !== req.user._id){
        res.status(403)
        throw new Error("Forbidden")
    }
    Product.deleteOne({_id:req.params.id})
})