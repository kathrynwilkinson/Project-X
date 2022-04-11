import React from 'react';
import './style.css';
import logo from '../../assets/images/footer/logo1.PNG';
import email from '../../assets/images/footer/email1.png';
import github from '../../assets/images/footer/github1.png';
import linkedIn from '../../assets/images/footer/linkedin1.png';

export default function FootBar () {
    return (

                <div className='footer-wrapper'>
                    <a href='../../' id='copyright-wrapper' className='footer-links'>
                        <span id='copyright-element'>&copy; </span>
                        <img className='footer-icons' id='logo-icon' alt='' src={logo} />
                    </a>
                    <a href='https://www.linkedin.com/in/kwilkinsonxx/' className='footer-links' target='_blank' rel='noreferrer'>
                        <img className='footer-icons' id='linkedIn-icon' alt='' src={linkedIn} />
                    </a>
                    <a href='https://github.com/NAHco-code' className='footer-links' target='_blank' rel='noreferrer'>
                        <img className='footer-icons' id='github-icon' alt='' src={github} />
                    </a>
                    <a href='mailto:kathrynxwilk@gmail.com' className='footer-links' target='_blank' rel='noreferrer'>
                        <img className='footer-icons' id='mail-icon' alt='' src={email} />
                    </a>
                </div>
    );
}
