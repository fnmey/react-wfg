// redux-tools import
import { useSelector } from "react-redux";

// "Start Round" - Button displayed in the header section when the game is active
const StartRound = ({ onClick }) => {
  // redux state to see whether the "Start Round" - Button should be locked or not
  const activeRound = useSelector((state) => state.activityState.activeRound);

  // styling and onClick function are changed based on the mentioned state
  return (
    <button
      className={`btn btn-start${activeRound ? "-locked" : ""}`}
      onClick={!activeRound ? onClick : () => {}}
    >
      Start Round!
    </button>
  );
};

export default StartRound;
