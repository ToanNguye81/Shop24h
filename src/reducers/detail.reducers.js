import { GO_TO_DETAIL } from "../constants/detail.constants";
const initializeState = {
    productId: null,
}
export const detailReducer = (state = initializeState, action) => {
    switch (action.type) {
        case GO_TO_DETAIL:
            state.productId = action.productId
            break;
        default:
            break;
    }
    return { ...state }
}