import React from 'react';

import Logo from '../../static/images/apogee-athletic-white-words-outline.png'

const Hero = props => {
    return (
        <img 
        className={props.showTitle} 
        id='title'
        src={Logo}
        alt='White outlined Apogee logo'>
        </img>

    );
};

export default Hero;