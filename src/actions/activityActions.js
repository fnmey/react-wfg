// action on state "activeCategory"
export const choose_ActiveCategory = () => {
    return {
        type: "CHOOSE_ACTIVE_CATEGORY",
    }
}

// action on state "activeStatus"
export const choose_ActiveStatus = () => {
    return {
        type: "CHOOSE_ACTIVE_STATUS",
    }
}

// actions on state "activePlayer"
export const change_ActivePlayer = () => {
    return {
        type: "CHANGE_ACTIVE_PLAYER",
    }
}
export const random_ActivePlayer = () => {
    return {
        type: "RANDOM_ACTIVE_PLAYER",
    }
}
export const next_ActivePlayer = (next_ActivePlayer) => {
    return {
        type: "NEXT_ACTIVE_PLAYER",
        payload: next_ActivePlayer
    }
}

// action on state "activeGame"
export const activateGame = () => {
    return {
        type: "ACTIVATE_GAME",
    }
}

// action on state "activeRound"
export const toggle_activeRound = () => {
    return {
        type: "TOGGLE_ACTIVE_ROUND",
    }
}