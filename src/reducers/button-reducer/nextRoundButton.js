const nextRoundButton = (state = false, action) => {
    switch(action.type){
        case "TOGGLE_NEXT_ROUND_BUTTON":
            return !state
        default: 
            return state
    }
}
export default nextRoundButton;