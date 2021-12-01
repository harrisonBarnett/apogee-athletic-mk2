import React from 'react';
import { NavLink } from 'react-router-dom'
import HomeImg from '../../static/images/assets/apogee-ig-logo-orbit.png'
import twitter from '../../static/images/social-icons/twitter-icon-white.svg'
import facebook from '../../static/images/social-icons/facebook-icon-white.svg'
import insta from '../../static/images/social-icons/insta-icon-white.svg'

const Footer = () => {
    return (
        <div id='footer'>
            <NavLink 
            exact to='/'
            id='home-btn'>
                <img id='home-btn-img' src={HomeImg}></img>
            </NavLink>
            <div id='social-group'>
                <NavLink to='/shop'><div id='footer-shop-btn'>SHOP</div></NavLink>
                <a href='#' className='social-img'><img src={twitter} /></a>
                <a href='#' className='social-img'><img src={facebook} /></a>
                <a href='#' className='social-img'><img src={insta} /></a>
            </div>
        </div>
    );
};

export default Footer;