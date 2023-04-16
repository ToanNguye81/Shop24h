import {
    LOAD_COUNTRIES_PENDING,
    LOAD_COUNTRIES_SUCCESS,
    LOAD_COUNTRIES_ERROR,
    GET_COUNTRY,
    GET_CITY,
    GET_ADDRESS,
    LOAD_CITIES_PENDING,
    LOAD_CITIES_SUCCESS,
    LOAD_CITIES_ERROR,
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR
} from "../constants/signUp.constants"

const initializeState = {
    createNewUserPending: false, 
    loadCountriesPending: false,
    loadCitiesPending: false,
    countryOptions: null,
    cityOptions: null,
    country: null,
    city: null,
    address: null,
    createRes: null
}
export const signUpReducers = (state = initializeState, action) => {
    switch (action.type) {
        case LOAD_COUNTRIES_PENDING:
            state.loadCountriesPending = true
            break;
        case LOAD_COUNTRIES_SUCCESS:
            state.loadCountriesPending = false
            state.countryOptions = action.countryOptions
            console.log(action.countryOptions)
            break;
        case LOAD_COUNTRIES_ERROR:
            break;

        case LOAD_CITIES_PENDING:
            state.loadCitiesPending = true
            break;
        case LOAD_CITIES_SUCCESS:
            state.loadCitiesPending = false
            state.cityOptions = action.cityOptions
            break;
        case LOAD_CITIES_ERROR:
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

        case CREATE_USER_PENDING:
            state.createNewUserPending = true
            console.log("CREATE_USER_PENDING")
            break;
        case CREATE_USER_SUCCESS:
            state.createNewUserPending = false
            console.log("CREATE_USER_SUCCESS")
            break;
        case CREATE_USER_ERROR:
            console.log("CREATE_USER_ERROR")
            break;
        default:
            break;
    }
    return { ...state }
}