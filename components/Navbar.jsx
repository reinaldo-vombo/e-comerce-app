import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cart } from './';
import { AiOutlineShopping } from 'react-icons/ai';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import { GiMoon } from 'react-icons/gi';
import { useStateContext } from '../context/StateContext';
import userPhoto from '../assets/user.jpeg';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, toggleTheme } =
    useStateContext();
  return (
    <div className='navbar-container'>
      <div className='navbar-input__container'>
        <input type='text' placeholder='pesquisar' className='navbar-input' />
        <FaSearch className='navbar-icon' />
      </div>
      <div className='navabar-items'>
        <Image
          src={userPhoto}
          width={40}
          height={40}
          className='user-photo'
          alt='user photo'
        />
        <button
          className='cart-icon sun'
          onClick={toggleTheme}
          type='button'
          aria-label='sun icon'
        >
          <FaSun size={30} className='sunIcon' />
        </button>
        <button
          className='cart-icon moon'
          onClick={toggleTheme}
          type='button'
          aria-label='sun icon'
        >
          <GiMoon size={30} />
        </button>
        <button
          className='cart-icon'
          onClick={() => setShowCart(true)}
          type='button'
          aria-label='cart icon'
        >
          <AiOutlineShopping size={30} />
          <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
      </div>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
