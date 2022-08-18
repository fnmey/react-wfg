// "static" compare card component that only gets new input in country information
// everytime a round ends
const CompareCard = ({ compareCountry }) => {
    return (
        <div className="card card-large">
            <img src={require(`/src/images/flags/${compareCountry.iso}.svg`)} alt="" />
            <p className="country-name">{compareCountry.name}</p>
            <p className="country-capital">{compareCountry.capital}</p>
        </div>
    )
}

export default CompareCard
