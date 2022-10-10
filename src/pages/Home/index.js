import './style.css';
import React from 'react';
import profileMirror from '../../assets/images/home/IMG_4723.PNG';
import profile from '../../assets/images/home/profile.PNG';

export default function Home() {
	return (
		<div id='home-page' className='page-body'>
			<div id='home-header'>
				<img id='headshot' alt='Web Developer headshot' src={profile}/>
				<div id='top-btn-wrapper' className='main-btns-wrapper'>
					<a href='../Gallery'>
						<button className='main-btns' id='see-work-btn'>
							<span className='btn-txt' id='see-work'>See my work</span>
							<span className='btn-txt guillemet'>&raquo;</span>
						</button>
					</a>
				</div>
			</div>
			<div id='home-mirror'>
				<img id='header-img-transition' alt='' src={profileMirror}/>
				<div id='bottom-btn-wrapper' className='main-btns-wrapper'>
					<a href='../Contact'>
						<button className='main-btns' id='contact-btn'>
							<span className='btn-txt' id='contact-me'>Contact me</span>
							<span className='btn-txt guillemet'>&raquo;</span>
						</button>
					</a>
				</div>
			</div>

		</div>
	);
}
