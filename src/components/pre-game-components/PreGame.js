import { useState } from "react"
import Rules from "./Rules"
import About from "./About"
import RulesAboutText from "./RulesAboutText"


const PreGame = () => {
  // toggle "Rules"-button
  const [rulesActive,setRulesActive] = useState(false)
  
  // toggle "About"-button
  const [aboutActive,setAboutActive] = useState(false)
  
  const toggleRules = () => {
        {!rulesActive ? setRulesActive(true) : setRulesActive(false)}
        setAboutActive(false)
  }
  
  const toggleAbout = () => {
        {!aboutActive ? setAboutActive(true) : setAboutActive(false)}
        setRulesActive(false)
        
  }
    return (
        <div> 
            <div className="pregame-container">
                <Rules onClick={toggleRules} />
                <About onClick={toggleAbout}/>
            </div>
            <RulesAboutText rulesActive={rulesActive} aboutActive={aboutActive}/> 
        </div>
    )
}

export default PreGame
