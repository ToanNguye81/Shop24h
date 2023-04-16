
import { enqueueSnackbar } from "notistack";
import {
    OLD_CUSTOMER,
    CHECK_USER_PENDING,
    CHECK_USER_ERROR,
    NEW_CUSTOMER,

    CREATE_CUSTOMER_PENDING,
    CREATE_CUSTOMER_ERROR,
    CREATE_CUSTOMER_SUCCESS,
} from "../constants/order.constants"

const gAUTH_API_URL = "//localhost:8000/auth"
const gCUSTOMER_API_URL = '//localhost:8000/customers';
const gORDERS_API_URL = '//localhost:8000/orders';



//Get all product
export const checkUser = () => {
    // options for the fetch request
    const requestOptions = {
        method: 'GET',
        credentials: 'include'
    };

    return async (dispatch) => {
        try {
            // dispatch pending state to update the UI
            await dispatch({
                type: CHECK_USER_PENDING
            });

            //fetch Customer
            const res = await fetch(`${gAUTH_API_URL}`, requestOptions);

            // throw an error if the response is not successful
            if (!res.ok) {
                throw new Error(`Could not load , status: ${res.status}`);
            }
            // parse the response as JSON
            const resObj = await res.json();
            console.log(resObj)

            //Dispatch state
            if (resObj.data) {
                return dispatch({
                    type: OLD_CUSTOMER,
                    customer: resObj.data
                })
            } else {
                return dispatch({
                    type: NEW_CUSTOMER,
                    email: resObj.email
                })
            }

        } catch (err) {
            //if error
            console.log(err)
            return dispatch({
                type: CHECK_USER_ERROR,
                error: err
            })
        }
    }
}

//Create Order
export const handleCreateOrder = async ({ customer, cart }) => {
    try {
        const customerResult = await createNewCustomer(customer)

        const customerId = await customerResult.data._id

        if (!cart.length) {
            // Warning if cart is empty
            enqueueSnackbar("Your cart is empty", { variant: "warning" })
        }

        if (customerId && cart.length) {
            const orderResult = await createNewOrder(customerId, customer.note)

            const orderId = orderResult.data._id;

            if (orderId) {
                const orderDetailPromises = cart.map(async (orderDetail) => {
                    await createNewOrderDetail(orderId, orderDetail)
                })

                await Promise.all(orderDetailPromises)

                // Show success Snackbar
                enqueueSnackbar(`Create successfully Order: ${orderResult.data.orderCode}`, { variant: "success" })
            }
        }

    } catch (error) {
        // Handle any errors here
        console.log(error)
        // Show success Snackbar
        enqueueSnackbar('Something went wrong.', { variant: "error" })
    }
}


export const createNewCustomer = async (customer) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'

        },
        body: JSON.stringify(customer)
    };



    try {

        const res = await fetch(gCUSTOMER_API_URL, requestOptions);
        const resObj = await res.json();

        return {
            type: CREATE_CUSTOMER_SUCCESS,
            data: resObj.data
        }

    } catch (err) {
        return {
            type: CREATE_CUSTOMER_ERROR,
            error: err
        }
    }
}


//Create new order
export const createNewOrder = async (customerId, note) => {
    // if (isValid) {
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({ note: note }),
    };

    try {
        const res = await fetch(`${gCUSTOMER_API_URL}/${customerId}/orders`, requestOptions);
        const resObj = await res.json();
        console.log(resObj)

        return {
            type: "CREATE_ORDER_SUCCESS",
            data: resObj.data
        }

    } catch (err) {
        return {
            type: "CREATE_ORDER_ERROR",
            error: err
        }
    }
}
    
//Create new orderDetail
export const createNewOrderDetail = async (orderId, orderDetail) => {
    const detail = {
        productId: orderDetail.product._id,
        quantity: orderDetail.quantity
    }

        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(detail)
        };

        try {
            const res = await fetch(`${gORDERS_API_URL}/${orderId}/orderDetails`, requestOptions);
            const resObj = await res.json();

            return {
                type: "CREATE_ORDER_DETAIL_SUCCESS",
                data: resObj.data
            }

        } catch (err) {
            return {
                type: "CREATE_ORDER_DETAIL_ERROR",
                error: err
            }
        }
    }
