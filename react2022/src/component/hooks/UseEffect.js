//useEffect:
  //The effect hook lets you perform side effects in function components.
  //side effects are basically anything that affects something outside of the scope of the current function 
  //thats being executed like-- Api request to our backend service., calls to our authentication service, manually changing 
  //the Dom in React
// import React, { useState, useEffect } from 'react'


// const UseEffect = () => {

//     const [status, setStatus] = useState('online');
//     const [count, setcount] = useState(0);

//     const toggleEffect = () => {
//         //setcount(count+1)
//         status === 'online'?setStatus('away'):setStatus('online');
//         // if (status === 'online') {
//         //     setStatus('away')
//         // } else {
//         //     setStatus('online')
//         // }
//     }
//     useEffect(() => {
//         setcount(count + 1)
//     }, [status])
//     return (
//         <>
//             <div>{status}</div>
//             <div>{count}</div>
//             <button onClick={toggleEffect}>Toggle</button>
//         </>
//     )
// }
// export default UseEffect

//adding chats number and dependencies.
 import React,{useState, useEffect} from 'react'

const UseEffect = () => {
    const [count, setCount]= useState(0)
    useEffect(()=>{
        if(count>0){
            document.title= `chats (${count})`
        }else{
            document.title= `chats`
        }

    },[count])
    
  return (
    <>
    <h2>{count}</h2>
    <button onClick={()=>setCount(count+1)}> click me</button>
    </>
  )
}

export default UseEffect

///measure screensize and cleanup the code.
// import React,{useState, useEffect} from 'react'

// export const UseEffect = () => {
//     const  [sreenSize, setsreenSize] = useState(window.screen.width);
// const actualWidth=()=>{
//     setsreenSize(window.innerWidth)
// }
//     useEffect(()=>{
//         console.log('actual Size')
//         window.addEventListener('resize', actualWidth)
//         return ()=>{
//             window.removeEventListener('resize', actualWidth)//cleanup the code
//             console.log('remove Size')
//         }
//     })
//   return (
//     <>
// <h1>{sreenSize}</h1>
//     </>
//   )
// }
// export default UseEffect

// import React, {useEffect, useState} from 'react';



// const UseEffect = () => {
//   const [data, setData]=useState(0)

//   const delay=(i)=>{
//     return new Promise(resolve=>{
//       setTimeout(()=>{
//         resolve(i)
//       }, i*1000)
//     })
//   }
  
//    const getTimer =async()=>{
//     console.log("Starting...");
//     for(let i=1; i<6; i++){
//       const result= await delay(i)
//       setData(result)
//       //console.log(result)
//     }
//     console.log("Ending...")
//   }
  
  
//     useEffect(()=>{
//       getTimer();
//     },[])
//   return (
//     <div>
//       <h3>starting...</h3>
//       <h3>{data}</h3>
//       <h3>Ending...</h3>
//     </div>
//   );
// }

// export default UseEffect;
