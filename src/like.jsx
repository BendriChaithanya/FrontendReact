import{ useState } from "react"

function Like()
{
    let[like,setlike]=useState(0);
    let[dislike,setdislike]=useState(0);
    let likelogic=()=>{setlike(like+1)}
    let dislikelogic=()=>{setdislike(dislike+1)}
    return(
        <>
        <h1>Total Likes{like}</h1>
        <h1>TotalDislikes{dislike}</h1>
        <button on onClick={likelogic}>👍</button>
        <button on onClick={dislikelogic}>👎</button>
        <h1>____________________________________________________________________</h1>
        </>
        
    )
}
export default Like;