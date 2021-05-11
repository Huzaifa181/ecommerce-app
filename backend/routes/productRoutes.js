const express=require('express')
const asyncHandler=require('express-async-handler')
const Product=require('../models/productModel')

const router =express.Router()


router.get('/',asyncHandler(async (req,res)=>{
    const product=await Product.find({})
    res.json(product)
}))


router.get('/:id',asyncHandler(async (req,res)=>{
    const product=await Product.findById(req.params.id)
    if(product){
        res.json(product)
    }
    else{
        res.status(404)
        // .json({message:'Product not Found'})
        throw new Error("Product Not Found")
    }
}))

module.exports=router