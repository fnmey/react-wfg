// component imports
import Header from "./components/header/Header.js";
import SideColumn from "./components/side-column/SideColumn.js";
import GameField from "./components/game-field/GameField.js";
import PreGame from "./components/pre-game-components/PreGame.js";

// function imports
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// redux action imports
// pre game actions
import {
  viewStandardSelection,
  viewCustomSelection,
} from "./actions/preGameActions.js";
import {
  activateStandardSelection,
  activateCustomSelection,
} from "./actions/preGameActions.js";
import {
  toggle_rules,
  toggle_categorySelect,
  toggle_about,
  untoggle,
} from "./actions/preGameActions.js";

// activity actions
import { activateGame, toggle_activeRound } from "./actions/activityActions.js";
import {
  change_ActivePlayer,
  random_ActivePlayer,
  next_ActivePlayer,
} from "./actions/activityActions.js";
import {
  choose_ActiveCategory,
  choose_ActiveStatus,
} from "./actions/activityActions.js";

// counter actions
import { increment_RoundCounter } from "./actions/counterActions.js";
import {
  increment_MoveCounter,
  reset_MoveCounter,
} from "./actions/counterActions.js";

// button actions
import {
  toggle_NextRoundButton,
  toggle_EndMoveButton,
} from "./actions/buttonActions.js";

// player actions
import {
  increment_ScorePlayerOne,
  increment_ScorePlayerTwo,
  decrement_ScorePlayerOne,
  decrement_ScorePlayerTwo,
} from "./actions/playerActions.js";
import { finish_PlayerOne, finish_PlayerTwo } from "./actions/playerActions.js";

// countries played actions
import { countriesID, resetID } from "./actions/countriesPlayedActions";

