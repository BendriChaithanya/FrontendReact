import{ useState } from "react";
function Apples(){
    const [count,setcount]=useState(0);
    return(
        <>
        <h1>Apples counter</h1>
        <button onClick={()=>setcount(count+1)}>Add Apple </button>
        <button onClick={()=>setcount(count-1)}disabled={count===0}>Remove Apple</button>
        <button onClick={()=>setcount(0)}disabled={count===0}>Reset</button>
        <h1>Total Aplles: {count}</h1>
        {count===0 ? (<p>❌ No Apples are left</p>):(<p>🍏Hey,You have{count} apples!</p>)}
        <h1>__________________________________________________________</h1>
        </>
    );
}
export default Apples;