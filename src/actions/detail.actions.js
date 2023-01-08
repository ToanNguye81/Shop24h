import {GET_DETAIL_PRODUCT} from "../constants/detail.constants"

export const getDetailProduct = (productId) => {
    return {
        type: GET_DETAIL_PRODUCT,
        productId: productId,
    }
}
