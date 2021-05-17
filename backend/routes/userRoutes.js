const express=require('express')
const productControllers=require('../controllers/userControllers')
const router =express.Router()
const {protect}=require('../middlewares/authMiddlewares')

router.post('/login',productControllers.authUser)
router.get('/profile',protect,productControllers.getUSerProfile)
router.get('/',productControllers.registerUser)

module.exports=router