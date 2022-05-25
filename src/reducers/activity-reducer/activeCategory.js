const choose_ActiveCategory = () => {
    var possibilities = ["population", "area","border","coastline"]
    var random = possibilities[Math.floor(Math.random()*possibilities.length)];
    return random
  }
  
  const activeCategory = (state = "", action) => {
      switch(action.type){
          case "CHOOSE_ACTIVE_CATEGORY":
              return choose_ActiveCategory()
          default: 
              return state
      }
  }
  export default activeCategory;