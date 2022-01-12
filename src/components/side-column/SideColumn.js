import CategoryBox from "./category-box/CategoryBox"
import CompareCard from "./CompareCard"
import ScoreBox from "./score-box/ScoreBox"


const SideColumn = ({comp_country, cat, status}) => {
    return (
        <div className="side-column">
            <CategoryBox cat={cat} status={status}/>
            <CompareCard comp_country={comp_country}/>
            <ScoreBox />
        </div>
    )
}

export default SideColumn
