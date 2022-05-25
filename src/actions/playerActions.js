// action on state "finishedPlayerOne"
export const finish_PlayerOne = () => {
    return {
        type: "FINISH_1",
    }
}

// action on state "finishedPlayerTwo"
export const finish_PlayerTwo = () => {
    return {
        type: "FINISH_2",
    }
}


// actions on state "scorePlayerOne"
export const increment_ScorePlayerOne = () => {
    return {
        type: "INCREMENT_SCORE_1",
    }
}
export const decrement_ScorePlayerOne = () => {
    return {
        type: "DECREMENT_SCORE_1",
    }
}

// actions on state "scorePlayerTwo"
export const increment_ScorePlayerTwo = () => {
    return {
        type: "INCREMENT_SCORE_2",
    }
}
export const decrement_ScorePlayerTwo = () => {
    return {
        type: "DECREMENT_SCORE_2",
    }
}