import React from 'react';
import Footer from './swiper-main-components/Footer'
import Client from 'shopify-buy'
import Shopify from './Shopify'

import Logo from '.././static/images/assets/apogee-athletic-words.svg'

import '../Shopify.css'

const Shop = () => {
    const client = Client.buildClient({
        storefrontAccessToken: process.env.REACT_APP_ACCESS_TOKEN,
        domain: process.env.REACT_APP_DOMAIN
      });
    return (
        <div id='section-shop'>
            <div id='shop-left'>
                <h3
                id='shop-title'>shop.</h3>
                <Shopify client={client}/>
                <img
                id='shop-left-logo' 
                src={Logo}></img>
            </div>
            
            <div id='shop-right'></div>
            <Footer />
        </div>
    );
};

export default Shop;

