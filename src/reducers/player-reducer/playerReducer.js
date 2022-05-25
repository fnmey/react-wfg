import { combineReducers } from "redux";
import scorePlayerOne from "./scorePlayerOne";
import scorePlayerTwo from "./scorePlayerTwo";
import finishedPlayerOne from "./finishedPlayerOne";
import finishedPlayerTwo from "./finishedPlayerTwo";


const playerReducer = combineReducers({
    scorePlayerOne: scorePlayerOne,
    scorePlayerTwo: scorePlayerTwo,
    finishedPlayerOne: finishedPlayerOne,
    finishedPlayerTwo: finishedPlayerTwo
})

export default playerReducer