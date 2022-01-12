import { useState } from "react"

const CompareCard = ({comp_country}) => {
    
    
    return (
        <div className="card card-large">
            <div className="country-border">
                {comp_country.inhabitants}
            </div>
            <div className="country-name">
                {comp_country.name}
            </div>
            <div className="country-capital">
                {comp_country.capital}
            </div>
        </div>
    )
}

export default CompareCard
