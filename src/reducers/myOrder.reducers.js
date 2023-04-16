import {
    LOAD_ORDERS_PENDING,
    LOAD_ORDERS_ERROR,
    LOAD_ORDERS_SUCCESS,
    SET_PAGE
} from "../constants/myOrder.constants";

const initialState = {
    // //Load order
    // totalOrder: 0,
    // orders: [],
    // pending: false,
    // error: null,
    // orderCondition: "",

    //Load order
    totalOrder: 0,
    orders: [],
    pending: false,
    error: null,
    searchQuery: "",
    sortBy: "orderDate",
    sortOrder: "desc",
    page: 0,
    limit:5,


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

}
export const myOrderReducers = (state = initialState, action) => {
    switch (action.type) {
        //Load Order
        case LOAD_ORDERS_PENDING:
            state.pending = true;
            break;
        case LOAD_ORDERS_SUCCESS:
            state.pending = false;
            state.totalOrder = action.totalOrder;
            state.orders = action.orders;
            state.error = null;

            break;
        case LOAD_ORDERS_ERROR:
            state.error = action.error
            break;
        case SET_PAGE:
            state.page = action.payload
            break
        default:
            break;
    }
    return { ...state };
}

