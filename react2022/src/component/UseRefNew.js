import React,{useState, useEffect} from 'react'




export const UseRefNew = () => {

 
const [frstNumber, setFirstNaumber]=useState('')
const [secondNumber, setSecondName]=useState('')

const [sum, setSum]= useState('');

function handleSum(){
  setSum((+frstNumber)+(+secondNumber))
}
  return (
    <>
    <h2>{sum}</h2>
    <input id="firstInput"type="number" onChange={(e)=> setFirstNaumber(e.target.value)}/>
    <input id="secondInput"type="number" onChange={(e)=> setSecondName(e.target.value)}/>
    <button onClick={handleSum}>Sum</button>
    </>
  )
}
