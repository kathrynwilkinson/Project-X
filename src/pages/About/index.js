import './style.css';
import React from 'react';
import AboutCard from '../../components/AboutCard';
import Skills from '../../components/Skills';

export default function About() {
	return (
		<div className='page-body' id='about-page'>
			<div className='page-header'>about.</div>
			<div id='about-blurb'>
				<p>I'm a full-stack web developer with a passion for UI/UX design, born and raised in Columbus, Ohio. When I'm not coding, you'll find me playing music, painting, gardening or teaching my dog new tricks.</p>
			</div>
			<div>AboutCard section
				<AboutCard />
			</div>
			<div>Skills section
				<Skills />
			</div>
		</div>
	);
}
