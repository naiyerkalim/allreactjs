import React, { useState, useEffect } from 'react'
import { Loading } from './Loading';
import { Users } from './Users';


export const UseEffectApi = () => {

  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {

    //const response= fetch('https://jsonplaceholder.typicode.com/photos')
    try {
      const response = await fetch('https://jsonplaceholde.typicode.com/photos')//missing  "r" in "jsonplaceholde"
      
      //const data= await response.json();
      setdata(await response.json())
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      console.log("Error:", error)
    }
   
    
  }
  useEffect(() => {
    fetchdata();
  }, [])
if(loading){
  return <Loading/>
}
  return(
    <>
    <Users users={data}/>
    </>
    
  ) 

  
}
