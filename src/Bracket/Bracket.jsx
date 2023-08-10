import React from 'react'

//Component
import Round from './Round'

//Style
import  "./Bracket.css"

const Bracket = ({loadingImg,nodes,isLoading}) => {
    if(!(Array.isArray(nodes) && nodes.length >= 1)){
        return;
    }
    let n = nodes[0].length
    if((Math.log(n)/Math.log(2)) % 1 !== 0){
        return;
    }
    var pad = 100
    
    var player_height = 110
    
    const  max = nodes[0].length

    const roundHeight = max * 110 + max * 100 + 40

    const roundBodyHeight = max*110 + (max-1)*100 + 140

    const calcPadding = (pad)=>{
        const players = max
        let x = (players * 2 * player_height) + ((players *2 - 1) * pad)
        let padding = (x - pad - player_height - (player_height*players))/(players-1) 
        return padding
    }
    let c =  max
    new Array(Math.log2(max)+1).fill(0).map((n,i)=>{
        if(nodes.length <= i){
            nodes.push([])
        }
        new Array(c - nodes[i].length).fill(0).map(()=>nodes[i].push({}))
        c = c / 2
        return 0;
    })

    return (
        <div className={`bracket`}>
            {
                isLoading ? (
                    <>
                        <h3 style={{textAlign:"center"}}>Loading...</h3>
                    </>
                ):
                (
                    <div style={{height:`${roundHeight}px`}} className={"rounds"}>
                        {
                            nodes.map((node, i)=>{
                                if(i > 0){
                                    console.log(pad)
                                    pad = calcPadding(pad)
                                }
                                return(
                                    <Round loadingImg={loadingImg} key={i} max={max} padding={pad} matches={node} roundBodyHeight ={roundBodyHeight} round={i+1}/>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Bracket
