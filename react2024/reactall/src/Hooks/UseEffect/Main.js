import React, { useState } from 'react';
import Users from './Users';
import UserList from './UserList';

function Main() {
    const [count, setCount]=useState(0);
  return (
    <>
    <h1>{count}</h1>
      <button onClick={()=>setCount(values=>values+1)}>+</button>
      {/* { count <5 && <Users counter={count}/>} */}
      <UserList/>
    </>
  );
}

export default Main;
