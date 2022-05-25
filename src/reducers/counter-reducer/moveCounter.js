const moveCounter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_MOVE_COUNTER":
            return state + 1
        case "RESET_MOVE_COUNTER":
            return 0
        default:
            return state
    }
}
export default moveCounter;