import {
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_ERROR,
    FETCH_PRODUCTS_SUCCESS,
    PRODUCTS_PAGINATION_CHANGE,
    ORDINAL_FILTER_CHANGE,
    BRAND_FILTER_CHANGE,
    MAX_PRICE_CHANGE,
    MIN_PRICE_CHANGE
} from "../constants/product.constants";

const initialState = {
    totalProduct: 0,
    products: [],
    filteredProducts: [],
    pending: false,
    error: null,
    currentPage: 1,
    brand: "",
    minPrice: 0,
    maxPrice: 100000,
    ordinal: 0,
}

export const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_PENDING:
            state.pending = true;
            break;
        case FETCH_PRODUCTS_SUCCESS:
            state.totalProduct = action.totalProduct;
            state.pending = false;
            state.products = action.products;
            state.filteredProducts = action.filteredProducts;
            break;
        case FETCH_PRODUCTS_ERROR:
            break;
        case PRODUCTS_PAGINATION_CHANGE:
            state.currentPage = action.page;
            break;
        case BRAND_FILTER_CHANGE:
            state.brand = action.brand;
            state.currentPage = action.page;
            break;
        case ORDINAL_FILTER_CHANGE:
            state.ordinal = action.ordinal;
            state.currentPage = action.page;
            break;
        case MAX_PRICE_CHANGE:
            state.maxPrice = action.maxPrice;
            state.currentPage = action.page;
            break;
        case MIN_PRICE_CHANGE:
            state.minPrice = action.minPrice;
            state.currentPage = action.page;
            break;

        default:
            break;
    }

    return { ...state };
}