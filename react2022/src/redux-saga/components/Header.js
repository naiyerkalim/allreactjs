import React from 'react';
import { useSelector } from 'react-redux';



const Header = () => {
    const result= useSelector((state)=>state.cartData)
    return (
        <>
            <div className='header'>
                <div className='cart-div'>
                    <span>{result.length}</span>
                    <img src="https://icons.iconarchive.com/icons/icons8/windows-8/128/Ecommerce-Shopping-Cart-icon.png" alt="" />
                </div>
            </div>
        </>
    );
}

export default Header;
