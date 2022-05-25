const finishedPlayerOne = (state = false, action) => {
    switch(action.type){
        case "FINISH_1":
            return !state
        default: 
            return state
    }
}
export default finishedPlayerOne;