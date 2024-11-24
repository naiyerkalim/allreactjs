import React,{useState} from 'react';

export default function Child(props) {
  const [childData, setchildData] = useState("");
  return (
    <div>
      <h2>Child Component: {props.data}</h2>
      <hr/>
      <input placeholder='child' onChange={(e)=>setchildData(e.target.value)}></input>
<button onClick={()=>props.getData(childData)}> Child submit</button>
    </div>
  );
}
