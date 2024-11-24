import React,{useState} from 'react';

export default function CalInput() {
    const [firstNum, setfirstNum] = useState("");
    const [secNum, setsecNum] = useState("");
    const [showResult, setshowResult] = useState('');
    function sum(){
      setshowResult(+firstNum+(+secNum))
    }
  return (
    <div>
        <h2>{showResult}</h2>
      <input type='number' onChange={(e)=>setfirstNum(e.target.value)}/>
      <input type='number' onChange={(e)=>setsecNum(e.target.value)}/>
      <button onClick={sum}>Add</button>
    </div>
  );
}
