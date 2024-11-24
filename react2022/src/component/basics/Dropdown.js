import axios from 'axios';
import React,{useState, useEffect} from 'react'

const Dropdown = () => {
    const [num, setnum] = useState(1);
    const [name, setname] = useState();
    const [moves, setmoves] = useState();

    useEffect(() => {
      
        async function getData(){
            const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name)
            setname(res.data.name)
            setmoves(res.data.moves.length);
        }
        getData();
    
    }, );
  return (
    <>
    <h1> I have selected <span style={{color: "red"}}>{num} value</span></h1>
    <h1> I am <span style={{color:'red'}}> {name}</span></h1>
    <h1> I have <span style={{color:'red'}}> {moves} moves</span></h1>
    <select value={num} onChange={(event)=>{
setnum(event.target.value)
    }}>
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </>
  )
}

export default Dropdown