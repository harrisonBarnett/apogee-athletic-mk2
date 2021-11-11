import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Mousewheel, EffectCoverflow } from 'swiper'

import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css'
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

import Hero from './swiper-main-components/Hero'
import Video from './swiper-main-components/Video'
import ProductSwiper from './swiper-main-components/ProductSwiper'
import Contact from './swiper-main-components/Contact'

SwiperCore.use([ Pagination, Mousewheel, EffectCoverflow ])

const SwiperMain = () => {
    return (
        <Swiper 
        className='swiper-main'
        direction='vertical'
        modules={[ Pagination, Mousewheel ]}
        effect='coverflow'
        coverflowEffect={{
            rotate: 25,
            stretch: 10,
            depth: 25,
            modifier: 1,
            slideShadows: true,
          }}
        spaceBetween={50}
        pagination={{
            clickable: true,
            dynamicBullets: true}}
        mousewheel={{
            releaseOnEdges: true
        }}>
            <SwiperSlide 
            className='swiper-main-slide' 
            id='section-hero'>
                <Hero />
            </SwiperSlide>
            <SwiperSlide className='swiper-main-slide'>
                <Video />
            </SwiperSlide>
            <SwiperSlide className='swiper-main-slide'>
                <ProductSwiper />
            </SwiperSlide>
            <SwiperSlide className='swiper-main-slide'>
                <Contact />
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperMain;