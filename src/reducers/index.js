import {  combineReducers } from "redux";
import { signInReducer } from "./signIn.reducers";
import { detailReducer } from "./detail.reducers";
import {productReducers} from "./product.reducers"
import {cartReducers} from "./cart.reducers"
const rootReducer=combineReducers({
    signInReducer,
    detailReducer,
    productReducers,
    cartReducers,
});
export default rootReducer;