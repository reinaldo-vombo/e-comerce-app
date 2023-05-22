import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick';

import { Autoplay, Pagination, Navigation } from 'swiper';
import banner from '../dumydata/carosel';
import Image from 'next/image';
import { Col } from 'react-bootstrap';

const Carrosel = ({ heroBanner }) => {
  return (
    <div className='my-carosel'>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {banner.map((item, i) => (
          <SwiperSlide>
            <Image src={item.immage} className='w-100 carosel-img' alt='' />
            <div className='d-flex justify-content-between align-items-center position-absolute'>
              <Col lg={6}>
                <h2 className='text-white font-weight-bold display-4'>
                  {item.title}
                </h2>
              </Col>
              <Col lg={6}></Col>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carrosel;
