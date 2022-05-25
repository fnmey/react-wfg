// redux tools import
import { useSelector } from "react-redux";

// component imports
import Rules from "./rules/Rules";
import About from "./about/About";
import CategorySelection from "./categorySelect/CategorySelection";
import RulesContent from "./rules/RulesContent";
import AboutContent from "./about/AboutContent";
import CategorySelectionContent from "./categorySelect/CategorySelectionContent";

// pre game component that is displayed when the game is not active
// stores the three clickable buttons and potentially their associated content
const PreGame = ({ selectionButton, selectionSwitch, toggle }) => {
  // redux state to get the currently active pre game Button
  const activePreGameButton = useSelector(
    (state) => state.preGameState.activePreGameButton
  );

  // every button calls the toggle-function with its own input
  // after calling this function, the state gets changed and the styling changes
  // to eventually display/hide the associated content
  return (
    <div>
      <div className="pregame-button-wrapper">
        <Rules onClick={() => toggle("RulesButton")} />
        <CategorySelection onClick={() => toggle("CategorySelectButton")} />
        <About onClick={() => toggle("AboutButton")} />
      </div>
      <div>
        {activePreGameButton === "rules" ? (
          <RulesContent />
        ) : activePreGameButton === "categorySelect" ? (
          <CategorySelectionContent
            selectionSwitch={selectionSwitch}
            selectionButton={selectionButton}
          />
        ) : activePreGameButton === "about" ? (
          <AboutContent />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PreGame;
