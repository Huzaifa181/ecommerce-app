import axios from 'axios'
import * as actions from '../constants/cartContants'

export const addToCart=(id, qty)=>async (dispatch,getState)=>{
        const {data} = await axios.get(`/api/products/${id}`)
        dispatch({
            type:actions.CART_ADD_ITEM,
            payload:{
                product:data._id,
                name:data.name,
                image:data.image,
                price:data.price,
                countInStock:data.countInStock,
                qty,
            }
        })
        localStorage.setItem('cartItem',JSON.stringify(getState().cart.cartItems))  
}


export const removeFromCart=(id, qty)=>async (dispatch,getState)=>{
    dispatch({
        type:actions.CART_REMOVE_ITEM,
        payload:id
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}