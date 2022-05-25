const scorePlayerOne = (state = 0, action) => {
    switch(action.type){
        case "INCREMENT_SCORE_1":
            return state + 1
        case "DECREMENT_SCORE_1":
            return state - 1
        default: 
            return state
    }
}
export default scorePlayerOne;