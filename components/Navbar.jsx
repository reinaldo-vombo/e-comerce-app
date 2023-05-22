import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cart } from './';
import { AiOutlineShopping } from 'react-icons/ai';
import { FaSun, FaMoon, FaSearch } from 'react-icons/fa';
import { GiMoon } from 'react-icons/gi';
import { useStateContext } from '../context/StateContext';
import userPhoto from '../assets/user.jpeg';
import { Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const { showCart, setShowCart, totalQuantities, toggleTheme } =
    useStateContext();

  const [seach, setSeach] = useState('');
  return (
    <>
      <Navbar className='my-nav position-fixed w-100'>
        <Container>
          <Row className='w-100'>
            <div className='w-25 d-flex'>
              <Navbar.Brand href='#home'>Home</Navbar.Brand>
              <Nav className='me-auto'>
                <Nav.Link href='#home'>Novos</Nav.Link>
                <Nav.Link href='#features'>Categoria</Nav.Link>
                <Nav.Link href='#pricing'>Pricing</Nav.Link>
              </Nav>
            </div>
            <Form className='w-50'>
              <Form.Control
                onChange={(e) => setSeach(e.target.value)}
                type='search'
                placeholder='Search'
                className='me-2 w-50 '
                aria-label='Search'
              />
            </Form>
            <div className=' d-flex align-items-center w-25'>
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
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
