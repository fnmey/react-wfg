import CategoryName from "./CategoryName"
import CategoryStatus from "./CategoryStatus"

const CategoryBox = ({cat,status}) => {
    return (
        <div className="cat">
            <div className="cat cat-label"> Kategorie</div>
            <div className="cat-name-status">
                <CategoryName cat={cat} />
                <CategoryStatus status={status}/>
            </div>
        </div>
    )
}

export default CategoryBox
