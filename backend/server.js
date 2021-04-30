const express=require('express')
const connectDb=require('./config/db') 
const dotenv =require('dotenv')
const colors =require('colors')
const {products}=require('./data/products')

dotenv.config()

connectDb()

const app=express()
 
app.get('/',(req,res)=>{
    res.send("App is running...")
})
app.get('/api/products',(req,res)=>{
    res.json(products)
})
app.get('/api/products/:id',(req,res)=>{
    const product=products.find(p=>p._id==req.params.id)
    res.json(product)
})

app.listen(5000,console.log('Server running on port 5000'))