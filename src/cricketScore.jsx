import { useState } from "react";

function CricketScore()
{
    let[score,setscore]=useState(0);
    return(
        <>
        <h1>Cricket Score:{score}</h1>
        <button onClick={()=>setscore(score+1)}>1</button>
        <button onClick={()=>setscore(score+2)}>2</button>
        <button onClick={()=>setscore(score+3)}>3</button>
        <button onClick={()=>setscore(score+4)}>4</button>
        <button onClick={()=>setscore(score+5)}>5</button>
        <button onClick={()=>setscore(score+6)}>6</button>
        <h1>____________________________________________________________________</h1>
        </>
    )
}
export default CricketScore;