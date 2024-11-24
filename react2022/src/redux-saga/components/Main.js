import React, { useState, useEffect } from 'react'


import { useDispatch } from 'react-redux'
import { addtoCart, removeFromCart, emptyCart} from '../action';
import {productList} from '../productAction'
import { useSelector } from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  const data= useSelector((state)=>state);
  //console.log('data in main component', data.cartdata);
  const products={
    id:1,
item: 'Samsung',
type: 'Mobile',
price: '10000'
  }
  return (
    <>
      <div>
      <button onClick={() => dispatch(addtoCart(products))}>Add to Cart</button>
      </div>
      <div>
      <button onClick={() => dispatch(removeFromCart(products.id))}>Remove From Cart</button>
      </div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>
      <div>
      <button onClick={() => dispatch(productList(products))}>Product List</button>
      </div>
     
    </>

  )
}

export default Main