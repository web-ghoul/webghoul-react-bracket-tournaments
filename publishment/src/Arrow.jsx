import React from 'react'

//Style
import "./Bracket.css"

const Arrow = ({dir ,h,wait}) => {
  
  return (
    <div style={{transform: dir==="top" ? `translateY(${h/2+3}px)`: `translateY(-${h/2+3}px)`}} className={`arrow ${dir === "top" ? "top" : "bottom"} ${wait && dir === "top" && "wait_arrow_top"} ${wait && dir === "bottom" &&  "wait_arrow_bottom"}`}>
        <div style={{height:`${h}px`}} className={`curve curve_1`}></div>
        <div style={{height:`${h}px`}} className={`curve curve_2`}></div>
    </div>
  )
}

export default Arrow
