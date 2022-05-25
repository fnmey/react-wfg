const roundCounter = (state = 1, action) => {
    switch (action.type) {
        case "INCREMENT_ROUND_COUNTER":
            return state + 1
        default:
            return state
    }
}
export default roundCounter;