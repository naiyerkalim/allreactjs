///short circuit Evaluation
  // if you wanted to render to one more data on the basis of true and false then we can use short circuit evaluation.
  //we can do multiple render by using SCE
//   import React,{useState} from 'react';

// const UseState = () => {

// const  [data, setData] = useState('Naiyer'); 
    
    
//   return (
//     <>
//     <h2>{data || <>
//     <h1>Mast</h1>
//     </>}</h2>
//    <h2>{data || 'Kalim'}</h2>
//    <h2 className="array">{data && 'kalim'}</h2>
//     </>
//   );
// }
// export default UseState;

///showing updating of object data in UI side.
import React,{useState} from 'react';

const UseState = () => {

const  [arrayData, setarratdata] = useState({name: 'Kalim', age: 30, city: 'Hyderabad'});
    
     const updateObject=()=>{
      setarratdata({...arrayData, age:29})
    }
  return (
    <>
  <h4 className="array">Name: {arrayData.name} Age: {arrayData.age} and City is: {arrayData.city}</h4>
   
  <button onClick={updateObject}>update</button>
    </>
  );
}
export default UseState;



///showing arrays value in list 
// import React,{useState} from 'react';

// const UseState = () => {

//   let arr= [{
//     id:0, name: 'Kalim', age: 30
//   },
// {
//   id:1, name: 'Khushbu', age:24
// },
// {
//   id:2, name: 'Khushbu', age:24
// },
// {
//   id:3, name: 'Khushbu', age:24
// }]
// const  [arrayData, setarratdata] = useState(arr);
//     console.log(arr)
//      const clearArray=()=>{
//       setarratdata([])
//     }
//    const handleItem=(ids)=>{

//     //delete Item from the list.
// const newArray= arrayData.filter((elements)=>{
//   return elements.id!==ids;
// })
// setarratdata(newArray);
//    }
//   return (
//     <>
//   {arrayData.map((element)=>{
//    return (<h4 className="array" key={element.id}>Name: {element.name}
//    <button onClick={()=>handleItem(element.id)}>remove</button></h4>)
   
//   })}
//   <button onClick={clearArray}>clear</button>
//     </>
//   );
// }

// export default UseState;


///showing current time just after launch.
// import React,{useState} from 'react';

// const UseState = () => {
//     let curTime=  new Date().toLocaleTimeString();
   

//     const [ctime, setCurTime] = useState(curTime);
//     const incr=()=>{
//         curTime=  new Date().toLocaleTimeString();
// setCurTime(curTime)
//     }

//     // const decr=()=>{
//     //     if(count>0){
//     //         setcount(count-1)
//     //     }

//     // }
//     setInterval(incr,0)
//   return (
//     <>
//       <h1>{ctime}</h1>
     
      
//     </>
//   );
// }

// export default UseState;
