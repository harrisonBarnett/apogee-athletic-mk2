import React from 'react';
import PlayBtn from '../../static/images/assets/play_circle_outline_white_24dp.svg'

const Video = props => {
    const playVideo = () => {
        const playBtn = document.querySelector('#play-btn')
        playBtn.id = 'play-button-toggle'

        const sectionOverlay = document.querySelector('.section-overlay')
        sectionOverlay.className = 'section-overlay-toggle'

        const video = document.querySelector('.feature-video')
        setTimeout(() => {video.classList.toggle('show')}, 250)

    }
    return (
        <>
        <div className='section-overlay'></div>
        <img 
        id='play-btn'
        className={props.showPlayButton}
        src={PlayBtn}
        alt='play button' 
        onClick={playVideo}></img>
        <iframe 
            className='feature-video'
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/1wnE4vF9CQ4" 
            frameborder="0" 
            allowfullscreen
            >
        </iframe>

        </>
    );
};

export default Video;