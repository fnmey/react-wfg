import Card from "../Card"

const GameField = ({countries, comp_country,onClick}) => {
    
    return (
        <div className="game-field">
            {countries.map((country) => (
                <Card 
                key = {country.id}
                country = {country} 
                onClick={onClick}
                comp_country = {comp_country}/>
            ))}
        </div>
    )
}

export default GameField
