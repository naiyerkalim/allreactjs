import React,{useState} from 'react'

export default function Myinput(props) {
    const [text, settext] = useState('');
    const [showdata, setshowdata] = useState(false);
    function getData(e){
settext(e.target.value)

    }
  return (
    <div>
        <h2>{props.data}</h2>
        <input type='text' placeholder='child Input' onChange={getData}/>
        <button onClick={()=>props.data(text)}>Child Button</button>
    </div>
  )
}
