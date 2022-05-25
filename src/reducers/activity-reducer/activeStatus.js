const choose_ActiveStatus = () => {
    var possibilities = ["more", "less"]
    var random = possibilities[Math.floor(Math.random()*possibilities.length)];
    return random
  }
  
  
  const activeStatus = (state = "", action) => {
      switch(action.type){
          case "CHOOSE_ACTIVE_STATUS":
              return choose_ActiveStatus()
          default: 
              return state
      }
  }
  export default activeStatus;