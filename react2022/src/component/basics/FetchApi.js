import React, { useState, useEffect } from 'react';
import axios from 'axios';
const FetchApi = () => {
    const [data, setData]= useState([]);
      //function getApiData(){
        const getApiData=()=> {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(res=>res.json())
        // .then(json=>{
        //     setData(json)
        //     console.log(data);
        // })
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(({data})=>{
          console.log(data);
          setData(data)
        })
      }
    
      useEffect(() => {
        getApiData();
            }, []);

   
      return (
        <div>
          <ul>
           {data.map((item)=>(
             <li key={item.id}>{item.title}</li>
           ))}
          </ul>
        </div>
      );
    }

// const FetchApi = () => {

//     const [data, setdata] = useState([]);
//     const getApi=()=> {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(response => response.json())
//             .then(json => {
//                 console.log(json)
//                 setdata(json)
//             })
//     }
//     useEffect(() => {
//             getApi()
//     }, []);
//     return (
//         <div>
//             <button onClick={getApi}>Fetch Api</button>
//             <div>
//                 <ul>
//                     {data.map((item)=>(
//                         <li key={item.id}>{item.title}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

  export default FetchApi;

//import { useState, useEffect } from "react";



