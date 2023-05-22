import React from 'react';
import { HeroBanner, Product, FooterBanner } from '../components';
import { client } from '../lib/client';
import Products from '../components/Products';
import Carrosel from '../components/Carrosel';

const Home = ({ products, bannerData, psProducts }) => {
  return (
    <>
      <Carrosel heroBanner={bannerData} />
      {/* <HeroBanner heroBanner={bannerData[0]} /> */}
      <Products products={products} />
    </>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const seconQuary = `*[_type == "product"]{
    name,
    categories[]{
      _ref
    },
    slug,
    "image":image.asset->url,
    price,
    details
  }`;
  const psProducts = await client.fetch(seconQuary);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData, psProducts },
  };
};
export default Home;
