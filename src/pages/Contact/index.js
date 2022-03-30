import './style.css';
import React from 'react';
import ContactLinks from '../../components/ContactLinks';
import contactBaby from '../../images/contact/cool-baby-square.PNG';
import cloudFade from '../../images/cloudfade.JPG';

export default function Contact() {
	return (
		<div className='page-body' id='contact-page'>
			<div className='page-header'>contact.</div>
			<ContactLinks />
			<div className='flex-wrapper'>
				<h3 id='contact-blurb'>Have you ever had a dream, that you were so sure was real? <br />
					What if you were unable to wake from that dream? <br />
					How would you know the difference between the dream world and real world?</h3>
				<img id='contact-baby' alt='' src={contactBaby}/>
			</div>

			<img className='fade-img' alt='' src={cloudFade}/>
		</div>
	);
}
