const activeGame = (state = false, action) => {
    switch(action.type){
        case "ACTIVATE_GAME":
            return true
        default: 
            return state
    }
}
export default activeGame;