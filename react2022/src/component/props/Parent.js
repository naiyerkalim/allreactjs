import React, {useState} from 'react';
import Child from './Child';

export default function Parent() {
  const [text, settext] = useState("");
  const [childtext, setChildtext] = useState("");
  const [showdata, setshowdata] = useState(false);
  const handleText=(e)=>{
    settext(e.target.value)
    setshowdata(false)
  }
  function getData(d){
    setChildtext(d)
  }
  return (
    <div>
      {showdata? <Child data={text}/>:null}
     
      <input placeholder='parent' onChange={handleText}></input>
<button onClick={()=>setshowdata(true)}> parent submit</button>
<Child getData={getData}/>
<h1>Child Data:{childtext}</h1>
    </div>
    
  );
}
