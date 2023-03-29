import { combineReducers } from "redux";
import { signInReducers } from "./signIn.reducers";
import { productReducers} from "./product.reducers";
import { cartReducers} from "./cart.reducers";
import { detailReducers } from "./detail.reducers";
import { signUpReducers } from "./signUp.reducers";
import { orderReducers } from "./order.reducers";
import { myOrderReducers } from "./myOrder.reducers";
import { orderDetailReducers } from "./orderDetail.reducers";

const rootReducer=combineReducers({
    signInReducers,
    productReducers,
    cartReducers,
    detailReducers,
    signUpReducers,
    orderReducers,
    myOrderReducers,
    orderDetailReducers
});
export default rootReducer;