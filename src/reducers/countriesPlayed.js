const appendToList = (state, payload) => {
    state.push(payload)
    return state

}

const countriesPlayed = (state = [], action) => {
    switch (action.type) {
        case "GET_COUNTRY_ID":
            return appendToList(state, action.payload)
        case "RESET_ID_LIST":
            return []
        default:
            return state
    }
}
export default countriesPlayed;