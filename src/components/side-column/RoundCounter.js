// redux tools import
import { useSelector } from "react-redux";

// round counter component that only gets changed, when a next round starts
// and thereby the round counter increments
const RoundCounter = () => {
  // redux state that contains the current round counter
  const roundCounter = useSelector((state) => state.counterState.roundCounter);

  return <div className="round-counter">Round {roundCounter}</div>;
};

export default RoundCounter;
