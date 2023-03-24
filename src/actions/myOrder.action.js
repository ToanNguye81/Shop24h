import {
    FETCH_ORDERS_ERROR,
    FETCH_ORDERS_PENDING,
    FETCH_ORDERS_SUCCESS,
} from "../constants/myOrder.constants";

const gCUSTOMER_API_URL = '//localhost:8000/customers';

export const getAllOrderOfCustomer = (paramLimit, paramPage, paramCondition, customerId) => {
    // build the request string
    let condition = encodeURIComponent(JSON.stringify(paramCondition ? paramCondition : {}));
    const request = `limit=${paramLimit}&page=${paramPage}&condition=${condition}`
    // options for the fetch request
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return async (dispatch) => {
        try {
            // dispatch pending state to update the UI
            await dispatch({
                type: FETCH_ORDERS_PENDING
            });

            //fetch Order
            const res = await fetch(`${gCUSTOMER_API_URL}/${customerId}/orders?${request}`, requestOptions);
            // throw an error if the response is not successful
            if (!res.ok) {
                throw new Error(`Could not fetch orders, status: ${res.status}`);
            }
            // parse the response as JSON
            const resObj = await res.json();
            console.log(resObj.data)
            console.log(resObj)
            //Dispatch state
            return dispatch({
                type: FETCH_ORDERS_SUCCESS,
                totalOrder: resObj.totalCount,
                orders: resObj.data
            })

        } catch (err) {
            //if error
            return dispatch({
                type: FETCH_ORDERS_ERROR,
                error: err
            })
        }
    }
}