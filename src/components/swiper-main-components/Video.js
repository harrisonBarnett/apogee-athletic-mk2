import React from 'react';
import PlayBtn from '../../static/images/assets/play_circle_outline_white_24dp.svg'
import FeatureVideo from '../../static/images/assets/hero-video.mp4'

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
        <video 
        className='feature-video'
        src={FeatureVideo} 
        frameBorder='0'
        controls></video>
        </>
    );
};

export default Video;