const viewSelection = (state = "standard", action) => {
    switch (action.type) {
        case "VIEW_STANDARD_SELECTION":
            return "standard"
        case "VIEW_CUSTOM_SELECTION":
            return "custom"
        default:
            return state
    }
}
export default viewSelection;