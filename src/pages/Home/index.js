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
						<span id='line1'>-- Hello, my name is </span><br />
						<span id='line2'>&emsp;&emsp;&nbsp;&emsp;&emsp;&nbsp;Kathryn Wilkinson. </span><br />
						<span id='line3'>&emsp;&ensp;&nbsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&nbsp;I'm a web developer, and</span><br />
						<span id='line4'>&emsp;&ensp;&nbsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&nbsp;I like to make things.</span>
					</div>
					<div className='main-btns-wrapper'>
						<button className='main-btns' id='see-work-btn'>See my work</button>
						<button className='main-btns' id='contact-btn'>Contact me</button>
					</div>
				</div>
			</main>
		</div>
	);
}
