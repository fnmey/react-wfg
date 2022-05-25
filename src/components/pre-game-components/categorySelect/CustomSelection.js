// redux tools import
import { useSelector } from "react-redux";

// component import
import ContentBox from "./ContentBox";

// custom selection component that is displayed, when the viewSelection-state === "custom"
// stores the standard categories in an individual wrapper
// ÄNDERN ZU CUSTOM CATEGORIES!
const CustomSelection = ({
  standardCategories,
  selectionButton,
  deleteCustomSelection,
}) => {
  // redux state that defines, which selection is currently choosen
  const activatedSelection = useSelector(
    (state) => state.preGameState.activatedSelection
  );

  // display and styling based on mentioned state
  return (
    <div className="selection-contentbox sc-custom">
      {standardCategories.map((standardCategories) => (
        <ContentBox
          key={standardCategories.id}
          category={standardCategories}
          deleteCustomSelection={deleteCustomSelection}
        />
      ))}
      {activatedSelection === "custom" ? (
        <div className="selection-footer">
          <div className="selection-state current">
            {" "}
            The Custom Selection is currently selected!{" "}
          </div>
          <div className="selection-button">
            <div className="btn btn-start-locked">Select!</div>
          </div>
        </div>
      ) : (
        <div className="selection-footer">
          <div className="selection-state noncurrent">
            {" "}
            The Custom Selection is currently not selected!{" "}
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

export default CustomSelection;
