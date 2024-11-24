import React,{useState}from 'react'
import CalInput from './component/form/CalInput';
import Myinput from './component/form/Myinput';

export default function MainInput() {
    const [text, settext] = useState('');
     const [showdata, setshowdata] = useState(false);
     //getChild Dat
     const [getCdata, setCdata] = useState('');
     function getData(e){
settext(e.target.value)
setshowdata(false)
     }
     function getChildData(d){
        setCdata(d)
     }
  return (
    <div>
       {showdata?
       <Myinput data={<h2>{text}</h2>}/>:
       null} 
       <input type='text' placeholder='parent Input' onChange={getData}/>
        <button onClick={()=>setshowdata(true)}>parent Button</button>
        <h2>{getCdata}</h2>
        <Myinput data={getChildData}/>
        <CalInput/>
    </div>
  );
}


// import React,{useState}from 'react'
// import Myinput from './component/form/Myinput'


// export const MainInput = () => {
//     const [text, settext] = useState('');
//     const [showdata, setshowdata] = useState(false);
// //     const getData=(d)=>{
// //         settext(d)
// // console.log(d)
// //     }
// const getData=(e)=>{
//     settext(e.target.value)
// }
    
//   return (
//     <div className='app'>
//         { 
//         showdata
//         ?<h3>{text}</h3>
//         :null
//         }
//        <input type='text' onChange={getData}/>
//        <button onClick={setshowdata(true)}>parent Button</button>
//     </div>
//   )
// }
