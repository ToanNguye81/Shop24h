import { ERROR_LOG_IN, SUCCESS_LOG_IN } from "../constants/signIn.constants"

const initializeState = {
    logged: false,
    photoURL:null
}
export const signInReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SUCCESS_LOG_IN:
            state.logged=true
            state.photoURL=action.photoURL
            break;
        case ERROR_LOG_IN:

            break;

        default:
            break;
    }
    return {...state}
}