import React from 'react';
import Link from 'next/link';
import { Cart } from './';
import { AiOutlineShopping } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useStateContext } from '../../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, toggleTheme } =
    useStateContext();

  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Home</Link>
      </p>
      <div>
        <button
          className='cart-icon sun'
          onClick={toggleTheme}
          type='button'
          aria-label='sun icon'
        >
          <FaSun className='sunIcon' />
        </button>
        <button
          className='cart-icon moon'
          onClick={toggleTheme}
          type='button'
          aria-label='sun icon'
        >
          <FaMoon className='' />
        </button>
        <button
          className='cart-icon'
          onClick={() => setShowCart(true)}
          type='button'
          aria-label='cart icon'
        >
          <AiOutlineShopping />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
      </div>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
