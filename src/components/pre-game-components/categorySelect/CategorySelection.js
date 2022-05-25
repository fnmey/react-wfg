// "Category Selection" - Button displayed in the pre-game section
const CategorySelection = ({ onClick }) => {
  return (
    <button className="btn btn-pregame" onClick={onClick}>
      Category Select
    </button>
  );
};

export default CategorySelection;
