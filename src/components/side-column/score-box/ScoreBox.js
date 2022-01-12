import PlayerScore from "./PlayerScore"

const ScoreBox = () => {
    return (
        <div className="score">
            <div className="score score-label"> Score</div>
            <div className="score-players">
                <PlayerScore />
                <PlayerScore />
            </div>
        </div>
    )
}

export default ScoreBox
