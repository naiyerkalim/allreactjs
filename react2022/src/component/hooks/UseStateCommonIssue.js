import React from 'react';
import { useState } from 'react';

const useStateCommonIssue = () => {

const[number, setNumber]=  useState(0);

const increase= ()=>{
    setNumber(number+1);

}

const increaseasync=()=>{
    setTimeout(()=>{
        setNumber((currentNumber)=> currentNumber+1);
    },2000)
}

  return (
    <div>
        <button onClick={increase}>increase</button>
        <button onClick={increaseasync}>increaseAsync</button>
      <h1>{number}</h1>
    </div>
  );
}

export default useStateCommonIssue;
