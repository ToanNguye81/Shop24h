import {  combineReducers } from "redux";
import { signInReducer } from "./signIn.reducers";
import {productReducers} from "./product.reducers";
import {cartReducers} from "./cart.reducers";
import { detailReducers } from "./detail.reducers";
const rootReducer=combineReducers({
    signInReducer,
    productReducers,
    cartReducers,
    detailReducers,
});
export default rootReducer;