
import React, {useState, useEffect} from 'react';

export default function TestChild(props) {
  const [childData, setchildData] = useState("");
  // useEffect(() => {
  //  props.gdata(childData)
  // }, []);
  return (
    <div>
      <h1>Child Component</h1>
      <input type='text' placeholder='child input' onChange={(e)=>setchildData(e.target.value)}></input>
      <button onClick={()=>props.gdata(childData)}>Child </button>
      <h2>{props.data}</h2>
      
    </div>
  );
}
