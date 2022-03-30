import './style.css';
import React from 'react';
import ContactLinks from '../../components/ContactLinks';
import contactBaby from '../../images/contact/cool-baby-square.PNG';

export default function Contact() {
	return (
		<div className='page-body' id='contact-page'>
			<div className='page-header'>contact.</div>
			<ContactLinks />
			<img className='contact-baby' alt='' src={contactBaby}/>
		</div>
	);
}
