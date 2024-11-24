import React, { useState } from 'react';

function Comment() {
    const [message, setMessage]= useState('Good Morning');
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={()=>setMessage('Good Evening')}>Comment</button>
    </div>
  );
}

export default Comment;
