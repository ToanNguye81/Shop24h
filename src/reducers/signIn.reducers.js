import { ERROR_LOG_IN, SUCCESS_LOG_IN, SUCCESS_LOG_OUT } from "../constants/signIn.constants"

const initializeState = {
    logged: false,
    photoURL: null,
    userName: null
}
export const signInReducer = (state = initializeState, action) => {
    switch (action.type) {
        case SUCCESS_LOG_IN:
            state.logged = true
            state.photoURL = action.photoURL
            state.userName = action.userName
            break;
        case ERROR_LOG_IN:

            break;
        case SUCCESS_LOG_OUT:
            console.log("SUCCESS_LOG_OUT")
            state.photoURL = null
            state.userName = null
            break;
        default:
            break;
    }
    return { ...state }
}