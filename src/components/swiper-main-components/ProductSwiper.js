import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Mousewheel, Keyboard } from 'swiper'

import ShopNow from './swiper-product-components/ShopNow'
import ShoeMain from './swiper-product-components/ShoeMain'
import ShoeDetail from './swiper-product-components/ShoeDetail'

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
            className='swiper-slide-product'
            id='product-slide-1'>
                <ShopNow />
            </SwiperSlide>
            <SwiperSlide 
            id='product-slide-2' 
            className='swiper-slide-product'>
                <ShoeMain />
            </SwiperSlide>
            <SwiperSlide 
            id='product-slide-3' 
            className='swiper-slide-product'>
                <ShoeDetail />
            </SwiperSlide>
        </Swiper>
    );
};

export default ProductSwiper;