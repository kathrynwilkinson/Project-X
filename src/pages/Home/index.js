import './style.css';
import React from 'react';

export default function Home() {
	return (
		<div className='page-body'>
			<div className='page-header' id='home-header'></div>
			<main id='home-main'>
				<div id='header-img-transition'></div>
				<div id='welcome-text'>Welcome.</div>
			</main>
		</div>
	);
}
