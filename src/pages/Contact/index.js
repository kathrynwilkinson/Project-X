import './style.css';
import React from 'react';
import ContactLinks from '../../components/ContactLinks';
import contactBaby from '../../images/contact/cool-baby-square.PNG';
import cloudFade from '../../images/contact/cloudfade.JPG';

export default function Contact() {
	return (
		<div className='page-body' id='contact-page'>
			<div className='page-header'>contact.</div>
			<ContactLinks />
			<div className='blurb-flex'>
				<p id='blurb1' className='contact-blurb'>Have you ever had a dream, that you were so sure was real? </p>
				<p id='blurb2' className='contact-blurb'>What if you were unable to wake from that dream? </p>
				<p id='blurb3' className='contact-blurb'>How would you know the difference between the dream world and real world?</p>
				<img id='contact-baby' alt='' src={contactBaby}/>
			</div>

			<img className='fade-img' alt='' src={cloudFade}/>
		</div>
	);
}
