import React, {useState} from 'react'
import './style.css'
import Menu from './menuApi'
import Menucard from './Menucard'

const Restaurant = () => {
    const [menudata, setmenudata]= useState(Menu)
    const filterItem= (foodCategory)=>{
const updatedList= Menu.filter((currentItem)=>{
      return currentItem.category===foodCategory
})
setmenudata(updatedList)
    } 
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
            <button className='btn-group__item' onClick={()=>filterItem("breakfast")}>Breakfast</button>
            <button className='btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</button>
            <button className='btn-group__item' onClick={()=>filterItem("dinner")}>Dinner</button>
            <button className='btn-group__item' onClick={()=>filterItem("evening")}>Evening</button>
            <button className='btn-group__item' onClick={()=>setmenudata(Menu)}>All</button>
        </div>
    </nav>
   <Menucard menudata={menudata}/>
    </>
  )
}

export default Restaurant