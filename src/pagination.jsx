import { useState } from "react";

function Pagination() {
    const names = [" Ritik","Ram","Chaithu","Yogesh","Naresh"," Ritik","Ram","Chaithu","Yogesh","Naresh","Big onion","deepu","weds","Ashtam"];
    const totalitems=names.length;
    const itemsperpage=5;
    const totalpages=Math.ceil(totalitems/itemsperpage);
    const [currentpage,setCurrentPage]=useState(1);
    const start=(currentpage-1)*itemsperpage;
    const end=start+itemsperpage;
    const currentitems=names.slice(start,end);
    const currentListitems=currentitems.map((name,index) =>( <li key={index}>{name}</li>));
    return(
        <>
        <h1>Pagination Names.....</h1>
        <ul>{currentListitems}</ul>
        <button onClick>Next</button>               
        {Array.from({length:totalpages},(_,index)=>index+1).map((page)=>(
            <button key={page} onClick={()=>setCurrentPage(page)} disabled={currentpage===page}>{page}</button>
        ))}
        <button onClick>Previous</button>
        </>
    )
}
export default Pagination;