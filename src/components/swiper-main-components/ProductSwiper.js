import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
            <SwiperSlide
            id='product-slide-1' 
            className='swiper-slide-product'>
                <h1>slide 1</h1>
                <NavLink to='/shop'><button>SHOP</button></NavLink>
            </SwiperSlide>
            <SwiperSlide 
            id='product-slide-2' 
            className='swiper-slide-product'>
                <h1>slide 2</h1>
            </SwiperSlide>
            <SwiperSlide 
            id='product-slide-3' 
            className='swiper-slide-product'>
                <h1>slide 3</h1>
            </SwiperSlide>
        </Swiper>
    );
};

export default ProductSwiper;