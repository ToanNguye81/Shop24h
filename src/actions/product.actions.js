import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,

    GET_PRODUCT_BY_ID_ERROR,
    GET_PRODUCT_BY_ID_PENDING,
    GET_PRODUCT_BY_ID_SUCCESS,

    // PRODUCTS_PAGINATION_CHANGE,
    // BRAND_FILTER_CHANGE,
    // ORDINAL_FILTER_CHANGE,
    // MIN_PRICE_CHANGE,
    // MAX_PRICE_CHANGE
} from "../constants/product.constants";

const gPRODUCT_API_URL = "//localhost:8000/products"

//Get all product
export const getAllProduct = (paramLimit, paramPage, paramCondition) => {

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


// export const changePagination = (page) => {
//     return {
//         type: PRODUCTS_PAGINATION_CHANGE,
//         page: page
//     }
// }

// export const changeBrand = (brand) => {
//     return {
//         type: BRAND_FILTER_CHANGE,
//         brand: brand,
//     }
// }

// export const changeMinPrice = (minPrice) => {
//     console.log(minPrice)
//     return {
//         type: MIN_PRICE_CHANGE,
//         minPrice: minPrice,
//     }
// }

// export const changeMaxPrice = (maxPrice) => {
//     console.log(maxPrice)
//     return {
//         type: MAX_PRICE_CHANGE,
//         maxPrice: maxPrice,
//     }
// }

// export const changeOrdinal = (ordinal) => {
//     return {
//         type: ORDINAL_FILTER_CHANGE,
//         ordinal: ordinal,
//     }
// }

// export const fetchProducts = (limit, currentPage, brand, minPrice, maxPrice, ordinal) => {
//     return async (dispatch) => {
//         var requestOptions = {
//             method: 'GET',
//             redirect: 'follow'
//         };

//         await dispatch({
//             type: FETCH_PRODUCTS_PENDING
//         });

//         try {
//             const allProductsRes = await fetch("http://localhost:8000/products?brand=" + brand + "&minPrice=" + minPrice + "&maxPrice=" + maxPrice + "&ordinal=" + ordinal, requestOptions);

//             const allProductsObj = await allProductsRes.json();

//             const filteredProductRes = await fetch("http://localhost:8000/products?start=" + ((currentPage - 1) * limit) + "&limit=" + limit + "&brand=" + brand + "&minPrice=" + minPrice + "&maxPrice=" + maxPrice + "&ordinal=" + ordinal, requestOptions);
//             const filteredProductObj = await filteredProductRes.json();
//             console.log(filteredProductObj)

//             return dispatch({
//                 type: FETCH_PRODUCTS_SUCCESS,
//                 products: allProductsObj.products,
//                 totalProduct: allProductsObj.products.length,
//                 filteredProducts: filteredProductObj.products,

//             })
//         } catch (err) {
//             return dispatch({
//                 type: FETCH_PRODUCTS_ERROR,
//                 error: err
//             })
//         }
//     }
// }

// export const fetchProducts = (paramLimit, paramPage, paramCondition,paramSortBy,paramSortOrder) => {
//     // build the request string
//     let condition = encodeURIComponent(JSON.stringify(paramCondition ? paramCondition : {}));
//     const request = `limit=${paramLimit}&page=${paramPage}&condition=${condition}&sortBy=${paramSortBy}&sortOrder=${paramSortOrder}`

//     // options for the fetch request
//     const requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//     };

//     return async (dispatch) => {
//         try {
//             // dispatch pending state to update the UI
//             await dispatch({
//                 type: FETCH_PRODUCTS_PENDING
//             });

//             //fetch fetchProduct
//             const res = await fetch(`${gPRODUCT_API_URL}?${request}`, requestOptions);

//             // throw an error if the response is not successful
//             if (!res.ok) {
//                 throw new Error(`Could not find products, status: ${res.status}`);
//             }
//             // parse the response as JSON
//             const resObj = await res.json();
//             console.log(resObj)

//             //Dispatch state
//             return dispatch({
//                 type: FETCH_PRODUCTS_SUCCESS,
//                 totalProduct: resObj.totalCount,
//                 products: resObj.data
//             })

//         } catch (err) {
//             //if error
//             return dispatch({
//                 type: FETCH_PRODUCTS_ERROR,
//                 error: err
//             })
//         }
//     }
// }

