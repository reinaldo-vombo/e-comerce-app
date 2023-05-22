import React from 'react';
import { Toaster } from 'react-hot-toast';

import { StateContext } from '../context/StateContext';
import { Layout } from '../components';
import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp;
