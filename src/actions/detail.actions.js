import {GET_DETAIL_PRODUCT_SUCCESS,GET_DETAIL_PRODUCT_PENDING,GET_DETAIL_PRODUCT_ERROR} from "../constants/detail.constants"

export const getDetailProduct = (productId) => {
    return async (dispatch) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        await dispatch({
            type: GET_DETAIL_PRODUCT_PENDING
        });

        try {
            const detailProductRes = await fetch("http://localhost:8000/products/"+productId, requestOptions);

            const detailProductObj = await detailProductRes.json();
            console.log(detailProductObj.data)

            return dispatch({
                type: GET_DETAIL_PRODUCT_SUCCESS,
                detailProduct:detailProductObj.data,
            })
        } catch (err) {
            return dispatch({
                type: GET_DETAIL_PRODUCT_ERROR,
                error: err
            })
        }
    }
}
