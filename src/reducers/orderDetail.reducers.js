import {
    GET_ORDER_DETAILS_PENDING,
    GET_ORDER_DETAILS_ERROR,
    GET_ORDER_DETAILS_SUCCESS,
} from "../constants/orderDetail.constants";

const initialState = {
    //Load orderDetail
    totalOrderDetail: 0,
    orderDetails: [],
    pending: false,
    error: null,
    detailOfOrderId:""
}

export const orderDetailReducers=(state = initialState, action)=> {
    switch (action.type) {
        //Load OrderDetail
        case GET_ORDER_DETAILS_PENDING:
            state.pending = true;
            state.detailOfOrderId=action.orderId;
            break;
        case GET_ORDER_DETAILS_SUCCESS:
            state.pending = false;
            state.totalOrderDetail = action.totalOrderDetail;
            state.orderDetails = action.orderDetails;
            state.error=null;
            break;
        case GET_ORDER_DETAILS_ERROR:
            break;
        default:
            break;
    }
    return { ...state };
}

