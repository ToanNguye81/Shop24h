import { FETCH_COUNTRIES_PENDING, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_ERROR, GET_COUNTRY, GET_CITY, GET_ADDRESS } from "../constants/signUp.constants"

const initializeState = {
    loadCountriesPending: false,
    loadCitiesPending: false,
    countryOptions: null,
    cityOptions: null,
    address: null,
    country: null,
    city: null,
}
export const signUpReducers = (state = initializeState, action) => {
    switch (action.type) {
        case FETCH_COUNTRIES_PENDING:
            state.loadCountriesPending = true
            break;
        case FETCH_COUNTRIES_SUCCESS:
            state.loadCountriesPending = false
            state.countryOptions = action.countryOptions
            console.log(action.countryOptions)
            break;
        case FETCH_COUNTRIES_ERROR:
            break;
        case GET_COUNTRY:
            state.country = action.country
            break;

        case GET_CITY:
            state.city = action.city
            break;
        case GET_ADDRESS:
            state.address = action.address
            break;
        default:
            break;
    }
    return { ...state }
}