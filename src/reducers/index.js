import {  combineReducers } from "redux";
import { signInReducers } from "./signIn.reducers";
import {productReducers} from "./product.reducers";
import {cartReducers} from "./cart.reducers";
import { detailReducers } from "./detail.reducers";
const rootReducer=combineReducers({
    signInReducers,
    productReducers,
    cartReducers,
    detailReducers,
});
export default rootReducer;