import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'

import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css'

SwiperCore.use([ Autoplay ])

const ProductSwiper = () => {
    return (
        <Swiper 
        className='swiper-product'
        direction='horizontal'
        modules={[ Autoplay ]}
        spaceBetween={50}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true
        }}
        >
            <SwiperSlide className='swiper-slide-product'>
                <h1>slide 1</h1>
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