import { ERROR_LOG_IN, SUCCESS_LOG_IN,SUCCESS_LOG_OUT } from "../constants/signIn.constants"

export const successLogIn = (photoURL,userName) => {
        return {
            type: SUCCESS_LOG_IN,
            photoURL: photoURL,
            userName:userName
        }
}
export const successLogOut = () => {
    console.log('successLogOut')
        return {
            type: SUCCESS_LOG_OUT,
        }   
}
