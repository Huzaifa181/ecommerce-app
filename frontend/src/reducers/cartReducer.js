import * as actions from '../constants/cartContants'
export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case actions.CART_ADD_ITEM:
            const item=action.payload
            const existItem=state.cartItems.find(x=>x.product===item.product)
            console.log(action.payload)
            if(existItem){
                return{
                    ...state,
                    cartItems:state.cartItems.map(x=>{
                        return(
                            x.product===existItem.product?item:x
                        )
                    })
                }
            }
            else{
                return{
                    ...state,
                    cartItems:[...state.cartItems,item]
                }
            }
        case actions.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems:state.cartItems.filter(x=>x.product !== action.payload)
            }
        default:
            return state
    }
}
