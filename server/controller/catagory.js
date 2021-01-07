const asyncHandler = require('express-async-handler')
const Category = require('../modal/Category')

exports.createCategory = asyncHandler(async (req,res)=>{
    const title = req.body.title.toLowerCase();
    const user = req.user._id;
    const searchCategory = await Category.findOne({title:title})
    if(searchCategory) {
        res.status(409)
        throw new Error("Category already exists")
    }
    const category = new Category({
        title,user
    })
    await category.save();
    res.json({success:true,message:"Successfully added category",data:category})
})

exports.updateCategory =  asyncHandler(async(req,res)=>{
    const title = req.body.title.toLowerCase();
    const user = req.user._id;
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if(!category){
        res.status(409)
        throw new Error('Category not found')
    }
    if(category.user !== user){
        res.status(403)
        throw new Error('Action not allowed')
    }
    category.title = title;
    await category.save();
    res.json({success:true,message:"Successfully updated category",data:category})

})

exports.getCategory = asyncHandler(async (req,res)=>{
    const categories = await Category.find()
    res.json({success:true,data:categories})
})
exports.deleteCategory = asyncHandler(async (req,res)=>{
    const categoryId = req.params.id;
    const category = Category.findById(categoryId);
    if(!category){
        res.status(409)
        throw new Error('Category not found')
    }
    await Category.deleteOne({_id:categoryId});
    res.json({success:true,message:"Successfully deleted category"})
})