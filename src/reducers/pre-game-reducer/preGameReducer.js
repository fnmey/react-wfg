import { combineReducers } from "redux";
import activatedSelection from "./activatedSelection";
import activePreGameButton from "./activePreGameButton";
import viewSelection from "./viewSelection";

// this reducer bundles all states that get changed/used in the pre game
const preGameReducer = combineReducers({
    activatedSelection: activatedSelection,
    activePreGameButton: activePreGameButton,
    viewSelection: viewSelection
})

export default preGameReducer