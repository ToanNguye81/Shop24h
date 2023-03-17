import {
    OLD_CUSTOMER,
    CHECK_USER_PENDING,
    CHECK_USER_ERROR,
    NEW_CUSTOMER
} from "../constants/order.constants"

const gAUTH_API_URL = "//localhost:8000/auth"

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
                    email:resObj.email
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


export const createNewOrder=(value)=>{
    console.log(value)
}