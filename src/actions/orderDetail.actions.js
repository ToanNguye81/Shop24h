import {
    GET_ORDER_DETAILS_PENDING,
    GET_ORDER_DETAILS_ERROR,
    GET_ORDER_DETAILS_SUCCESS,
} from "../constants/orderDetail.constants";


const gORDERS_API_URL = '//localhost:8000/orders';

export const getAllOrderDetailOfOrder = ({limit, page, paramCondition, orderId}) => {
    // build the request string
    let condition = encodeURIComponent(JSON.stringify(paramCondition ? paramCondition : {}));
    const request = `limit=${limit}&page=${page}&condition=${condition}`


    // options for the fetch request
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return async (dispatch) => {
        try {
            // dispatch pending state to update the UI
            await dispatch({
                type: GET_ORDER_DETAILS_PENDING
            });

            //fetch OrderDetail
            const res = await fetch(`${gORDERS_API_URL}/${orderId}/orderDetails?${request}`, requestOptions);
            console.log(res.ok)
            // throw an error if the response is not successful
            if (!res.ok) {
                throw new Error(`Could not fetch orderDetails, status: ${res.status}`);
            }

            // parse the response as JSON
            const resObj = await res.json();

            console.log(resObj)

            //Dispatch state
            return dispatch({
                type: GET_ORDER_DETAILS_SUCCESS,
                totalOrderDetail: resObj.totalCount,
                orderDetails: resObj.data
            })

        } catch (err) {
            //if error
            return dispatch({
                type: GET_ORDER_DETAILS_ERROR,
                error: err
            })
        }
    }
}