function App() {
  // ----------------------//
  // state assignments     //
  // ----------------------//

  // redux states
  // pre game states
  const activatedSelection = useSelector(
    (state) => state.preGameState.activatedSelection
  );
  const activePreGameButton = useSelector(
    (state) => state.preGameState.activePreGameButton
  );
  const viewSelection = useSelector(
    (state) => state.preGameState.viewSelection
  );

  // activity states
  const activeCategory = useSelector(
    (state) => state.activityState.activeCategory
  );
  const activeGame = useSelector((state) => state.activityState.activeGame);
  const activePlayer = useSelector((state) => state.activityState.activePlayer);
  const activeStatus = useSelector((state) => state.activityState.activeStatus);
  const activeRound = useSelector((state) => state.activityState.activeRound);

  // counter state
  const moveCounter = useSelector((state) => state.counterState.moveCounter);

  // player states
  const finishedPlayerOne = useSelector(
    (state) => state.playerState.finishedPlayerOne
  );
  const finishedPlayerTwo = useSelector(
    (state) => state.playerState.finishedPlayerTwo
  );
  const scorePlayerOne = useSelector(
    (state) => state.playerState.scorePlayerOne
  );
  const scorePlayerTwo = useSelector(
    (state) => state.playerState.scorePlayerTwo
  );

  // played countries state
  const countriesPlayed = useSelector((state) => state.countriesPlayed);

  const dispatch = useDispatch();

  // set the useState of our countries
  const [countries, setCountries] = useState();

  // set the useState of our countries
  const [compareCountry, setCompareCountry] = useState();

  // set the useState of our countries
  const [fieldCountries, setFieldCountries] = useState();

  // set the useState of the nextPlayer
  const [nextPlayer, setNextPlayer] = useState(false);

  // ----------------------//
  // side functions        //
  // ----------------------//

  // fetch the country data from our created server
  // and assign the shuffled list to countries
  // this makes sure that we will have random countries everytime we play
  useEffect(() => {
    const getCountries = async () => {
      const countriesFromServer = await fetchCountries();
      setCountries(shuffle(countriesFromServer));
    };
    getCountries();
  }, []);

  const fetchCountries = async () => {
    const res = await fetch("http://localhost:4000/countries");
    const data = await res.json();

    return data;
  };

  // useEffect function to see whether the moveCounter has reached 9 or not
  // if it triggers:
  // - the "End Move"-button gets locked and the "Next Round"-button gets unlocked
  // - the played countries get filtered out
  // - the moveCounter gets increased
  useEffect(() => {
    if (moveCounter === 9) {
      dispatch(toggle_NextRoundButton());
      dispatch(toggle_EndMoveButton());
      countryFilter();
      dispatch(increment_MoveCounter());
    }
  });

  // ----------------------//
  // trigger functions     //
  // ----------------------//

  // filter function to clean up the country list
  // if the country was already played, it gets filtered out
  const countryFilter = () => {
    setCountries(
      countries.filter((country) => !countriesPlayed.includes(country.id))
    );
  };

  // function that gets triggered after every comparison (click on game cards)
  // - increase the moveCounter for the current round
  // - activePlayer gets changed if none of both players have finished their round
  const afterComparison = () => {
    dispatch(increment_MoveCounter());
    if (activePlayer && finishedPlayerTwo) {
    } else if (!activePlayer && finishedPlayerOne) {
    } else {
      dispatch(change_ActivePlayer());
    }
  };

  // function to prepare the next round
  // - compare country and field countries get extracted from the country list
  //   - if the list has less than 10 elements, the game ends
  const prepareNextRound = () => {
    // enhancements that get added to each country element to clarify, if the pick of this country
    // was right or wrong in terms of the game scenario
    // these enhancements are getting used for styling reasons
    const defaultEnhancement = {
      right: false,
      wrong: false,
    };
    var lengthCountries = countries.length;
    if (lengthCountries > 9) {
      // setting the compare country
      setCompareCountry(countries[9]);

      // setting the nine field countries and add the enhancement
      setFieldCountries(
        countries
          .slice(0, 9)
          .map((country) => Object.assign({}, country, defaultEnhancement))
      );
    }

    // if the list has less than 10 elements, the score of both players get compared and the game ends
    else {
      if (scorePlayerOne > scorePlayerTwo) {
        alert("Alle Länder bespielt! Spiel vorbei! Spieler 1 hat gewonnen!");
      } else if (scorePlayerTwo > scorePlayerOne) {
        alert("Alle Länder bespielt! Spiel vorbei! Spieler 2 hat gewonnen!");
      } else {
        alert(
          "Alle Länder bespielt! Spiel vorbei! Das Spiel endet Unentschieden!"
        );
      }
    }
  };

  // function that is triggered if the comparison is successful:
  // - country id gets passed to the ID list, which is used to filter out rightfully played countries
  // - right property gets set to true, which lets the clicked card "disappear"
  // - score for the active player gets increased
  const successfulComparison = (country) => {
    afterComparison();
    dispatch(countriesID(country.id));
    country.right = true;
    if (activePlayer) {
      dispatch(increment_ScorePlayerOne());
    } else {
      dispatch(increment_ScorePlayerTwo());
    }
  };

  // function that is triggered if the comparison is not successful:
  // - wrong property gets set to true, which gives the clicked card a red border
  // - score for the active player gets decreased
  const unsuccessfulComparison = (country) => {
    afterComparison();
    country.wrong = true;
    if (activePlayer) {
      dispatch(decrement_ScorePlayerOne());
    } else {
      dispatch(decrement_ScorePlayerTwo());
    }
  };

  // ----------------------//
  // onClick functions     //
  // ----------------------//

  // compare function
  // the main function of the game that gets triggered everytime a card on the field gets clicked
  // inputs are the current compare country and the country that gets clicked
  const compareCountries = (country, compareCountry) => {
    // status is "more":
    // category value of the clicked country has to be higher than the value of the compare country to be successful
    if (activeRound) {
      if (activeStatus === "more") {
        if (country[activeCategory] > compareCountry[activeCategory]) {
          successfulComparison(country);
        } else {
          unsuccessfulComparison(country);
        }
      }
      // status is "less":
      // category value of the clicked country has to be lower than the value of the compare country to be successful
      else {
        if (country[activeCategory] < compareCountry[activeCategory]) {
          successfulComparison(country);
        } else {
          unsuccessfulComparison(country);
        }
      }
    } 
    else {}
  };

  // if both players ended their move via the "End Move" - Button,
  // this function prepares the next round:
  // - the "Next Round"- Button gets unlocked
  // - the "End Move" - Button gets locked
  // - the countries get filtered
  const endMovePreparation = () => {
    dispatch(toggle_NextRoundButton());
    dispatch(toggle_EndMoveButton());
    countryFilter();
  };

  // function that gets triggered, when the "End Move"- Button gets clicked:
  // - if Player One is active and
  const endMove = () => {
    // player one clicks
    if (activePlayer) {
      // player one finished the round
      dispatch(finish_PlayerOne());
      // if player two has already ended his round,
      // the endMovePreparation gets triggered,
      // else the activePlayer gets changed to player one
      if (finishedPlayerTwo) {
        endMovePreparation();
      } else {
        dispatch(change_ActivePlayer());
      }
    }
    // player two clicks
    else {
      // player one finished the round
      dispatch(finish_PlayerTwo());
      // if player one has already ended his round,
      // the endMovePreparation gets triggered,
      // else the activePlayer gets changed to player two
      if (finishedPlayerOne) {
        endMovePreparation();
      } else {
        dispatch(change_ActivePlayer());
      }
    }
  };

  // function that gets triggered, when the "Next Round"- Button gets clicked:
  // - next round gets prepared
  // - the ID List gets reset and starter gets assigned
  // - active category and status gets choosen
  // - active round gets deactivated
  // - round counter gets increased
  // - "Next Round" - Button gets locked
  // - state of players, who have ended their move gets reset
  const nextRound = () => {
    if (moveCounter === 10 || (finishedPlayerOne && finishedPlayerTwo)) {
      prepareNextRound();
      dispatch(resetID());
      dispatch(next_ActivePlayer(nextPlayer));
      dispatch(choose_ActiveCategory());
      dispatch(choose_ActiveStatus());
      dispatch(toggle_activeRound());
      dispatch(increment_RoundCounter());
      dispatch(toggle_NextRoundButton());

      if (finishedPlayerOne) {
        dispatch(finish_PlayerOne());
      }
      if (finishedPlayerTwo) {
        dispatch(finish_PlayerTwo());
      }
    }
  };

  // function that runs after clicking the "Start Game"- Button:
  // - game gets activated
  // - next round gets prepared
  // - active category and status gets choosen
  // - random active player gets choosen
  const startGame = () => {
    dispatch(activateGame());
    prepareNextRound();
    dispatch(choose_ActiveCategory());
    dispatch(choose_ActiveStatus());
    dispatch(random_ActivePlayer());
  };

  // function that runs after clicking the "Start Round"- Button:
  // - moveCounter state gets reset to 0
  // - active round gets activated
  // - next player gets set
  // - id of the compare country gets added to the list to filter it out
  //   after this round
  // - "End Move" - Button gets unlocked
  const startRound = () => {
    dispatch(reset_MoveCounter());
    dispatch(toggle_activeRound());
    setNextPlayer(!activePlayer);
    dispatch(countriesID(compareCountry.id));
    dispatch(toggle_EndMoveButton());
  };

  // function that toggles the buttons in the pre-game section
  // if the associated content box is already active,
  // this content box gets folded up
  // otherwise the associated content box gets displayed
  const toggle = (buttonType) => {
    if (buttonType === "RulesButton") {
      if (activePreGameButton === "rules") {
        dispatch(untoggle());
      } else {
        dispatch(toggle_rules());
      }
    } else if (buttonType === "CategorySelectButton") {
      if (activePreGameButton === "categorySelect") {
        dispatch(untoggle());
      } else {
        dispatch(toggle_categorySelect());
      }
    } else if (buttonType === "AboutButton") {
      if (activePreGameButton === "about") {
        dispatch(untoggle());
      } else {
        dispatch(toggle_about());
      }
    } else {
    }
  };

  // function to change the currently viewed selection in
  // the "Category Selection" - section
  const selectionSwitch = () => {
    if (viewSelection === "custom") {
      dispatch(viewStandardSelection());
    } else {
      dispatch(viewCustomSelection());
    }
  };

  // function that gets triggered by clicking the "Select" - Button
  // in the associated section in "Category Selection"
  const selectionButton = () => {
    if (activatedSelection === "custom") {
      dispatch(activateStandardSelection());
    } else {
      dispatch(activateCustomSelection());
    }
  };

  // ----------------------//
  // supporting functions  //
  // ----------------------//

  // Shuffle function to get a random sample
  function shuffle(array) {
    let counter = array.length;
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  }


  // the DOM gets displayed in dependency of the activeGame state:
  // if the game is active, the GameField and SideColumn components get showed
  // aswell as the dependent buttons in the Header component
  // else the PreGame component with all its subordinated components gets displayed
  return (
    <div>
      {activeGame ? (
        <div className="container">
          <Header
            startGameFunction={startGame}
            endMoveFunction={endMove}
            nextRoundFunction={nextRound}
            startRoundFunction={startRound}
          />
          <div className="container-small">
            <SideColumn
              activeCategory={activeCategory}
              activeStatus={activeStatus}
              compareCountry={compareCountry}
            />
            <GameField
              compareCountry={compareCountry}
              fieldCountries={fieldCountries}
              onClick={compareCountries}
            />
          </div>
        </div>
      ) : (
        <div className="container container-pregame">
          <Header
            startGameFunction={startGame}
            endMoveFunction={endMove}
            nextRoundFunction={nextRound}
            startRoundFunction={startRound}
          />
          <PreGame
            selectionButton={selectionButton}
            toggle={toggle}
            selectionSwitch={selectionSwitch}
          />
        </div>
      )}
    </div>
  );
}

export default App;
