import React from 'react';
import { NavLink } from 'react-router-dom'
import HomeImg from '../../static/images/assets/apogee-ig-logo-orbit.png'

const Footer = () => {
    return (
        <div id='footer'>
            <NavLink 
            exact to='/'
            id='home-btn'>
                <img id='home-btn-img' src={HomeImg}></img>
            </NavLink>
            <div id='social-group'>
                    <div className='social-img'></div>
                    <div className='social-img'></div>
                    <div className='social-img'></div>
                </div>
        </div>
    );
};

export default Footer;