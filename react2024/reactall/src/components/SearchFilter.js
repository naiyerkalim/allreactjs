import { useState } from "react";

const SearchFilter=()=>{

    const list= [
        'phone',
        'laptop',
        'charger',
        'earbuds',
        'headphone'
    ]
    const [filteredData, setData]= useState(list);
    const onChange=(e)=>{
        if(e.target.value===""){
            setData(list);
            return;
    }
    const data= list.filter(
        (d)=>d.toLowerCase().indexOf(
            e.target.value.toLowerCase()) !== -1
    )
    setData(data);
    }
   
   
    return(
        <>
        <h1>Search Filter</h1>
        search products: 
        <input type="text" onChange={onChange}/>
        {filteredData && filteredData.map((item)=>
        <div>{item}</div>
        )}
        </>
    )
}
export default SearchFilter;