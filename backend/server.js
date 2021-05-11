const express=require('express')
const connectDb=require('./config/db') 
const dotenv =require('dotenv')
const error=require('./middlewares/errorMiddleware')
const colors =require('colors')
const {products}=require('./data/products')

// Product Routes
const productRoutes=require('./routes/productRoutes')

dotenv.config()

connectDb()

const app=express()
 
app.get('/',(req,res)=>{
    res.send("App is running...")
})

app.use('/api/products',productRoutes)

app.use(error.notFound)

app.use(error.errorHandler)

app.listen(5000,console.log('Server running on port 5000'))