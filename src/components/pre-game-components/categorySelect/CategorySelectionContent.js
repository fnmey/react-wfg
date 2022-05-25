// redux and react tools import
import { useSelector } from "react-redux";
import { useState } from "react";

// component imports
import CustomSelection from "./CustomSelection";
import StandardSelection from "./StandardSelection";

// category selection content component, that gets displayed/hidden
// every time the "Category Selection" - Button gets clicked
const CategorySelectionContent = ({ selectionButton, selectionSwitch }) => {
  // redux state that describes, which of the two selection views is active
  const viewSelection = useSelector(
    (state) => state.preGameState.viewSelection
  );

  // TRANSFER IN APP.JS!
  // useState, that defines the standard category selection
  const [standardCategories, setStandardCategories] = useState([
    { id: 1, name: "area", beschreibung: "Beschreibung der area" },
    { id: 2, name: "population", beschreibung: "Beschreibung der population" },
    { id: 3, name: "border", beschreibung: "Beschreibung der border" },
    { id: 4, name: "coastline", beschreibung: "Beschreibung der coastline" },
  ]);

  // TRANSFER IN APP.JS!
  // filter function to filter out "clicked away categories" in the custom category selection
  const deleteCustomSelection = (input) => {
    setStandardCategories(
      standardCategories.filter((categories) => categories.id !== input)
    );
  };

  // display and component use based on the mentioned state
  return (
    <div className="selection-container">
      <div className="selection-header">Select the categories</div>
      <div className="selection-switch">
        <div
          className={`selection-part${
            viewSelection === "standard" ? " selection-active sp-standard" : ""
          }`}
          onClick={viewSelection === "custom" ? selectionSwitch : () => {}}
        >
          Standard Selection
        </div>

        <div
          className={`selection-part${
            viewSelection === "custom" ? " selection-active sp-custom" : ""
          }`}
          onClick={viewSelection === "standard" ? selectionSwitch : () => {}}
        >
          Custom Selection
        </div>
      </div>
      {viewSelection === "standard" ? (
        <StandardSelection
          standardCategories={standardCategories}
          selectionButton={selectionButton}
        />
      ) : (
        <CustomSelection
          standardCategories={standardCategories}
          deleteCustomSelection={deleteCustomSelection}
          selectionButton={selectionButton}
        />
      )}
    </div>
  );
};

export default CategorySelectionContent;
