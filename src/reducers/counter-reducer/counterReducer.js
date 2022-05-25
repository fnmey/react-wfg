import { combineReducers } from "redux";
import moveCounter from "./moveCounter";
import roundCounter from "./roundCounter";

const counterReducer = combineReducers({
    moveCounter: moveCounter,
    roundCounter: roundCounter,
})

export default counterReducer