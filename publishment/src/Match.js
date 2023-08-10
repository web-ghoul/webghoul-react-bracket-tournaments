import React from 'react'

//Component
import Arrow from './Arrow'

//Style
import "./Bracket.css"

const Match = ({waiting1,waiting2,loadingImg , match , last,dir ,h}) => {
  return (
    <div className={`${waiting1 && waiting2 && "wait_match_box" } match_box`}>

      <div className={`match`}>

        <div onClick={()=>match.hasOwnProperty("handlePlayer2Clicked") && match.handlePlayer2Clicked}  className={`player`}>
          <img alt="player 1" src={waiting1 ? loadingImg: match.avatar1} />
          <span className={"player_name"} >{!match.hasOwnProperty("player1") || waiting1 ? "Waiting...": match.player1.length  > 10 ? match.player1.slice(0,9)+"...": match.player1}</span>
        </div>

        <hr className={`${waiting1 && waiting2 ? "noDivider" : "divider"}`}/>

        <div onClick={()=>match.hasOwnProperty("handlePlayer1Clicked") && match.handlePlayer1Clicked} className={`player`}>
          <img alt="player 2" src={waiting2 ? loadingImg : match.avatar2} />
          <span className={"player_name"}>{!match.hasOwnProperty("player2") || waiting2 ? "Waiting...": match.player2.length  > 10 ? match.player2.slice(0,9)+"...": match.player2}</span>
        </div>

        <div className={`buttons`}>
          {
            !waiting1 && !waiting2 && (
              <>
                {
                  match.hasOwnProperty("matchLink")&&(
                    <a target="_blank" rel="noreferrer" href={match.gameLink}>
                      <button className={`match_button`}>Match</button>
                    </a>
                  )
                }
                {
                  match.hasOwnProperty("handleAbortMatch")&&(
                    <button onClick={match.handleAbortMatch}>Abort</button>
                  )
                }
                {
                  match.hasOwnProperty("handleFinishMatch") && (
                    <button onClick={match.handleFinishMatch}>Finish</button>
                  )
                }
              </>
            )
          }
        </div>
      </div>
      {
        !last && (<Arrow dir={dir} h={h} wait = {waiting1 || waiting2  ? true : false}/>)
      }
    </div>
  )
}

export default Match
