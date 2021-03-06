import './style.css';
import React from 'react';
import email from '../../assets/images/contact/email2.png';
import github from '../../assets/images/contact/github2.png';
import linkedIn from '../../assets/images/contact/linkedin2.png';
import logo from '../../assets/images/contact/logo2.PNG';

export default function ContactLinks () {
    return (
        <div className='contact-section'>
            <div className='contact-links-container'>
                <div className='contact-link-row'>
                    <img id='github2' className='contact-page-icons' alt='' src={github} />
                    <img id='linkedin2' className='contact-page-icons' alt='' src={linkedIn} />
                </div>
                <div className='contact-link-row'>
                    <img id='email2' className='contact-page-icons' alt='' src={email} />
                    <img id='logo2' className='contact-page-icons' alt='' src={logo} />
                </div>
            </div>
            {/* <img className='contact-baby' alt='' src={contactBaby}/> */}
        </div>


    );
}
