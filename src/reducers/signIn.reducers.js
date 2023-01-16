import { ERROR_LOG_IN, SUCCESS_LOG_IN, SUCCESS_LOG_OUT } from "../constants/signIn.constants"

const initializeState = {
    logged: false,
    photoURL: null,
    userName: null,
    userEmail:null

}
export const signInReducers = (state = initializeState, action) => {
    switch (action.type) {
        case SUCCESS_LOG_IN:
            state.logged = true
            state.photoURL = action.photoURL
            state.userName = action.userName
            state.userEmail = action.userEmail
            
            break;
        case ERROR_LOG_IN:

            break;
        case SUCCESS_LOG_OUT:
            state.logged = false
            state.photoURL = null
            state.userName = null
            state.userEmail = null
            break;
        default:
            break;
    }
    return { ...state }
}