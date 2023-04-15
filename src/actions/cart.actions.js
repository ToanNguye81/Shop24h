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
export const updateQuantity = (productId, newQuantity) => {
    return {
        type: UPDATE_QUANTITY,
        payload: {
            productIdToUpdate: productId,
            newQuantity: newQuantity,
        },
    }
};



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