import React from 'react';
import Product from './Product';
import { Container } from 'react-bootstrap';

const Products = ({ products }) => {
  return (
    <div>
      <div className='products-heading '>
        <h2>Best Selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <Container className='products-container'>
        {products?.map((product, index) => (
          <Product key={product._id} product={product} />
        ))}
      </Container>
    </div>
  );
};

export default Products;
