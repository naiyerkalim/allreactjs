import React from 'react'

const Menucard = ({menudata}) => {
  return (
    
    <div>
        <section className='main-card--cointainer'>
        {menudata.map((itemData)=>{
            return(
<>
<div className='card-container' key={itemData.id}>
    <div className='card'>
     <div className='card-body'>
        <span className='card-number card-circle subtle'>{itemData.id}</span>
        <span className='card-author subtle'>{itemData.category}</span>
        <h2 className='card-title'>{itemData.name}</h2>   
        <span className='card-description subtle'>
        {itemData.description}</span> 
        <div className='card-read'>Read</div>
     </div>
     <img src={itemData.image} alt="images" className='card-media' />
     <span className='card-tag subtle'>Order Now</span>
    </div>
   </div>
</>
            )
        })}
        </section>
    </div>
    
  )
}

export default Menucard