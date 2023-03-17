import {
    OLD_CUSTOMER,
    CHECK_USER_PENDING,
    CHECK_USER_ERROR,
    NEW_CUSTOMER,
    CHANGE_TOTAL
} from "../constants/order.constants";

const initializeState = {
    pendingDetail: false,
    error: null,
    orderProduct: null,

    //Order
    checkUserPending: false,
    customer: {},
    totalCost: 0,
}

export const orderReducers = (state = initializeState, action) => {
    console.log(action)
    switch (action.type) {
        case OLD_CUSTOMER:
            state.checkUserPending = false
            state.customer = action.customer
            break;
        case CHECK_USER_PENDING:
            state.checkUserPending = true
            break;
        case CHECK_USER_ERROR:
            state.checkUserPending = false
            state.error = action.error
            break;
        case NEW_CUSTOMER:
            state.checkUserPending = false
            state.customer.email = action.email
            break;
        case CHANGE_TOTAL:
            state.checkUserPending = false
            state.customer = action.customer
            break;
        default:
            break;
    }
    return { ...state }
}