import './style.css';
import React from 'react';
import AboutCard from '../../components/AboutCard';
import Skills from '../../components/Skills';

export default function About() {
	return (
		<div className='page-body'>
			<div className='page-header'>About</div>
			<div>About Blurb</div>
			<div>AboutCard section
				<AboutCard />
			</div>
			<div>Skills section
				<Skills />
			</div>
		</div>
	);
}
