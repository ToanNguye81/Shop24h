import {  combineReducers } from "redux";
import { signInReducers } from "./signIn.reducers";
import {productReducers} from "./product.reducers";
import {cartReducers} from "./cart.reducers";
import { detailReducers } from "./detail.reducers";
import { signUpReducers } from "./signUp.reducers";
import { orderReducers } from "./order.reducers";
import { myOrderReducers } from "./myOrder.reducers";
// import { cartV2Reducers } from "./cartV2.reducers";

const rootReducer=combineReducers({
    signInReducers,
    productReducers,
    // cartV2Reducers,
    cartReducers,
    detailReducers,
    signUpReducers,
    orderReducers,
    myOrderReducers,
});
export default rootReducer;