import { useState } from "react"

const Card = ({country,onClick,comp_country}) => {
    const [styling,setStyling] = useState("default")

    if (styling === "default"){
    return (
        <div className="card card-small" onClick={() => onClick(country,comp_country,setStyling)}>
            <div className="country-border border-small">
            {country.inhabitants} 
            </div>
            <div className="country-name name-small">
                {country.name}
            </div>
            <div className="country-capital capital-small">
                {country.capital}
            </div>
        </div>
    )
    }
    else if (styling === "wrong") {
        return (
            <div className="card card-small" style = {{border:"2px solid red",cursor:"default"}}>
                <div className="country-border border-small">
                {country.inhabitants} 
                </div>
                <div className="country-name name-small">
                    {country.name}
                </div>
                <div className="country-capital capital-small">
                    {country.capital}
                </div>
            </div>
        )    
    }
    else {
        return (
            <div className="card card-small" style = {{visibility:"hidden"}} onClick={() => onClick(country,comp_country,setStyling)}>
                <div className="country-border border-small">
                {country.inhabitants} 
                </div>
                <div className="country-name name-small">
                    {country.name}
                </div>
                <div className="country-capital capital-small">
                    {country.capital}
                </div>
            </div>
        ) 
    }
}

export default Card
