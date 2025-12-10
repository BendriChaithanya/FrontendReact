import { useState } from "react"

function Scoreboard()
{
    let [runs,setruns]=useState(0);
    let[wickets,setwickets]=useState(0);
    let[overs,setovers]=useState(0);
    return(
        <>
        <h1>Cricket Scoreboard</h1>
        <h1>Runs:{runs}</h1>
        <h1>Wickets:{wickets}</h1>
        <h1>Overs:{}/3</h1>
        <button onClick={()=>setruns(runs+1)}>1</button>
        <button onClick={()=>setruns(runs+2)}>2</button>
        <button onClick={()=>setruns(runs+3)}>3</button>
        <button onClick={()=>setruns(runs+4)}>4</button>
        <button onClick={()=>setruns(runs+5)}>5</button>
        <button onClick={()=>setruns(runs+6)}>6</button>
        <button onClick={()=>setwickets(wickets+1)}>wkt</button>
        <h1>Ball-By-Ball:</h1>
        <h1>______________________________________________________________________</h1>
        </>
    )
}
export default Scoreboard;