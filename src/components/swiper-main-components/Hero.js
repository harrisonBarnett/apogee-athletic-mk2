import React from 'react';

import Logo from '../../static/images/assets/apogee-athletic-words.svg'

const Hero = props => {
    return (
        <img 
        className={props.showTitle} 
        id='title'
        src={Logo}
        alt='Apogee Athletic branding'>
        </img>

    );
};

export default Hero;