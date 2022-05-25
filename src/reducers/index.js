import { combineReducers } from "redux";
import countriesPlayed from "./countriesPlayed";
import preGameReducer from "./pre-game-reducer/preGameReducer";
import activityReducer from "./activity-reducer/activityReducer";
import buttonReducer from "./button-reducer/buttonReducer";
import playerReducer from "./player-reducer/playerReducer";
import counterReducer from "./counter-reducer/counterReducer";

const rootReducer = combineReducers({
    activityState: activityReducer,
    buttonState: buttonReducer,
    counterState: counterReducer,
    playerState: playerReducer,
    preGameState: preGameReducer,
    countriesPlayed: countriesPlayed
})

export default rootReducer