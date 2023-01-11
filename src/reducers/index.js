import {  combineReducers } from "redux";
import { signInReducer } from "./signIn.reducers";
import { detailReducer } from "./detail.reducers";
import {productReducers} from "./product.reducers"
const rootReducer=combineReducers({
    signInReducer,
    detailReducer,
    productReducers
});
export default rootReducer;