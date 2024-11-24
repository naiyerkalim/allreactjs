import React from 'react';
import './demo.css'

const Demo = ({title, link, content}) => {

 
  return (
    <>
    <a href={link}>{title}</a>
    <h4>{content}</h4>
  

      {/* <div className='flexible-container'>
      <div className='flexible-item flexible-item-1'></div>
      <div className='flexible-item flexible-item-2'></div>
      <div className='flexible-item flexible-item-3'></div>
      </div> */}
      </>
  );
}

export default Demo

