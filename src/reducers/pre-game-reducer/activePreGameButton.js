const activePreGameButton = (state = "none", action) => {
    switch(action.type){
        case "TOGGLE_RULES":
            return "rules"
        case "TOGGLE_CATEGORY_SELECT":
            return "categorySelect"
        case "TOGGLE_ABOUT":
            return "about"
        case "UNTOGGLE":
            return "none"
        default: 
            return state
    }
}
export default activePreGameButton;