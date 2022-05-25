// actions on state "countriesPlayed"
export const countriesID = (country_id) => {
    return {
        type: "GET_COUNTRY_ID",
        payload: country_id
    }
}
export const resetID = () => {
    return {
        type: "RESET_ID_LIST",
    }
}


