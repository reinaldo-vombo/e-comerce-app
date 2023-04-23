import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { useStateContext } from '../context/StateContext';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const { theme } = useStateContext();

  return (
    <>
      <Head>
        <title>Store app</title>
      </Head>
      <div className='layout' id={theme}>
        <header className='header'>
          <Navbar />
        </header>
        <section className='sidebar'>
          <Sidebar />
        </section>
        <main className='main'>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
