import {
    GET_ORDER_PRODUCT_SUCCESS,
    GET_ORDER_PRODUCT_PENDING,
    GET_ORDER_PRODUCT_ERROR,
} from "../constants/order.constants";

const initializeState = {
    pendingDetail: false,
    error: null,
    orderProduct: null,
    
}

export const orderReducers = (state = initializeState, action) => {
    console.log(action)
    switch (action.type) {
        case GET_ORDER_PRODUCT_PENDING:
            state.pendingDetail = true;
            break;
        case GET_ORDER_PRODUCT_SUCCESS:
            console.log(action.orderProduct)
            state.pendingDetail= false;
            state.orderProduct = action.orderProduct;
            break;
        case GET_ORDER_PRODUCT_ERROR:
            state.error = action.error;
            break;
        default:
            break;
    }
    return { ...state }
}