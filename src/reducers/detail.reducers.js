import {
    GET_DETAIL_PRODUCT_SUCCESS,
    GET_DETAIL_PRODUCT_PENDING,
    GET_DETAIL_PRODUCT_ERROR,
} from "../constants/detail.constants";

const initializeState = {
    pendingDetail: false,
    error: null,
    detailProduct: null,
    
}
export const detailReducers = (state = initializeState, action) => {
    console.log(action)
    switch (action.type) {
        case GET_DETAIL_PRODUCT_PENDING:
            state.pendingDetail = true;
            break;
        case GET_DETAIL_PRODUCT_SUCCESS:
            console.log(action.detailProduct)
            state.pendingDetail= false;
            state.detailProduct = action.detailProduct;
            break;
        case GET_DETAIL_PRODUCT_ERROR:
            state.error = action.error;
            break;
        default:
            break;
    }
    return { ...state }
}