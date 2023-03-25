import { enqueueSnackbar } from "notistack"
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
} from "../constants/cartV2.constants"

// Thêm sản phẩm vào giỏ hàng
export const addToCart = (product, quantity) => ({
    type: ADD_TO_CART,
    payload: {
        product,
        quantity,
    },
});

//Tăng số lượng
export const increaseQuantity = (productId) => ({
    type: INCREASE_QUANTITY,
    payload: productId,
});

//Giảm số lượng
export const decreaseQuantity = (productId) => ({
    type: DECREASE_QUANTITY,
    payload: productId,
});


// Xóa sản phẩm khỏi giỏ hàng
export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});


// Cập nhật số lượng sản phẩm trong giỏ hàng
export const updateQuantity = (product, newQuantity) => ({
    type: UPDATE_QUANTITY,
    payload: {
        product,
        newQuantity,
    },
});
