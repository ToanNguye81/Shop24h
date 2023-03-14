import { ERROR_LOG_IN, SUCCESS_LOG_IN,SUCCESS_LOG_OUT } from "../constants/signIn.constants"

export const successLogIn = (user) => {
        return {
            type: SUCCESS_LOG_IN,
            photoURL: user.photoURL,
            userName:user.userName,
            userEmail:user.userEmail,
        }
}
export const successLogOut = () => {
    console.log('successLogOut')
        return {
            type: SUCCESS_LOG_OUT,
        }   
}
