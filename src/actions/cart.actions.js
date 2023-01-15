import {ADD_TO_CART} from "../constants/cart.constants"

export const addToCart=(newProduct)=>{
    return {
        type: ADD_TO_CART,
        newProduct:newProduct
    }
}