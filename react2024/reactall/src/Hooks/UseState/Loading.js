import { useState } from "react"

function Loading(){
    const [isLoading, setLoading]= useState(false)
    return(
        <>
        {isLoading? <h2>Loading...</h2> : <h2>Data will load here</h2>}
        <button onClick={()=>setLoading((prevState)=>!prevState)}>Load Data</button>
        </>
    )
}

export default Loading;