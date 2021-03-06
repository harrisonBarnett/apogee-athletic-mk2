import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Mousewheel, Keyboard, EffectCoverflow } from 'swiper'

import "swiper/swiper-bundle.min.css";
import 'swiper/swiper.min.css'
import 'swiper/components/keyboard'
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

import Hero from './swiper-main-components/Hero'
import Video from './swiper-main-components/Video'
import ProductSwiper from './swiper-main-components/ProductSwiper'
import Contact from './swiper-main-components/Contact'

SwiperCore.use([ Pagination, Mousewheel, Keyboard, EffectCoverflow ])

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
            forceToAxis: true,
            releaseOnEdges: true
        }}
        keyboard={{
            enabled: true        }}>
            <SwiperSlide 
            id='section-hero'
            className='swiper-main-slide'>
                {({ isActive }) => (
                <Hero showTitle={isActive ? 'title' : 'title-off'} />)}
            </SwiperSlide>
            <SwiperSlide
            id='section-video' 
            className='swiper-main-slide'>
                {({ isActive }) => (
                <Video showPlayButton={isActive ? 'play-button-on' : 'play-button-off'} />)}
            </SwiperSlide>
            <SwiperSlide className='swiper-main-slide'>
                <ProductSwiper />
            </SwiperSlide>
            <SwiperSlide
            id='section-contact' 
            className='swiper-main-slide'>
                <Contact />
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperMain;