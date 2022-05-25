// redux-tools import
import { useSelector } from "react-redux";

// "End Move" - Button displayed in the header section when the game is active
const EndMove = ({ onClick }) => {
  // redux state to see whether the "End Move" - Button should be locked or not
  const endMoveButton = useSelector((state) => state.buttonState.endMoveButton);

  // styling and onClick function are changed based on the mentioned state
  return (
    <button
      className={`btn btn-start${!endMoveButton ? "-locked" : ""}`}
      onClick={endMoveButton ? onClick : () => {}}
    >
      End Move!
    </button>
  );
};

export default EndMove;
