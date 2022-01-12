import StartButton from "./StartButton"
import EndMove from "./EndMove"

const Header = ({onClick,endMove,buttonActive}) => {
    return (
        <header className="header">
            <h1>World Fact Game</h1>
            {buttonActive ? 
            <StartButton onClick={onClick}/>:
            <EndMove endMove={endMove}/>}
        </header>
    )
}

export default Header
