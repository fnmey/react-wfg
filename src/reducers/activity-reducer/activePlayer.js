const starterChoose = () => {
  var possibilities = [true,false]
  var random = possibilities[Math.floor(Math.random()*possibilities.length)];
  return random
}


const activePlayer = (state = false, action) => {
    switch(action.type){
        case "CHANGE_ACTIVE_PLAYER":
            return !state
        case "RANDOM_ACTIVE_PLAYER":
            return starterChoose()
        case "NEXT_ACTIVE_PLAYER":
            return action.payload
        default: 
            return state
    }
}
export default activePlayer;