import { ERROR_LOG_IN, SUCCESS_LOG_IN, SUCCESS_LOG_OUT } from "../constants/signIn.constants"

export const setUser = (user) => {
    return {
        type: SUCCESS_LOG_IN,
        user: user
    }
}
export const logoutUser = () => {
    console.log('logoutUser')
    return {
        type: SUCCESS_LOG_OUT,
    }
}
