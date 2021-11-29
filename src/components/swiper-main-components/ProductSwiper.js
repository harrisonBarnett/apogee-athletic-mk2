import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Mousewheel } from 'swiper'
import Chevron from '../../static/images/ui-icons/arrow-right.svg'

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
                <div id='product-slide-1-left'>
                    images images images
                </div>
                <div id='product-slide-1-right'>
                    <div id='shop-now-container'>
                        <p>FORM</p>
                        <p>MEET</p>
                        <p>FUNCTION</p>
                        <NavLink to='/shop'><div id='shop-now-btn'>SHOP NOW</div></NavLink>
                    </div>
                </div>                
                <div id='swipe-indicator'>
                    <p>swipe for more</p>
                    <img id='swipe-indicator-chevron' src={Chevron}/>
                </div>
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