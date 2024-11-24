import React,{useState} from 'react'
import TestChild from './TestChild';

export default function Test() {

  const [text, settext] = useState('');
  const [childData, setchildData] = useState("");

  function getData(d){
    setchildData(d)
  }
  return (
    <div>
      <input type='text' placeholder='parent input' onChange={(e)=>settext(e.target.value)}></input>
      <TestChild data={text}/>
      <TestChild gdata={getData}/>
      <h2>Child data: {childData}</h2>
    </div>
  )
}
