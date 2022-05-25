const finishedPlayerTwo = (state = false, action) => {
    switch(action.type){
        case "FINISH_2":
            return !state
        default: 
            return state
    }
}
export default finishedPlayerTwo;