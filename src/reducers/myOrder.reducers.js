import {
    FETCH_ORDERS_PENDING,
    FETCH_ORDERS_ERROR,
    FETCH_ORDERS_SUCCESS,
} from "../constants/myOrder.constants";

const initialState = {
    //Load order
    totalOrder: 0,
    orders: [],
    pending: false,
    error: null,
    currentPage: 1,
    orderCondition: "",

    //Modal Delete Order
    deleteOrderPending: false,

    //Add To Cart
    cart: [],//{product:...,quantity:...}
    note: "",
    //Create Order
    orderId: null,


    //Order detail
    orderById: {},
    getOrderByIdPending: false,

    //Update Order
    updateOrderPending: false,
    updateStatus: null,//Demo
    updateError: null
}
export const myOrderReducers=(state = initialState, action)=> {
    switch (action.type) {
        //Load Order
        case FETCH_ORDERS_PENDING:
            state.pending = true;
            break;
        case FETCH_ORDERS_SUCCESS:
            state.pending = false;
            state.totalOrder = action.totalOrder;
            state.orders = action.orders;
            state.error = null;
            break;
        case FETCH_ORDERS_ERROR:
            state.error = action.error
            break;
        default:
            break;
    }
    return { ...state };
}

