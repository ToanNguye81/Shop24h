import {
    FETCH_COUNTRIES_ERROR,
    FETCH_COUNTRIES_PENDING,
    FETCH_COUNTRIES_SUCCESS,
    GET_CITY,
    GET_COUNTRY,
    FETCH_CITIES_ERROR,
    FETCH_CITIES_PENDING,
    FETCH_CITIES_SUCCESS,
} from "../constants/signUp.constants";

// const countriesUrl="https://restcountries.com/v3.1/all" //get countries
// const countriesUrl="https://countriesnow.space/api/v0.1/countries/states" // Get countries and states
const countriesUrl="https://api.countrystatecity.in/v1/countries/"

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
            const allCitiesRes = await fetch(countriesUrl+paramIsoCountry+"/cities", requestOptions);
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

export const getCountry=(paramCountry)=>{
    return {
                type: GET_COUNTRY,
                country: paramCountry,
            }
}

export const getCity=(paramCity)=>{
    return {
                type: GET_CITY,
                city: paramCity
            }
}

export const getAddress=(paramAddress)=>{
    return {
                type: GET_CITY,
                address: paramAddress,
            }
}

export const createNewUser=(paramNewUser)=>{
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