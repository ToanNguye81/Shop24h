import {
    LOAD_PRODUCTS_PENDING,
    LOAD_PRODUCTS_ERROR,
    LOAD_PRODUCTS_SUCCESS,

    GET_PRODUCT_BY_ID_ERROR,
    GET_PRODUCT_BY_ID_PENDING,
    GET_PRODUCT_BY_ID_SUCCESS,

    //Set Filter Condition
    SET_PAGE,
    SET_SORT_BY,
    SET_SORT_ORDER,
    SET_GENDER,
    SET_BRAND,
    SET_CATEGORY,
    SET_MIN_PRICE,
    SET_MAX_PRICE,
    RESET_CONDITION,
} from "../constants/product.constants";


const initialState = {
    //load product
    totalProduct: 0,
    products: [],
    pending: false,
    error: null,
    currentPage: 1,

    //Filter and sort
    limit: 10,
    page: 0,
    sortBy: "",
    sortOrder: "",
    gender: [],
    brand: [],
    category: [],
    minPrice: 0,
    maxPrice: 2000,

    //Product detail
    productById: {},
    getProductByIdPending: false,

}

export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PRODUCTS_PENDING:
            return {
                ...state,
                pending: true
            };
        case LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                totalProduct: action.totalProduct,
                products: action.products,
                error: null
            };
        case LOAD_PRODUCTS_ERROR:
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
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case SET_SORT_ORDER:
            return {
                ...state,
                sortOrder:action.payload
            }
        case SET_GENDER:
            return {
                ...state,
                gender:action.payload
            }
        case SET_BRAND:
            return {
                ...state,
                brand: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category:action.payload
            }
        case SET_MIN_PRICE:
            return {
                ...state,
                minPrice:action.payload
            }
        case SET_MAX_PRICE:
            return {
                ...state,
                maxPrice:action.payload
            }
        case RESET_CONDITION:
            return {
                ...state,
                gender: [],
                brand: [],
                category: [],
                minPrice: 0,
                maxPrice: 2000,
            }
        default:
            return state;
    }
};

