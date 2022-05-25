const endMoveButton = (state = false, action) => {
    switch(action.type){
        case "TOGGLE_END_MOVE_BUTTON":
            return !state
        default: 
            return state
    }
}
export default endMoveButton;