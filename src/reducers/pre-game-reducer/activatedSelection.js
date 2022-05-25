const activatedSelection = (state = "custom", action) => {
    switch (action.type) {
        case "ACTIVATE_STANDARD_SELECTION":
            return "standard"
        case "ACTIVATE_CUSTOM_SELECTION":
            return "custom"
        default:
            return state
    }
}
export default activatedSelection;