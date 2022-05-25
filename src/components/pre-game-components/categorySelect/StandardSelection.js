// redux tools import
import { useSelector } from "react-redux";

// component import
import ContentBox from "./ContentBox";

// standard selection component that is displayed, when the viewSelection-state === "standard"
// stores the standard categories in an individual wrapper
const StandardSelect = ({ standardCategories, selectionButton }) => {
  // redux state that defines, which selection is currently choosen
  const activatedSelection = useSelector(
    (state) => state.preGameState.activatedSelection
  );

  // display and styling based on mentioned state
  return (
    <div className="selection-contentbox sc-standard">
      {standardCategories.map((standardCategories) => (
        <ContentBox key={standardCategories.id} category={standardCategories} />
      ))}
      {activatedSelection === "standard" ? (
        <div className="selection-footer">
          <div className="selection-state current">
            {" "}
            The Standard Selection is currently selected!{" "}
          </div>
          <div className="selection-button">
            <div className="btn btn-start-locked">Select!</div>
          </div>
        </div>
      ) : (
        <div className="selection-footer">
          <div className="selection-state noncurrent">
            {" "}
            The Standard Selection is currently not selected!{" "}
          </div>
          <div className="selection-button">
            <div className="btn btn-start" onClick={selectionButton}>
              Select!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StandardSelect;
