import { ADD_FIRST_PRODUCT, ADD_NEW_PRODUCT, DECREASE_QUANTITY, INCREASE_QUANTITY } from "../constants/cart.constants";

const initialState = {
    user: null,
    pending: false,
    error: null,
    // cart: [{ product: null, quantity: null }],//{product:...,quantity:...}
    cart:[]
}

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FIRST_PRODUCT:
            state.cart = [{ product: action.product, quantity: action.quantity }]
            console.log(state.cart)
            break;
        case ADD_NEW_PRODUCT:
            state.cart.push({ product: action.product, quantity: action.quantity })
            console.log(state.cart)
            break;
        case INCREASE_QUANTITY:
            state.cart[action.index].quantity++
            console.log(state.cart)
            break;
        case DECREASE_QUANTITY:
            state.cart[action.index].quantity--
            console.log(state.cart)
            break;
        default:
            break;
    }

    return { ...state };
}