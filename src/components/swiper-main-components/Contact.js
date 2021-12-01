import React, { useState } from 'react';
import Footer from './Footer'

import Spotify from '../../static/images/social-icons/spotify.png'
import Apple from '../../static/images/social-icons/apple.png'
import PodcastAddict from '../../static/images/social-icons/podcastaddict.png'
import Youtube from '../../static/images/social-icons/youtube-red.png'

import { db } from '../../firebase_config'
import { collection, addDoc } from 'firebase/firestore'

const Contact = () => {
    const [newEmail, setNewEmail] = useState('')
    const emailsCollectionRef = collection(db, 'emails')

    const submitEmail = async () => {
        const emailField = document.querySelector('#input-field')
        await addDoc(emailsCollectionRef, {email: newEmail })
        emailField.value = ''
    }
    return (
        <>
            
            <div id='contact-right'>
                <div id='listen-grid-perspective'>
                    <div id='listen-grid'>
                        <img src={Spotify} className='listen-img'></img>
                        <img src={Apple} className='listen-img'></img>
                        <img src={PodcastAddict} className='listen-img'></img>
                        <img src={Youtube} className='listen-img'></img>
                    </div>
                </div>
                <div id='contact-copy-group'>
                    <p>listen along</p>
                    <p>with the Apogee Fitness Podcast</p>
                    <p>powered by <a href='#' target='_blank'>Anchor.fm</a></p>
                </div>
            </div>
            <div id='contact-left'>
                <div id='signup-group'>
                    <input 
                    id='input-field'
                    placeholder={'email...'}
                    onChange={(event) => setNewEmail(event.target.value)}/>
                    <button onClick={submitEmail}>keep me updated</button>
                </div>
            </div>
            
            <Footer />
        </>
    );
};

export default Contact;