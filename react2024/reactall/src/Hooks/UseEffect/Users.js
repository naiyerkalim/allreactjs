import React, { useEffect } from 'react';
import { dbconnection } from './dbConnection';

function Users({counter}) {
    const conn= dbconnection();
   // console.log('outside useeffect...');
    useEffect(()=>{
        conn.connect();

        return()=>{
            conn.disconnect();
        }
    },[])

    //[]->mounting phase: execute only once
    //[state, props]: during first rendering, everytime there is a change in value of your[state,props] that you have passed as dependency.
  return (
    <>
      <h1>User Component</h1>
    </>
  );
}

export default Users;
