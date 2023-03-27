// import { enqueueSnackbar } from "notistack"
// import {
//     DECREASE_QUANTITY,
//     INCREASE_QUANTITY,
//     ADD_NEW_PRODUCT,
//     ADD_FIRST_PRODUCT,
//     CHANGE_CART_COST,
// } from "../constants/cart.constants"

// //Xử lý nút giảm quantity
// export const decreaseQuantity = (paramIndex) => {
//     return {
//         type: DECREASE_QUANTITY,
//         index: paramIndex
//     }
// }

// //Xử lý nút tăng quantity
// export const increaseQuantity = (paramIndex) => {
//     return {
//         type: INCREASE_QUANTITY,
//         index: paramIndex
//     }
// }


// //Xử lý sự kiện nút AddToCart
// export const addToCart = (cart, product) => {
//     //Hàm xử lý thêm sản phẩm lần đầu
//     enqueueSnackbar(`Add product ${product.name} to cart `, { variant: 'success' });
//     // if (cart[0].product === null) {
//     if (cart.length === 0) {
//         return {
//             type: ADD_FIRST_PRODUCT,
//             product: product,
//             quantity: 1
//         }
//     }

//     // Hàm tăng số lượng nếu sản phẩm đã có trong cart
//     else {
//         for (let index = 0; index < cart.length; index++) {
//             if (product._id === cart[index].product._id) {
//                 return {
//                     type: INCREASE_QUANTITY,
//                     index: index,
//                 }
//             }
//         }
//     }
//     //Thêm một sản phẩm mới nếu cart có trên 1 sp
//     return {
//         type: ADD_NEW_PRODUCT,
//         product: product,
//         quantity: 1,
//     }
// }


// export const changeCartCost = (cart) => {
//     let cartCost = 0;
//     console.log(cart)
//     cart.map((item, index) => {
//         cartCost = cartCost + item.product.promotionPrice * item.quantity
//     })
//     return {
//         type: CHANGE_CART_COST,
//         cartCost: cartCost
//     }
// }

import { enqueueSnackbar } from "notistack"
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_QUANTITY,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    CHANGE_CART_COST,
} from "../constants/cart.constants"

// Thêm sản phẩm vào giỏ hàng
export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: {
        product,
    },
});

//Tăng số lượng
export const increaseQuantity = (productId) => ({
    type: INCREASE_QUANTITY,
    payload: productId,
});

// Giảm số lượng quantity
export const decreaseQuantity = (productId) => ({
    type: DECREASE_QUANTITY,
    payload: productId
}
)


// Xóa sản phẩm khỏi giỏ hàng
export const removeFromCart = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId,
});


// Cập nhật số lượng sản phẩm trong giỏ hàng
export const updateQuantity = (productId, newQuantity) => ({
    type: UPDATE_QUANTITY,
    payload: {
        productIdToUpdate: productId,
        newQuantity: newQuantity,
    },
});



//Change Cart Cost
export const changeCartCost = (cart) => {
    let cartCost = 0;
    console.log(cart)
    cart.map((item, index) => {
        cartCost = cartCost + item.product.promotionPrice * item.quantity
    })
    return {
        type: CHANGE_CART_COST,
        cartCost: cartCost
    }
}