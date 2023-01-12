import {
    GET_DETAIL_PRODUCT_SUCCESS,
    GET_DETAIL_PRODUCT_PENDING,
    GET_DETAIL_PRODUCT_ERROR,
} from "../constants/detail.constants";

const initializeState = {
    pending: false,
    error: null,
    detailProduct: null,
}
export const detailReducer = (state = initializeState, action) => {
    switch (action.type) {
        case GET_DETAIL_PRODUCT_PENDING:
            state.pending = true;
            break;
        case GET_DETAIL_PRODUCT_SUCCESS:
            state.detailProduct = action.detailProduct
            break;
        case GET_DETAIL_PRODUCT_ERROR:
            state.error = action.error
            break;
        default:
            break;
    }
    return { ...state }
}