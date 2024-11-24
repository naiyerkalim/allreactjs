import React, { useEffect, useState } from 'react';

function UserList() {
    const [users, setUser]=useState([]);
    const [refresh, setRefresh]= useState(false);
    function getUser(){
        const url="https://jsonplaceholder.typicode.com/users";
        return fetch(url)
        .then(data=>data.json())
        .then(result=>setUser(result));
    }
    useEffect(()=>{
getUser();
    },[refresh])
  return (
    <>
      <h1>UserList</h1>
      <button onClick={()=>setRefresh(refresh=>!refresh)}>Refresh</button>
      {users.map(element=><li key={element.id}>{element.name}</li>)}
    </>
  );
}

export default UserList;
