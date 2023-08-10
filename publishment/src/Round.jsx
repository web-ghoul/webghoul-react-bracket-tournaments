import React from 'react'
import Match from './Match'
import  "./Bracket.css"

const Round = ({padding,loadingImg,roundBodyHeight,max,matches ,round}) => {
    const matchHeight= padding/2 + 26.5

    return (
        <div style={{height:`${roundBodyHeight}px`}} className={`${matches.length === 1 && "last"} round`}>
            <h3 className={`round_number`}>{`Round ${round}`}</h3>
            <div style={{gap:`${padding}px`}} className={`matches`} >
            {
                matches.map((match,i)=>{
                    let dir;
                    let last = false;
                    let waiting1 = true;
                    let waiting2 = true;
                    if(i % 2 === 0){
                        dir="top"
                        if(matches.length === 1){
                            last=true
                        }
                    }else{
                        dir="bottom"
                    }
                    if(match.hasOwnProperty("player1")){
                        waiting1 = false
                    }
                    if(match.hasOwnProperty("player2")){
                        waiting2 = false
                    }
                    return(
                        <Match loadingImg={loadingImg} h = {matchHeight} waiting2={waiting2} waiting1={waiting1} last={last} match={match} key={i} dir={dir}/>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Round
