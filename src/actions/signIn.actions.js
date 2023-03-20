import { ERROR_LOG_IN, SUCCESS_LOG_IN, SUCCESS_LOG_OUT,RESET_USER } from "../constants/signIn.constants"

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

// resetUser 
export const resetUser=()=>{
    console.log("Set User")
    return {
        type: RESET_USER,
    }
}