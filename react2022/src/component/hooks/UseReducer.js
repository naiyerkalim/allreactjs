//Reducers are pure finctions that take in a state and action and return a new state.
//In this hook, given a of inputs, it should returm the same output. No surprises, side effects, Api calls, mutations.
//pure function: 
  //A function is a pure function that always returns the same output if the same arguments passed in.
  //The functions does not produce any side effects.


import React,{useReducer} from 'react';

const reducer=(state, action)=>{
console.log(state, action);

switch (action.type) {
    case 'INCREMENT':
     return state+1;
        

    case 'DECREMENT':
        
    return state-1;
        
    default:
        break;
}


}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>{state}</p>
      <button onClick={()=> dispatch({type: 'INCREMENT'})}>Increment</button>
      <button onClick={()=> dispatch({type: 'DECREMENT'})}>Decrement</button>
    </div>
  );
}

export default UseReducer;
