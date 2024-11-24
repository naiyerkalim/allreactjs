import React,{useState} from 'react'

export default function Hoc() {
  return (
    <div>
<HocRed cmp={Counter}/>
<HocGreen cmp={Counter}/>
    </div>
  )
}

function HocRed(props){
    return(
     <h3 style={{backgroundColor:'red', width:'100px'}}><props.cmp/></h3>
    )
}
function HocGreen(props){
    return(
     <h3 style={{backgroundColor:'green', width:'100px'}}><props.cmp/></h3>
    )
}

function Counter(){
    const [count, setcount] = useState(0);
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={()=>setcount(count+1)}>Count</button>
        </div>
    )
}