import React, { useState } from 'react';
import Footer from './Footer'

import Spotify from '../../static/images/social-icons/spotify.svg'
import Apple from '../../static/images/social-icons/apple.svg'
import PodcastAddict from '../../static/images/social-icons/podcastaddict.svg'
import Youtube from '../../static/images/social-icons/youtube-red.svg'

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
        <div>
            <h1>contact slide</h1>
            <p id='contact-copy'>listen along with the Apogee Fitness Podcast</p>
            <p id='contact-copy-subtitle'>powered by Anchor.fm</p>
            <div id='listen-grid'>
                <div id='spotify-btn' className='listen-img' style={{backgroundImage: `url(${Spotify})` }}></div>
                <div id='apple-btn' className='listen-img' style={{backgroundImage: `url(${Apple})` }}></div>
                <div id='podcast-addict-btn' className='listen-img' style={{backgroundImage: `url(${PodcastAddict})`}}></div>
                <div id='youtube-btn' className='listen-img' style={{backgroundImage: `url(${Youtube})`}}></div>
            </div>
            <input 
            id='input-field'
            placeholder={'email...'}
            onChange={(event) => setNewEmail(event.target.value)}/>
            <button onClick={submitEmail}>sign up</button>
            <Footer />
        </div>
    );
};

export default Contact;