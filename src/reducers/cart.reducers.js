import { ADD_TO_CART } from "../constants/cart.constants";

const initialState = {
    user: null,
    pending: false,
    error: null,
    cart:[],
}

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log(state.cart)
            state.cart.push(action.newProduct)
            break;
        default:
            break;
    }

    return { ...state };
}