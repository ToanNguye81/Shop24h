import { enqueueSnackbar } from "notistack"
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CHANGE_CART_COST
} from "../constants/cart.constants";

const initialState = {
    user: null,
    pending: false,
    error: null,
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    cartCost: 0,
}


export const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const { product } = action.payload;
            const itemIndexToAdd = state.cart.findIndex((item) => item.product && item.product._id === product._id);

            let newCart;
            if (itemIndexToAdd === -1) {
                // Sản phẩm chưa có trong giỏ hàng
                newCart = [...state.cart, { product: product, quantity: 1 }];
            } else {
                // Sản phẩm đã có trong giỏ hàng
                newCart = [...state.cart];
                newCart[itemIndexToAdd].quantity++;
            }

            localStorage.setItem("cart", JSON.stringify(newCart));
            enqueueSnackbar(`Add product ${product.name} to cart `, { variant: 'success' });
            return { ...state, cart: newCart }; 
        }

        // Giảm số lượng sản phẩm trong giỏ hàng
        case DECREASE_QUANTITY: {
            const productIdToDecrease = action.payload;
            const itemIndexToDecrease = state.cart.findIndex((item) => item.product._id === productIdToDecrease);
            if (itemIndexToDecrease !== -1) {
                const newCart = [...state.cart];
                const newQuantity = newCart[itemIndexToDecrease].quantity - 1;

                if (newQuantity === 0) {
                    newCart.splice(itemIndexToDecrease, 1);
                } else {
                    newCart[itemIndexToDecrease].quantity = newQuantity;
                }

                localStorage.setItem("cart", JSON.stringify(newCart));
                return { ...state, cart: newCart };
            } else {
                return state;
            }
        }

        // Xóa sản phẩm khỏi giỏ hàng
        case REMOVE_FROM_CART:
            const productIdToRemove = action.payload;
            const itemIndexToRemove = state.cart.findIndex((item) => item.product._id === productIdToRemove);

            if (itemIndexToRemove !== -1) {
                // sản phẩm có trong giỏ hàng
                const newCart = [...state.cart];
                newCart.splice(itemIndexToRemove, 1);
                localStorage.setItem("cart", JSON.stringify(newCart));
                return { ...state, cart: newCart };
            } else {
                return state;
            }


        // Thay số lượng sản phẩm trong giỏ hàng
        case UPDATE_QUANTITY:
            const { productIdToUpdate, newQuantity } = action.payload;
            const itemIndexToUpdate = state.cart.findIndex(
                (item) => item.product._id === productIdToUpdate
            );
            let newCart;
            if (itemIndexToUpdate !== -1) {
                // Nếu sản phẩm tồn tại
                newCart = [...state.cart];
                newCart[itemIndexToUpdate].quantity = newQuantity;
            } else {
                return state;
            }

            if (Number.isInteger(newQuantity) && newQuantity >= 1) {
                localStorage.setItem("cart", JSON.stringify(newCart));
            }

            return { ...state, cart: newCart };

        // Tăng số lượng sản phẩm trong giỏ hàng
        case INCREASE_QUANTITY:
            const productIdToIncrease = action.payload;
            const itemIndexToIncrease = state.cart.findIndex((item) => item.product._id === productIdToIncrease);

            if (itemIndexToIncrease !== -1) {
                // The product is not in the cart yet
                const newCart = [...state.cart];
                newCart[itemIndexToIncrease].quantity++;
                localStorage.setItem("cart", JSON.stringify(newCart));
                return { ...state, cart: newCart };
            } else {
                return state;
            }


        case CHANGE_CART_COST:
            return {
                ...state,
                cartCost: action.cartCost
            };

        default:
            return state;
    }
};


// export const cartReducers = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_FIRST_PRODUCT:
//             return {
//                 ...state,
//                 cart: [{ product: action.product, quantity: action.quantity }]
//             };
//         case ADD_NEW_PRODUCT:
//             return {
//                 ...state,
//                 cart: [...state.cart, { product: action.product, quantity: action.quantity }]
//             };
//         case INCREASE_QUANTITY:
//             return {
//                 ...state,
//                 cart: state.cart.map((item, index) => {
//                     if (index === action.index) {
//                         return { ...item, quantity: item.quantity + 1 }
//                     }
//                     return item;
//                 })
//             };
//         case CHANGE_CART_COST:
//             return {
//                 ...state,
//                 cartCost: action.cartCost
//             };

//         case DECREASE_QUANTITY:
//             if (state.cart[action.index].quantity <= 1) {
//                 return {
//                     ...state,
//                     cart: state.cart.filter((item, index) => index !== action.index)
//                 };
//             }
//             return {
//                 ...state,
//                 cart: state.cart.map((item, index) => {
//                     if (index === action.index) {
//                         return { ...item, quantity: item.quantity - 1 }
//                     }
//                     return item;
//                 })
//             };
//         default:
//             return state;
//     }
// }


