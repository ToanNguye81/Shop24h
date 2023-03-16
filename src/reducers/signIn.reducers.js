import { ERROR_LOG_IN, SUCCESS_LOG_IN, SUCCESS_LOG_OUT } from "../constants/signIn.constants"

const initializeState = {
    logged: false,
    user: {},
}
export const signInReducers = (state = initializeState, action) => {
    switch (action.type) {
        case SUCCESS_LOG_IN:
            state.logged = true
            state.user = action.user
            break;
        case ERROR_LOG_IN:

            break;
        case SUCCESS_LOG_OUT:
            state.logged = false
            state.user = {}
            break;
        default:
            break;
    }
    return { ...state }
}