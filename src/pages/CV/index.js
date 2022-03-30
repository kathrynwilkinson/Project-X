import './style.css';
import React from 'react';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';

export default function CV() {
	return (
		<div className='page-body' id='cv-page'>
			<div className='page-header'>cv.</div>
			<div id='skills-sec'>
				<Skills />
				<Experience />
			</div>
		</div>
	);
}
