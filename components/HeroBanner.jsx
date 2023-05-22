import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { BsPlay } from 'react-icons/bs';
import Slider from 'react-slick';
import Sidebar from './Sidebar';

const HeroBanner = ({ heroBanner }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div className='hero-banner-container'>
      <div className='hero-banner-desc'>
        <h3>{heroBanner.midText}</h3>
        <p>{heroBanner.desc}</p>
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
          <button
            className='hero-banner-video'
            type='button'
            aria-label='play button'
          >
            <BsPlay />
          </button>
        </div>
      </div>
      <img
        src={urlFor(heroBanner.image)}
        alt='headphones'
        className='hero-banner-image'
      />
    </div>
  );
};

export default HeroBanner;
