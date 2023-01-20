import {
    FETCH_COUNTRIES_ERROR,
    FETCH_COUNTRIES_PENDING,
    FETCH_COUNTRIES_SUCCESS,
    // COUNTRIES_PAGINATION_CHANGE,
    // BRAND_FILTER_CHANGE,
    // ORDINAL_FILTER_CHANGE,
    // MIN_PRICE_CHANGE,
    // MAX_PRICE_CHANGE
} from "../constants/signUp.constants";

const countriesUrl="https://restcountries.com/v3.1/all"
// export const changePagination = (page) => {
//     return {
//         type: COUNTRIES_PAGINATION_CHANGE,
//         page: page
//     }
// }

// export const changeBrand = (brand) => {
//     return {
//         type: BRAND_FILTER_CHANGE,
//         brand: brand,
//     }
// }

// export const changeMinPrice = (minPrice) => {
//     console.log(minPrice)
//     return {
//         type: MIN_PRICE_CHANGE,
//         minPrice: minPrice,
//     }
// }

// export const changeMaxPrice = (maxPrice) => {
//     console.log(maxPrice)
//     return {
//         type: MAX_PRICE_CHANGE,
//         maxPrice: maxPrice,
//     }
// }

// export const changeOrdinal = (ordinal) => {
//     return {
//         type: ORDINAL_FILTER_CHANGE,
//         ordinal: ordinal,
//     }
// }

export const fetchCountries = () => {
    return async (dispatch) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        await dispatch({
            type: FETCH_COUNTRIES_PENDING
        });

        try {
            const allCountriesRes = await fetch(countriesUrl, requestOptions);
            const allCountriesObj = await allCountriesRes.json();
            console.log(allCountriesObj )
            // const countryName=[]
            // countryName.push(allCountriesObj.map((item,index)=>{item.name.common}))
            // console.log(countryName)
            return dispatch({
                type: FETCH_COUNTRIES_SUCCESS,
                countryOptions:allCountriesObj

            })
        } catch (err) {
            return dispatch({
                type: FETCH_COUNTRIES_ERROR,
                error: err
            })
        }
    }
}