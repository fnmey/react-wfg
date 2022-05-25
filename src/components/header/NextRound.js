// redux tools import
import { useSelector } from "react-redux";

// "Next Round" - Button displayed in the header section when the game is active
const NextRound = ({ onClick }) => {
  // redux state to see whether the "Next Round" - Button should be locked or not
  const nextRoundButton = useSelector(
    (state) => state.buttonState.nextRoundButton
  );

  // styling and onClick function are changed based on the mentioned state
  return (
    <button
      className={`btn btn-start${!nextRoundButton ? "-locked" : ""}`}
      onClick={onClick}
    >
      Next Round!
    </button>
  );
};

export default NextRound;
