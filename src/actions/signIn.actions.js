import { ERROR_LOG_IN, SUCCESS_LOG_IN } from "../constants/signIn.constants"

export const successLogIn = (photoURL,userName) => {
    console.log('successLogIn')
    console.log(photoURL)
        return {
            type: SUCCESS_LOG_IN,
            photoURL: photoURL,
            userName:userName
        }
}
