// component imports
import StartGame from "./StartGame";
import EndMove from "./EndMove";
import NextRound from "./NextRound";
import StartRound from "./StartRound";

// redux tools import
import { useSelector } from "react-redux";

// header component that stores the title and the related buttons
// based on the state of the game
const Header = ({
  startGameFunction,
  endMoveFunction,
  nextRoundFunction,
  startRoundFunction,
}) => {
  // redux state to see whether the game is active or not
  const activeGame = useSelector((state) => state.activityState.activeGame);

  // display and implementation of the buttons is based on the mentioned state
  return (
    <header className="header">
      <h1 className="title">World Fact Game</h1>
      {!activeGame ? (
        <div className="button-bar start-bar">
          <StartGame onClick={startGameFunction} />
        </div>
      ) : (
        <div className="button-bar">
          <NextRound onClick={nextRoundFunction} />
          <EndMove onClick={endMoveFunction} />
          <StartRound onClick={startRoundFunction} />
        </div>
      )}
    </header>
  );
};

export default Header;
