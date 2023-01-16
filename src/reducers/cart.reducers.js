import { ADD_FIRST_PRODUCT, ADD_NEW_PRODUCT, ADD_QUANTITY } from "../constants/cart.constants";

const initialState = {
    user: null,
    pending: false,
    error: null,
    cart: [{productId:"",quantity:""}],//{productId:...,quantity:...}
}

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FIRST_PRODUCT:
            state.cart=[{productId:action.productId, quantity:action.quantity}]
            console.log(state.cart)
            break;
        case ADD_NEW_PRODUCT:
            state.cart.push({ productId: action.productId, quantity: action.quantity })
            console.log(state.cart)
            break;
        case ADD_QUANTITY:
            state.cart[action.index].quantity++
            console.log(state.cart)
            break;
        default:
            break;
    }

    return { ...state };
}