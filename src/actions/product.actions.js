import {
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,
    PRODUCTS_PAGINATION_CHANGE
} from "../constants/product.constants";

export const changePagination = (page) => {
    return {
        type: PRODUCTS_PAGINATION_CHANGE,
        page: page
    }
}

export const fetchProducts = (limit, currentPage,brand,minPrice,maxPrice,ordinal) => {
    return async ( dispatch ) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        await dispatch({
            type: FETCH_PRODUCTS_PENDING
        });

        try {
            const resAllProducts = await fetch("http://localhost:8000/products", requestOptions);

            const resAllProductsObj = await resAllProducts.json();

            const filteredRes = await fetch("http://localhost:8000/products?start=" + ((currentPage-1) * limit) + "&limit=" + limit+"&brand="+ brand+"&minPrice="+ minPrice+"&maxPrice="+ maxPrice+"&ordinal="+ ordinal, requestOptions);
            const filteredResObj = await filteredRes.json();

            return dispatch({
                type: FETCH_PRODUCTS_SUCCESS,
                totalProduct: resAllProductsObj.products.length,
                products: resAllProductsObj.products,
                filteredProducts: filteredResObj.products,
            })
        } catch (err) {
            return dispatch({
                type: FETCH_PRODUCTS_ERROR,
                error: err
            })
        }
    }
}