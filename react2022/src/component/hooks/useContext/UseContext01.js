//Reacts useContext hook makes it easy to pass data throughout your app without manually pass the props down the tree.
//contextApi/ useContext
  //ContextApi: in contextapi, we have context, provider and consumer
  //in use context we have only context and provider.
 import React from 'react'
import { createContext } from 'react'
import { UseContext02 } from './UseContext02';
 
 const BioData= createContext();
  const UseContext01 = () => {
   return (
    <BioData.Provider value={"kalim"}>
        <UseContext02 />
    </BioData.Provider>
     
   )
 }
export default UseContext01;
 export {BioData};
  
    