import { GO_TO_DETAIL } from "../constants/detail.constants";
const initializeState = {
    detailId: null,
}
export const detailReducer = (state = initializeState, action) => {
    switch (action.type) {
        case GO_TO_DETAIL:
            state.detailId = action.detailId
            break;
        default:
            break;
    }
    return { ...state }
}