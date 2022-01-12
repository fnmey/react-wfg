const RulesAboutText = ({rulesActive,aboutActive}) => {
    if (rulesActive) { return(
            <div className="rules-about-container">
                <h1>Regeln1</h1>
                <h2>Regeln2</h2>
            </div>
    )}
    if (aboutActive) { return(
            <div className="rules-about-container">
                <h1>About1</h1>
                <h2>About2</h2>
            </div>
    )}
    else { return(
            <div></div>
    )}

}

export default RulesAboutText
