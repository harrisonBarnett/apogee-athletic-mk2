import React, { useState } from 'react';
import Footer from './Footer'

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