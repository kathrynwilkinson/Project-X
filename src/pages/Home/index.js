import './style.css';
import React from 'react';
import hero from '../../images/home/portfolio-hero-fade.JPG';
import heroMirror from '../../images/home/header-img-mirror.JPG';

export default function Home() {
	return (
		<div className='page-body'>
			<img className='' id='home-header' alt='Web Developer headshot' src={hero}/>
			<img id='header-img-transition' alt='' src={heroMirror}/>
			{/* <div id='hero-mirror'></div> */}

			<main className='home-main' id='welcome-text'>
				<div className='flex-wrapper'>
					<div className='greeting-text'>
						<span id='line1'>-- Hello, my name is </span><br />
						<span id='line2'>&emsp;&emsp;Kathryn Wilkinson. </span><br />
						<span id='line3'>&emsp;&ensp;&emsp;&emsp;I'm a web developer,</span><br />
						<span id='line4'>&emsp;&ensp;&emsp;&emsp;&emsp;& I like to make things.</span>
					</div>
					<div className='main-btns-wrapper'>
						<a href='../Gallery'>
							<button className='main-btns' id='see-work-btn'>
								<span className='btn-txt' id='see-work'>See my work</span>
								<span className='btn-txt guillemet'>&raquo;</span>
							</button>
						</a>
						<a href='../Contact'>
							<button className='main-btns' id='contact-btn'>
								<span className='btn-txt' id='contact-me'>Contact me</span>
								<span className='btn-txt guillemet'>&raquo;</span>
							</button>
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}
