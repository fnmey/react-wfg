// actions on state "activePreGameButton"
export const toggle_rules = () => {
    return {
        type: "TOGGLE_RULES",
    }
}
export const toggle_categorySelect = () => {
    return {
        type: "TOGGLE_CATEGORY_SELECT",
    }
}
export const toggle_about = () => {
    return {
        type: "TOGGLE_ABOUT",
    }
}
export const untoggle = () => {
    return {
        type: "UNTOGGLE",
    }
}

// actions on state "activatedSelection"
export const activateStandardSelection = () => {
    return {
        type: "ACTIVATE_STANDARD_SELECTION",
    }
}
export const activateCustomSelection = () => {
    return {
        type: "ACTIVATE_CUSTOM_SELECTION",
    }
}

// actions on state "viewSelection"
export const viewCustomSelection = () => {
    return {
        type: "VIEW_CUSTOM_SELECTION",
    }
}
export const viewStandardSelection = () => {
    return {
        type: "VIEW_STANDARD_SELECTION",
    }
}