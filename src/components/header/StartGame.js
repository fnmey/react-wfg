// "Start Game" - Button displayed in the pre-game header section
const StartGame = ({ onClick }) => {
  return (
    <button className="btn btn-start" onClick={onClick}>
      Start Game!
    </button>
  );
};

export default StartGame;
