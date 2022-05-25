// x-cross icon import
import { FaTimes } from "react-icons/fa";

// redux tools import
import { useSelector } from "react-redux";

// content box component that stores the information for every category
const ContentBox = ({ category, deleteCustomSelection }) => {
  // redux state that describes, which of the two selection views is active
  const viewSelection = useSelector(
    (state) => state.preGameState.viewSelection
  );

  // display and styling is based on the mentioned state
  return (
    <div className="contentbox-wrapper">
      <div className="contentbox-name">{category.name}</div>
      <div className="contentbox-description">
        {category.beschreibung}
        {viewSelection === "custom" ? (
          <FaTimes
            className="delete-cross"
            onClick={() => deleteCustomSelection(category.id)}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ContentBox;
