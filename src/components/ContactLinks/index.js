import './style.css';
import React from 'react';
import email from '../../images/contact/email2.png';
import github from '../../images/contact/github2.png';
import linkedIn from '../../images/contact/linkedin2.png';
import logo from '../../images/contact/logo2.PNG';

export default function ContactLinks () {
    return (
        <div className='contact-section'>
            <div className='contact-links-container'>
                <img id='github2' className='contact-page-icons' alt='' src={github} />
                <img id='linkedin2' className='contact-page-icons' alt='' src={linkedIn} />
                <img id='email2' className='contact-page-icons' alt='' src={email} />
                <img id='logo2' className='contact-page-icons' alt='' src={logo} />
            </div>
            {/* <img className='contact-baby' alt='' src={contactBaby}/> */}
        </div>


    );
}
