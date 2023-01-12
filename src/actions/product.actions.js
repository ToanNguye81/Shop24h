import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,
    PRODUCTS_PAGINATION_CHANGE,
    BRAND_FILTER_CHANGE,
    ORDINAL_FILTER_CHANGE,
    MIN_PRICE_CHANGE,
    MAX_PRICE_CHANGE
} from "../constants/product.constants";

export const changePagination = (page) => {
    return {
        type: PRODUCTS_PAGINATION_CHANGE,
        page: page
    }
}

export const changeBrand = (brand) => {
    return {
        type: BRAND_FILTER_CHANGE,
        brand: brand,
        page: 1
    }
}

export const changeMinPrice = (minPrice) => {
    console.log(minPrice)
    return {
        type: MIN_PRICE_CHANGE,
        minPrice: minPrice,
        page: 1
    }
}
export const changeMaxPrice = (maxPrice) => {
    console.log(maxPrice)
    return {
        type: MAX_PRICE_CHANGE,
        maxPrice: maxPrice,
        page: 1
    }
}
export const changeOrdinal = (ordinal) => {
    return {
        type: ORDINAL_FILTER_CHANGE,
        ordinal: ordinal,
    }
}

export const fetchProducts = (limit, currentPage, brand, minPrice, maxPrice, ordinal) => {
    return async (dispatch) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        await dispatch({
            type: FETCH_PRODUCTS_PENDING
        });

        try {
            const allProductsRes = await fetch("http://localhost:8000/products?brand=" + brand + "&minPrice=" + minPrice + "&maxPrice=" + maxPrice + "&ordinal=" + ordinal, requestOptions);

            const allProductsObj = await allProductsRes.json();

            const filteredProductRes = await fetch("http://localhost:8000/products?start=" + ((currentPage - 1) * limit) + "&limit=" + limit + "&brand=" + brand + "&minPrice=" + minPrice + "&maxPrice=" + maxPrice + "&ordinal=" + ordinal, requestOptions);
            const filteredProductObj = await filteredProductRes.json();
            console.log(filteredProductObj)

            return dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                products: allProductsObj.products,
                totalProduct: allProductsObj.products.length,
                filteredProducts: filteredProductObj.products,

            })
        } catch (err) {
            return dispatch({
                type: FETCH_PRODUCTS_ERROR,
                error: err
            })
        }
    }
}