// component import
import Card from "./Card";

// game field component, that is located right next to the side column
// and stores the cards
const GameField = ({ fieldCountries, compareCountry, onClick }) => {
  return (
    <div className="game-field">
      {fieldCountries.map((fieldCountries) => (
        <Card
          key={fieldCountries.id}
          country={fieldCountries}
          onClick={onClick}
          compareCountry={compareCountry}
        />
      ))}
    </div>
  );
};

export default GameField;
