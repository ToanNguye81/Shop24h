import { SUCCESS_LOG_IN, SUCCESS_LOG_OUT,RESET_USER } from "../constants/signIn.constants"


//Handle Setup user account
export const setUser = (user) => {
    return {
        type: SUCCESS_LOG_IN,
        user: user
    }
}

//Handle logout User
export const logoutUser = () => {
    console.log('logoutUser')
    return {
        type: SUCCESS_LOG_OUT,
    }
}

// resetUser 
export const resetUser=()=>{
    console.log("Reset User")
    return {
        type: RESET_USER,
    }
}