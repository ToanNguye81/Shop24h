

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
} from "../constants/cartV2.constants";

const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartV2Reducers = (state = initialState, action) => {
    switch (action.type) {
        // Thêm sản phẩm vào giỏ hàng
        case ADD_TO_CART:
            const { product } = action.payload;
            const itemIndexToAdd = state.cart.findIndex((item) => item.product&&item.product._id === product._id);

            // console.log(itemIndexToAdd)
            if (itemIndexToAdd === -1) {
                // Sản phẩm chưa có trong giỏ hàng
                const newCart = [...state.cart, { product, quantity:1 }];
                localStorage.setItem("cart", JSON.stringify(newCart));
                return { ...state, cart: newCart };
            } else {
                // Sản phẩm đã có trong giỏ hàng
                const newCart = [...state.cart];
                newCart[itemIndexToAdd].quantity += 1;
                localStorage.setItem("cart", JSON.stringify(newCart));
                return { ...state, cart: newCart };
            }

        // Xóa sản phẩm khỏi giỏ hàng
        case REMOVE_FROM_CART:
            const productId = action.payload;
            const itemIndexToRemove = state.cart.findIndex((item) => item.product._id === productId);

            if (itemIndexToRemove !== -1) {
                // sản phẩm có trong giỏ hàng
                const newCart = [...state.cart];
                newCart.splice(itemIndexToRemove, 1);
                localStorage.setItem("cart", JSON.stringify(newCart));
                return { ...state, cart: newCart };
            } else {
                return state;
            }

        // Cập nhật số lượng sản phẩm trong giỏ hàng
        case UPDATE_QUANTITY:
            const { productIdToUpdate, newQuantity } = action.payload;
            const itemIndexToUpdate = state.cart.findIndex((item) => item.product._id === productIdToUpdate);

            if (itemIndexToUpdate !== -1 && newQuantity >= 0) {
                // Nếu sản phẩm tồn tại và số lượng mới hợp lệ
                const newCart = [...state.cart];
                newCart[itemIndexToUpdate].quantity = newQuantity;
                localStorage.setItem("cart", JSON.stringify(newCart));
                return { ...state, cart: newCart };
            } else if (itemIndexToUpdate !== -1 && newQuantity === 0) {
                // Nếu số lượng mới là 0 thì xóa sản phẩm khỏi giỏ hàng
                const newCart = [...state.cart];
                newCart.splice(itemIndexToUpdate, 1);
                localStorage.setItem("cart", JSON.stringify(newCart));
                return { ...state, cart: newCart };
            } else {
                return state;
            }

        // Tăng số lượng sản phẩm trong giỏ hàng
        case INCREASE_QUANTITY:
            const productIdToIncrease = action.payload;
            const itemIndexToIncrease = state.cart.findIndex((item) => item.product._id === productIdToIncrease);

            if (itemIndexToIncrease !== -1) {
                const newCart = [...state.cart];
                newCart[itemIndexToIncrease].quantity += 1;
                localStorage.setItem("cart", JSON.stringify(newCart));
                return { ...state, cart: newCart };
            } else {
                return state;
            }

        // Giảm số lượng sản phẩm trong giỏ hàng
        case DECREASE_QUANTITY:
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
        default:
            return state;
    }
};
