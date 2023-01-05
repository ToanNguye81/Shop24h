import {  combineReducers } from "redux";
import { signInReducer } from "./signIn.reducers";
import { detailReducer } from "./detail.reducers";
const rootReducer=combineReducers({
    signInReducer,
    detailReducer
});
export default rootReducer;