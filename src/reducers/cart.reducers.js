import { ADD_FIRST_PRODUCT, ADD_NEW_PRODUCT, DECREASE_QUANTITY, INCREASE_QUANTITY,CHANGE_CART_COST } from "../constants/cart.constants";

const initialState = {
    user: null,
    pending: false,
    error: null,
    cart:[],
    cartCost:0,
}

export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FIRST_PRODUCT:
            return {
                ...state,
                cart: [{ product: action.product, quantity: action.quantity }]
            };
        case ADD_NEW_PRODUCT:
            return {
                ...state,
                cart: [...state.cart, { product: action.product, quantity: action.quantity }]
            };
        case INCREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item, index) => {
                    if (index === action.index) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    return item;
                })
            };
        case CHANGE_CART_COST:
            return {
                ...state,
                cartCost: action.cartCost
            };
        case DECREASE_QUANTITY:
            if (state.cart[action.index].quantity <= 1) {
                return {
                    ...state,
                    cart: state.cart.filter((item, index) => index !== action.index)
                };
            }
            return {
                ...state,
                cart: state.cart.map((item, index) => {
                    if (index === action.index) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    return item;
                })
            };
        default:
            return state;
    }
}
