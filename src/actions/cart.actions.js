import { ADD_QUANTITY, ADD_NEW_PRODUCT, ADD_FIRST_PRODUCT } from "../constants/cart.constants"
export const addToCart = (cart, paramProductId) => {
    if (cart[0].productId === "") {
        return {
            type: ADD_FIRST_PRODUCT,
            productId: paramProductId,
            quantity: 1
        }
    }
    else {
        for (let index = 0; index < cart.length; index++) {
            if (paramProductId === cart[index].productId) {
                return {
                    type: ADD_QUANTITY,
                    index: index,
                }
            }
        }
    }
    return {
        type: ADD_NEW_PRODUCT,
        productId: paramProductId,
        quantity: 1,
    }
   
}