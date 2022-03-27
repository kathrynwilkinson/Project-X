import './style.css';
import React from 'react';

export default function Home() {
	return (
		<div className='page-body'>
			<div className='page-header' id='home-header'></div>
			{/* fade animation on pageload, Welcome */}
			<main className='home-main' id='welcome-text'>
				<div id='header-img-transition'></div>
				<div className='flex-wrapper'>
					<div className='greeting-text'>
						<span id='line1'>-- Hello, I'm Kathryn Wilkinson.</span><br />
						<span id='line2'>&emsp;&emsp;&nbsp;I enjoy philosophical conversations,</span><br />
						<span id='line3'>&emsp;&ensp;&nbsp;and I'm a freelance artist</span><br />
						<span id='line4'>&emsp;&ensp;&nbsp;& web developer.</span>
					</div>
					<div class='main-btns-wrapper'>
						<button className='main-btns' id='see-work-btn'>See my work</button>
						<button className='main-btns' id='contact-btn'>Contact me</button>
					</div>
				</div>
			</main>
		</div>
	);
}
