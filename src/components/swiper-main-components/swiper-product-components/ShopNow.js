import React from 'react';
import { NavLink } from 'react-router-dom';

import Chevron from '../../../static/images/ui-icons/arrow-right.svg'
import bw1 from '../../../static/images/assets/bw-1.JPG'
import bw2 from '../../../static/images/assets/bw-2.JPG'
import bw3 from '../../../static/images/assets/bw-3.JPG'
import bw4 from '../../../static/images/assets/bw-4.JPG'

const ShopNow = () => {
    return (
       <>
        <div id='product-slide-1-left'>
                <div className='product-slide-1-img' style={{backgroundImage: `url(${bw1})`}}></div>
                <div className='product-slide-1-img' style={{backgroundImage: `url(${bw2})`}}></div>
                <div className='product-slide-1-img' style={{backgroundImage: `url(${bw3})`}}></div>
                <div className='product-slide-1-img' style={{backgroundImage: `url(${bw4})`}}></div>
            </div>
            <div id='product-slide-1-right'>
                <div id='shop-now-container'>
                    <p>FUNCTION MEET FORM</p>
                    <NavLink to='/shop'><div id='shop-now-btn'>SHOP NOW</div></NavLink>
                </div>
            </div>                
            <div id='swipe-indicator'>
                <img id='swipe-indicator-chevron' src={Chevron}/>
            </div>
        </>
    );
};

export default ShopNow;