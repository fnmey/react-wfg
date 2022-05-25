// component imports
import CategoryBox from "./CategoryBox"
import CompareCard from "./CompareCard"
import ScoreBox from "./ScoreBox"
import RoundCounter from "./RoundCounter"

// side column component that is displayed on the left side when the game is active
// this component is static and only its components change dynamically
const SideColumn = ({compareCountry, activeCategory, activeStatus}) => {
    return (
        <div className="side-column">
            <RoundCounter />
            <CategoryBox activeCategory={activeCategory} activeStatus={activeStatus}/>
            <CompareCard compareCountry={compareCountry}/>
            <ScoreBox />
        </div>
    )
}

export default SideColumn
