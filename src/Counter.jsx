import { use, useState } from "react";

function Counter()

{
    let[counter,setcounter]=useState(0);
    return(
        <>
        <h1>The counter value:{counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>Increament</button>
        <button onClick={()=>setcounter(counter-1)}disabled={counter===0}>deceament</button>
        <button onClick={()=>setcounter(0)}disabled={counter===0}>Reset</button>
        <h1>_____________________________________________________________</h1>
        </>
    )
}
export default Counter;