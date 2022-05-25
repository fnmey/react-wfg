import { combineReducers } from "redux";
import nextRoundButton from "./nextRoundButton";
import endMoveButton from "./endMoveButton";


const buttonReducer = combineReducers({
    nextRoundButton: nextRoundButton,
    endMoveButton: endMoveButton,

})

export default buttonReducer