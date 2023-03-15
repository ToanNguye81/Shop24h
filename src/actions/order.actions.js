import Cookies from "js-cookie";
import {
    CHECK_USER_SUCCESS,
    CHECK_USER_PENDING,
    CHECK_USER_ERROR
} from "../constants/order.constants"

const gAUTH_API_URL = "//localhost:8000/auth"

//Get all product
export const checkUser = () => {
    const accessToken=Cookies.get("accessToken")
    console.log(accessToken)
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
            console.log(res)

            // throw an error if the response is not successful
            if (!res.ok) {
                throw new Error(`Could not load , status: ${res.status}`);
            }
            // parse the response as JSON
            const resObj = await res.json();

            //Dispatch state
            return dispatch({
                type: CHECK_USER_SUCCESS,
                data:resObj
            })

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
