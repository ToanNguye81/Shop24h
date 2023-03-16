import {
    OLD_CUSTOMER,
    CHECK_USER_PENDING,
    CHECK_USER_ERROR,
    NEW_CUSTOMER
} from "../constants/order.constants";

const initializeState = {
    pendingDetail: false,
    error: null,
    orderProduct: null,
    customer: {}
}

export const orderReducers = (state = initializeState, action) => {
    console.log(action)
    switch (action.type) {
        case OLD_CUSTOMER:
            state.customer = action.customer
            break;
        case CHECK_USER_PENDING:
            break;
        case CHECK_USER_ERROR:
            state.error = action.error
        case NEW_CUSTOMER:
            state.customer.email = action.email
        default:
            break;
    }
    return { ...state }
}