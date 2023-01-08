import { GET_DETAIL_PRODUCT } from "../constants/detail.constants";
const initializeState = {
    productId: null,
}
export const detailReducer = (state = initializeState, action) => {
    switch (action.type) {
        case GET_DETAIL_PRODUCT:
            state.productId = action.productId
            break;
        default:
            break;
    }
    return { ...state }
}