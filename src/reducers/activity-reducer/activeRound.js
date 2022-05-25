const activeRound = (state = false, action) => {
    switch(action.type){
        case "TOGGLE_ACTIVE_ROUND":
            return !state
        default: 
            return state
    }
}
export default activeRound;