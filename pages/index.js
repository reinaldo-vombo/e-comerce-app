import React from 'react';
import { HeroBanner, Product, FooterBanner } from '../components';
import { client } from '../lib/client';

const Home = ({ products, bannerData, psProducts }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]} />
      <div className='products-heading'>
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((product, index) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
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
