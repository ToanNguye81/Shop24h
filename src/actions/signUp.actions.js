import {
    FETCH_COUNTRIES_ERROR,
    FETCH_COUNTRIES_PENDING,
    FETCH_COUNTRIES_SUCCESS,
    GET_CITY,
    GET_ADDRESS,
    GET_COUNTRY,
    FETCH_CITIES_ERROR,
    FETCH_CITIES_PENDING,
    FETCH_CITIES_SUCCESS,
    CREATE_USER_PENDING,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
} from "../constants/signUp.constants";

const countriesUrl = "https://api.countrystatecity.in/v1/countries/"
const createUserUrl = "http://localhost:8000/customers/"
// const countriesUrl="https://restcountries.com/v3.1/all" 
// const countriesUrl="https://countriesnow.space/api/v0.1/countries/states" 

// Get cities list with REST_API
export const fetchCities = (paramIsoCountry) => {
    return async (dispatch) => {

        var headers = new Headers();
        headers.append("X-CSCAPI-KEY", "NjFRSUdoSm5EY2RIaE9TSTlMdHcxOExGN2QwWnJJTFVNelFQQVExVQ==");

        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        await dispatch({
            type: FETCH_CITIES_PENDING
        });

        try {
            const allCitiesRes = await fetch(countriesUrl + paramIsoCountry + "/cities", requestOptions);
            const allCitiesObj = await allCitiesRes.json();
            console.log(allCitiesObj)
            return dispatch({
                type: FETCH_CITIES_SUCCESS,
                cityOptions: allCitiesObj
            })
        } catch (err) {
            return dispatch({
                type: FETCH_CITIES_ERROR,
                error: err
            })
        }
    }
}

//Get country list
export const fetchCountries = () => {
    return async (dispatch) => {

        var headers = new Headers();
        headers.append("X-CSCAPI-KEY", "NjFRSUdoSm5EY2RIaE9TSTlMdHcxOExGN2QwWnJJTFVNelFQQVExVQ==");

        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        await dispatch({
            type: FETCH_COUNTRIES_PENDING
        });

        try {
            const allCountriesRes = await fetch(countriesUrl, requestOptions);
            const allCountriesObj = await allCountriesRes.json();
            return dispatch({
                type: FETCH_COUNTRIES_SUCCESS,
                countryOptions: allCountriesObj
            })
        } catch (err) {
            return dispatch({
                type: FETCH_COUNTRIES_ERROR,
                error: err
            })
        }
    }
}

//get country
export const getCountry = (paramCountry) => {
    return {
        type: GET_COUNTRY,
        country: paramCountry,
    }
}

//get city
export const getCity = (paramCity) => {
    return {
        type: GET_CITY,
        city: paramCity
    }
}

//get Address
export const getAddress = (paramAddress) => {
    return {
        type: GET_ADDRESS,
        address: paramAddress,
    }
}

//Create new user
export const createNewUser = (paramUser) => {

    const userInfo = getUserInfo(paramUser)
    console.log(userInfo)
    const isValid = validateUser(userInfo)
    if (isValid) {
        sendRegisterInfo(userInfo)
        console.log("success")
    }
}

const getUserInfo = (paramUser) => {
    return {
        email: paramUser.get('email'),
        phone: paramUser.get('phone'),
        firstName: paramUser.get('firstName'),
        lastName: paramUser.get('lastName'),
        country: paramUser.get('country'),
        city: paramUser.get('city'),
        address: paramUser.get('address'),
    }

}

//Send Register info to Server
export const sendRegisterInfo = (paramUser) => {
    console.log(paramUser)
    return async (dispatch) => {
        var requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paramUser)
        };

        await dispatch({
            type: CREATE_USER_PENDING
        });

        try {
            const res = await fetch(createUserUrl, requestOptions);
            const resObj = await res.json();
            console.log(resObj)
            return dispatch({
                type: CREATE_USER_SUCCESS,
                resCreateUser: resObj
            })
        } catch (err) {
            console.log("err")
            return dispatch({
                type: CREATE_USER_ERROR,
                error: err
            })
        }
    }
}

//Valid User Information
export const validateUser = (paramUser) => {
    if (!validateEmail(paramUser.email)) {
        alert("You have entered an invalid Email!")
        return false
    }
    if (!validatePhone(paramUser.phone)) {
        alert("You have entered an invalid Phone!")
        return false
    }
    if (paramUser.firstName.trim() === "") {
        alert("You have entered an invalid First Name")
        return false
    }
    if (paramUser.lastName.trim() === "") {
        alert("You have entered an invalid Fast Name")
        return false
    }
    if (paramUser.country.trim() === "") {
        alert("You have entered an invalid Country")
        return false
    }
    if (paramUser.city.trim() === "") {
        alert("You have entered an invalid City")
        return false
    }
    if (paramUser.address.trim() === "") {
        alert("You have entered an invalid Address")
        return false
    }
    return true
}

//Valid Email
export const validateEmail = (paramEmail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(paramEmail)) {
        return (true)
    }
    return (false)
}

// Validate Phone Number
export const validatePhone = (paramPhone) => {
    var phone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if ((paramPhone.match(phone))) {
        return true;
    }
    else {
        return false;
    }
}
