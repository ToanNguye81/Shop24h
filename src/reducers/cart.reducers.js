import { ADD_FIRST_PRODUCT, ADD_NEW_PRODUCT, ADD_QUANTITY } from "../constants/cart.constants";

const initialState = {
    user: null,
    pending: false,
    error: null,
    cart: [{product:null,quantity:null}],//{product:...,quantity:...}
}

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FIRST_PRODUCT:
            state.cart=[{product:action.product, quantity:action.quantity}]
            console.log(state.cart)
            break;
        case ADD_NEW_PRODUCT:
            state.cart.push({ product: action.product, quantity: action.quantity })
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