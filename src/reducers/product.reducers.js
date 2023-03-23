// // import {
// //     FETCH_PRODUCTS_PENDING,
// //     FETCH_PRODUCTS_ERROR,
// //     FETCH_PRODUCTS_SUCCESS,
// //     PRODUCTS_PAGINATION_CHANGE,
// //     ORDINAL_FILTER_CHANGE,
// //     BRAND_FILTER_CHANGE,
// //     MAX_PRICE_CHANGE,
// //     MIN_PRICE_CHANGE
// // } from "../constants/product.constants";

// // const initialState = {
// //     pending: false,
// //     totalProduct: 0,
// //     products: [],
// //     filteredProducts: [],
// //     error: null,
// //     currentPage: 1,
// //     brand: "",
// //     minPrice: 0,
// //     maxPrice: 100000,
// //     ordinal: 0,
// // }

// // export const productReducers = (state = initialState, action) => {
// //     switch (action.type) {
// //         case FETCH_PRODUCTS_PENDING:
// //             state.pending = true;
// //             break;
// //         case FETCH_PRODUCTS_SUCCESS:
// //             // state.pending = false;
// //             // state.totalProduct = action.totalProduct;
// //             // state.products = action.products;
// //             // state.filteredProducts = action.filteredProducts;
// //             console.log(action.products)
// //             state.pending = false;
// //             state.totalProduct = action.totalProduct;
// //             state.products = action.products;
// //             break;
// //         case FETCH_PRODUCTS_ERROR:
// //             break;
// //         case PRODUCTS_PAGINATION_CHANGE:
// //             state.currentPage = action.page;
// //             break;
// //         case BRAND_FILTER_CHANGE:
// //             state.brand = action.brand;
// //             state.currentPage = 1;
// //             break;
// //         case ORDINAL_FILTER_CHANGE:
// //             state.ordinal = action.ordinal;
// //             state.currentPage = 1;
// //             break;
// //         case MAX_PRICE_CHANGE:
// //             state.maxPrice = action.maxPrice;
// //             state.currentPage = 1;
// //             break;
// //         case MIN_PRICE_CHANGE:
// //             state.minPrice = action.minPrice;
// //             state.currentPage = 1;
// //             break;
// //         default:
// //             break;
// //     }

// //     return { ...state };
// // }

// import {
//     FETCH_PRODUCTS_PENDING,
//     FETCH_PRODUCTS_ERROR,
//     FETCH_PRODUCTS_SUCCESS,

//     GET_PRODUCT_BY_ID_ERROR,
//     GET_PRODUCT_BY_ID_PENDING,
//     GET_PRODUCT_BY_ID_SUCCESS,
// } from "../constants/product.constants";


// const initialState = {
//     totalProduct: 0,
//     products: [],
//     pending: false,
//     error: null,
//     currentPage: 1,

//     //Product detail
//     productById: {},
//     getProductByIdPending: false,

//     //Update Product
//     updateProductPending: false,
//     updateStatus: null,
//     updateError:null

// }

// export const productReducers=(state = initialState, action)=> {
//     switch (action.type) {
//         case FETCH_PRODUCTS_PENDING:
//             state.pending = true;
//             break;
//         case FETCH_PRODUCTS_SUCCESS:
//             state.pending = false;
//             state.totalProduct = action.totalProduct;
//             state.products = action.products;
//             state.error = null;
//             break;
//         case FETCH_PRODUCTS_ERROR:
//             state.error = action.error
//             break;

//         //Get product By Id
//         case GET_PRODUCT_BY_ID_PENDING:
//             state.getProductByIdPending = true
//             break;
//         case GET_PRODUCT_BY_ID_SUCCESS:
//             state.getProductByIdPending = false;
//             state.productById = action.productById
//             state.error = null
//             break;
//         case GET_PRODUCT_BY_ID_ERROR:
//             state.error = action.error
//             break;
//         default:
//             break;
//     }

//     return { ...state };
// }

import {
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,

    GET_PRODUCT_BY_ID_ERROR,
    GET_PRODUCT_BY_ID_PENDING,
    GET_PRODUCT_BY_ID_SUCCESS,

    SET_PAGE,
} from "../constants/product.constants";


const initialState = {
    totalProduct: 0,
    products: [],
    pending: false,
    error: null,
    currentPage: 1,

    //Product detail
    productById: {},
    getProductByIdPending: false,

    //Update Product
    updateProductPending: false,
    updateStatus: null,
    updateError: null,

    //Filter and sort
    productPerPage: 10,
    page: 0,
    sortBy: "",
    sortOrder: "",
    gender:[],
    brand:[],
    category:[],
    minPrice:"",
    maxPrice:"",
}

export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                totalProduct: action.totalProduct,
                products: action.products,
                error: null
            };
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                error: action.error
            };

        //Get product By Id
        case GET_PRODUCT_BY_ID_PENDING:
            return {
                ...state,
                getProductByIdPending: true
            };
        case GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                getProductByIdPending: false,
                productById: action.productById,
                error: null
            };
        case GET_PRODUCT_BY_ID_ERROR:
            return {
                ...state,
                error: action.error
            };
        case SET_PAGE:
            console.log(action.payload)
            return {
                ...state,
                page: action.payload
            };
        default:
            return state;
    }
};

