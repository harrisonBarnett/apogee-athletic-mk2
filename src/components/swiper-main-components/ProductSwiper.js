import React from 'react';
import { NavLink } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Mousewheel } from 'swiper'

import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css'

SwiperCore.use([ Autoplay, Mousewheel ])

const ProductSwiper = () => {
    return (
        <Swiper 
        className='swiper-product'
        direction='horizontal'
        modules={[ Autoplay, Mousewheel ]}
        spaceBetween={50}
        mousewheel={{
            forceToAxis: true
        }}
        >
            <SwiperSlide className='swiper-slide-product'>
                <h1>slide 1</h1>
                <NavLink to='/shop'>
                    <button>shop</button>
                </NavLink>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-product'>
                <h1>slide 2</h1>
            </SwiperSlide>
            <SwiperSlide className='swiper-slide-product'>
                <h1>slide 3</h1>
            </SwiperSlide>
        </Swiper>
    );
};

export default ProductSwiper;