import {
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    ADD_NEW_PRODUCT,
    ADD_FIRST_PRODUCT
} from "../constants/cart.constants"

//Xử lý nút giảm quantity
export const decreaseQuantity = (paramIndex) => {
    return {
        type: DECREASE_QUANTITY,
        index: paramIndex
    }
}

//Xử lý nút tăng quantity
export const increaseQuantity = (paramIndex) => {
    return {
        type: INCREASE_QUANTITY,
        index: paramIndex
    }
}


//Xử lý sự kiện nút AddToCart
export const addToCart = (cart, paramDetailProduct) => {

    //Hàm xử lý thêm sản phẩm lần đầu
    if (cart[0].product === null) {
        console.log(paramDetailProduct)
        return {
            type: ADD_FIRST_PRODUCT,
            product: paramDetailProduct,
            quantity: 1
        }
    }

    // Hàm tăng số lượng nếu sản phẩm đã có trong cart
    else {
        for (let index = 0; index < cart.length; index++) {
            if (paramDetailProduct._id === cart[index].product._id) {
                return {
                    type: INCREASE_QUANTITY,
                    index: index,
                }
            }
        }
    }

    //Thêm một sản phẩm mới nếu cart có trên 1 sp
    return {
        type: ADD_NEW_PRODUCT,
        product: paramDetailProduct,
        quantity: 1,
    }
}
