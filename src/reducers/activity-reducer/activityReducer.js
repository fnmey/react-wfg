import { combineReducers } from "redux";
import activeCategory from "./activeCategory";
import activeGame from "./activeGame";
import activePlayer from "./activePlayer";
import activeRound from "./activeRound";
import activeStatus from "./activeStatus";


const activityReducer = combineReducers({
    activePlayer: activePlayer,
    activeCategory: activeCategory,
    activeGame: activeGame,
    activeRound: activeRound,
    activeStatus: activeStatus,
})

export default activityReducer