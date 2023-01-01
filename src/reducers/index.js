import {  combineReducers } from "redux";
import { signInReducer } from "./signIn.reducers";
const rootReducer=combineReducers({
    signInReducer
});
export default rootReducer;