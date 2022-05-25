const scorePlayerTwo = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT_SCORE_2":
            return state + 1
        case "DECREMENT_SCORE_2":
            return state - 1
        default: 
            return state
    }
}
export default scorePlayerTwo;