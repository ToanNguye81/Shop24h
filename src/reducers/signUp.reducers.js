import { FETCH_COUNTRIES_PENDING,FETCH_COUNTRIES_SUCCESS,FETCH_COUNTRIES_ERROR } from "../constants/signUp.constants"

const initializeState = {
    loadCountriesPending:false,
    countryOptions :null,
    cityOptions: null,

}
export const signUpReducers = (state = initializeState, action) => {
    switch (action.type) {
        case FETCH_COUNTRIES_PENDING:
            state.loadCountriesPending=true
            break;
        case FETCH_COUNTRIES_SUCCESS:
            state.loadCountriesPending=false
            state.countryOptions=action.countryOptions
            console.log(action.countryOptions)
            break;
        case FETCH_COUNTRIES_ERROR:
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