//Controlled and uncontrolled inputs
//Uncontrolled Inputs:
//uncontrolled inputs are like traditional Html form inputs.
//controlled input accepts its current value as a prop, as well as callback to change that value.
//Uses of useRef:
//Accessing the DOM nodes or React elements and keeping a mutable variable.
// A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. 
//A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. 
//You could also call this a "dumb component".

// A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. 
//This is a bit more like traditional HTML.

// Controlled:
//<input type="text" value={value} onChange={handleChange} />

// Uncontrolled:
//<input type="text" defaultValue="foo" ref={inputRef} />
// Use `inputRef.current.value` to read the current value of <input>

import React, { useState, useRef } from 'react'

export const UseRef = () => {
  const luckyName = useRef(null);//its like useState, but not re-render
  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault()
    const name = luckyName.current.value
    name === "" ? alert('Please fill data') : setShow(true);
  }
  return (
    <div>
      <form action='' onSubmit={submitForm}>
        <div>
          <label htmlFor='luckyname'>Enter tour LuckyName</label>
          <input type="text" id="luckyName" ref={luckyName} />
        </div>
        <br />
        <button>submit</button>
      </form>
      <p>{show ? `your lucky name is ${luckyName.current.value}` : ""}</p>
    </div>
  )
}
