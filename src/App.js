import Header from "./components/header/Header.js"
import SideColumn from "./components/side-column/SideColumn.js";
import GameField from "./components/game-field/GameField.js";
import { useState, useEffect } from "react"
import PreGame from "./components/pre-game-components/PreGame.js";


function App() {
  
  // useState to set the game to active
  const [gameActive,setGameActive] = useState(false);

  // useState to eventually disable the "Start"-button
  const [buttonActive,setButtonActive] = useState(true);

  // function that runs after pressing the start button
  // game is set to active and the "Start"-button disappears
  const startGame = () => {
    if(!gameActive) {
      alert("Das Spiel startet! Viel Spaß!")
      setGameActive (true)
      setButtonActive(false)};
      
  }

  // Button to end the current move
  const endMove = () => {
    console.log(countries[0].name)
  }


  // set the useState of our countries
  const [countries,setCountries] = useState()


  // fetch the country data from our server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setCountries(shuffle(tasksFromServer))
    }
    getTasks()
  },[])
  
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/countries")
    const data = await res.json()

    return data
  }  



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


 // compare function
 const compareCountries = (country,comp_country, styling) => {
  if (country.inhabitants > comp_country.inhabitants) {
    console.log("Korrekt!")
    styling("right")
  }  
  else {
    console.log("Falsch!")
    styling("wrong")
  }

}

  // function to choose the category

  //use-state nutzen!!!
  const catChoose = () => {
    var possibilities = ["Einwohner"]
    var random = possibilities[Math.floor(Math.random()*possibilities.length)];
    return random
  }



  // function to choose lower/higher
  const statusChoose = () => {
    var possibilities = ["niedriger","höher"]
    var random = possibilities[Math.floor(Math.random()*possibilities.length)];
    return random
  }


  return (
    <div className="container">
      <Header onClick={startGame} endMove= {endMove} buttonActive={buttonActive}/>
      {gameActive ? 
      <div className="container-small">
        <SideColumn cat = {catChoose()} status={statusChoose()} comp_country={countries[0]}/>
        <GameField comp_country= {countries[0]} countries={countries.slice(1,10)} onClick={compareCountries}/>
      </div> 
      : 
      <PreGame />
      }
    </div>
  );
}

export default App;
