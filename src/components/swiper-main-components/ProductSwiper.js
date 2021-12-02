import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Mousewheel, Keyboard } from 'swiper'
import Chevron from '../../static/images/ui-icons/arrow-right.svg'
import bw1 from '../../static/images/assets/bw-1.JPG'
import bw2 from '../../static/images/assets/bw-2.JPG'
import bw3 from '../../static/images/assets/bw-3.JPG'
import bw4 from '../../static/images/assets/bw-4.JPG'

import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css'
import 'swiper/components/keyboard'


SwiperCore.use([ Autoplay, Mousewheel, Keyboard ])

const ProductSwiper = () => {
    return (
        <Swiper 
        className='swiper-product'
        direction='horizontal'
        nested={true}
        modules={[ Autoplay, Mousewheel, Keyboard ]}
        spaceBetween={50}
        mousewheel={{
            releaseOnEdges: true,        
        }}
        keyboard={{
            enabled: true
        }}>
            <SwiperSlide
            id='product-slide-1' 
            className='swiper-slide-product'>
                <div id='product-slide-1-left'>
                    <div className='product-slide-1-img' style={{backgroundImage: `url(${bw1})`}}></div>
                    <div className='product-slide-1-img' style={{backgroundImage: `url(${bw2})`}}></div>
                    <div className='product-slide-1-img' style={{backgroundImage: `url(${bw3})`}}></div>
                    <div className='product-slide-1-img' style={{backgroundImage: `url(${bw4})`}}></div>
                </div>
                <div id='product-slide-1-right'>
                    <div id='shop-now-container'>
                        <p>FUNCTION</p>
                        <p>MEET</p>
                        <p>FORM</p>
                        <NavLink to='/shop'><div id='shop-now-btn'>SHOP NOW</div></NavLink>
                    </div>
                </div>                
                <div id='swipe-indicator'>
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