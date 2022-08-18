// redux-tools import
import { useSelector } from "react-redux";

// card component, that is styled similar to the original cards
// and stores valuable information:
// - country name
// - capital
// - country border
// - country flag

const Card = ({ country, onClick, compareCountry }) => {
  // styling of the card is based on the three stages:
  // - untouched (neither country.right nor country.wrong):
  //    - regular styling + onClick function
  // - correctly selected (country.right):
  //    - hidden + empty function
  // - wrongly selected (country.wrong):
  //    - red border + empty function

  // import the state of the nextRoundButton, to lock the cards, if the next round is imminent
  const nextRoundButton = useSelector((state) => state.buttonState.nextRoundButton);


  return (
    <div
      className={
        !country.right && !country.wrong
          ? "card card-small"
          : !country.right && country.wrong
          ? "card card-small card-wrong"
          : "card card-small card-right"
      }
      onClick={
        !country.right && !country.wrong && !nextRoundButton
          ? () => onClick(country, compareCountry)
          : () => {}
      }
    >
      <img src={require(`/src/images/flags/${country.iso}.svg`)} alt="" />
      <p className="country-name name-small">{country.name}</p>
      <p className="country-capital capital-small">{country.capital}</p>
    </div>
  );
};

export default Card;
