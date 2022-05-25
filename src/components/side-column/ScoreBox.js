// redux tools import
import { useSelector } from "react-redux";

const ScoreBox = () => {
  // redux state that stores the active player
  const activePlayer = useSelector((state) => state.activityState.activePlayer);

  // redux state that stores the score of player one
  const scorePlayerOne = useSelector(
    (state) => state.playerState.scorePlayerOne
  );

  // redux state that stores the score of player two
  const scorePlayerTwo = useSelector(
    (state) => state.playerState.scorePlayerTwo
  );

  // styling is based on the active player:
  // the active player score is colored in green , whereas the score of
  // the non-active player is not colored specifically
  return (
    <table>
      <th colSpan={"2"}>Score</th>
      <tr>
        <td className={`${activePlayer ? "score-active" : ""}`}>
          {scorePlayerOne}
        </td>
        <td className={`${!activePlayer ? "score-active" : ""}`}>
          {scorePlayerTwo}
        </td>
      </tr>
    </table>
  );
};

export default ScoreBox;
