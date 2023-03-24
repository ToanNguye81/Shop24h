import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,

    GET_PRODUCT_BY_ID_ERROR,
    GET_PRODUCT_BY_ID_PENDING,
    GET_PRODUCT_BY_ID_SUCCESS,

    //Set filter Condition
    SET_PAGE,
    SET_SORT_BY,
    SET_SORT_ORDER,
    SET_GENDER,
    SET_BRAND,
    SET_CATEGORY,
    SET_MIN_PRICE,
    SET_MAX_PRICE,
    RESET_CONDITION
} from "../constants/product.constants";

const gPRODUCT_API_URL = "//localhost:8000/products"

//Get all product
// export const getAllProduct = (paramLimit, paramPage, paramCondition) => {
export const getAllProduct = ({ productPerPage, page, sortBy, sortOrder, gender, brand, minPrice, maxPrice, category }) => {

    // build the request string
    const request = `limit=${productPerPage}&page=${page}&sortBy=${sortBy}&sortOrder=${sortOrder}&gender=${gender.join('&gender=')}&brand=${brand.join('&brand=')}&minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category.join('&category=')}`

    console.log(request)
    // options for the fetch request
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    return async (dispatch) => {
        try {
            // dispatch pending state to update the UI
            await dispatch({
                type: FETCH_PRODUCTS_PENDING
            });

            //fetch Product
            const res = await fetch(`${gPRODUCT_API_URL}?${request}`, requestOptions);

            // throw an error if the response is not successful
            if (!res.ok) {
                throw new Error(`Could not fetch products, status: ${res.status}`);
            }
            // parse the response as JSON
            const resObj = await res.json();
            console.log(resObj)
            //Dispatch state
            return dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                totalProduct: resObj.totalCount,
                products: resObj.data
            })

        } catch (err) {
            //if error
            return dispatch({
                type: FETCH_PRODUCTS_ERROR,
                error: err
            })
        }
    }
}

//Get Product By Id
export const getProductById = (productId) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    return async (dispatch) => {
        try {
            // dispatch pending state to update the UI
            await dispatch({
                type: GET_PRODUCT_BY_ID_PENDING
            });

            //fetch Product
            const res = await fetch(`${gPRODUCT_API_URL}/${productId}`, requestOptions);

            // parse the response as JSON
            const resObj = await res.json();

            // throw an error if the response is not successful
            if (!res.ok) {
                throw new Error(`${resObj.message}, status: ${res.status}`);
            }
            //Dispatch state
            return dispatch({
                type: GET_PRODUCT_BY_ID_SUCCESS,
                productById: resObj.data
            })

        } catch (err) {
            //if error
            return dispatch({
                type: GET_PRODUCT_BY_ID_ERROR,
                error: err
            })
        }
    }
}

//set Page
export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
}

//set SortBy
export const setSortBy = (SortBy) => {
    return {
        type: SET_SORT_BY,
        payload: SortBy
    }
}
//set sortOrder
export const setSortOrder = (sortOrder) => {
    return {
        type: SET_SORT_ORDER,
        payload: sortOrder
    }
}
//set Gender
export const setGender = (gender) => {
    return {
        type: SET_GENDER,
        payload: gender
    }
}
//set Brand
export const setBrand = (brand) => {
    return {
        type: SET_BRAND,
        payload: brand
    }
}
//set Category
export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category
    }
}
//set MinPrice
export const setMinPrice = (minPrice) => {
    return {
        type: SET_MIN_PRICE,
        payload: minPrice
    }
}
//set MaxPrice
export const setMaxPrice = (maxPrice) => {
    return {
        type: SET_MAX_PRICE,
        payload: maxPrice
    }
}

//Reset Condition
export const resetCondition=()=>{
    return {
        type: RESET_CONDITION,
    }
}
