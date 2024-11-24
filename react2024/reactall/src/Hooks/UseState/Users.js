import React, { useState } from 'react';

function Users() {
    const userList=[
        {id:1,name:'kalim'},{id:2,name:'khushbu'}]
    const [users, setUser]= useState(userList);
    function updateUserList(newuser){
        setUser([
            ...users,
            {
                id: users.length,
                name: newuser,
            }
        ])

    }
  return (
    <div>
      <form>
        <label>Add User: 
             <input type='text' name='name' onBlur={(e)=>updateUserList(e.target.value)}/>
        </label>
        <p>{JSON.stringify(users)}</p>
      </form>
    </div>
  );
}

export default Users;
