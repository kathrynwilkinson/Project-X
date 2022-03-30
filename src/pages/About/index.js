import './style.css';
import React from 'react';
import about1 from '../../images/about/wedding3.jpg';
import about2 from '../../images/about/content-img-women-family.jpg';
import about3 from '../../images/about/portfolio2resized.jpg';
import about4 from '../../images/about/portfolio-art-soul-dust.jpg';
import about5 from '../../images/about/portfolio-art-devour.jpg';
import about6 from '../../images/about/d-n-me-vector.jpg';

export default function About() {
	return (
		<div className='page-body' id='about-page'>
			<div className='page-header'>about.</div>
			<div id='about-blurb'>
				<p>I'm a full-stack web developer with a passion for UI/UX design, born and raised in Columbus, Ohio. When I'm not coding, you'll find me playing music, painting, gardening or teaching my dog new tricks.</p>
			</div>
			<div id='about-thumb-sec'>
				<div className="">
					<img alt='' className="about-thumb" src={about1}/>
				</div>
				<div className="">
					<img alt='' className="about-thumb" src={about2}/>
				</div>
				<div className="">
					<img alt='' className="about-thumb" id="dani-and-i" src={about6}/>
				</div>
				<div className="">
					<img alt='' className="about-thumb" src={about3}/>
				</div>
				<div className="">
					<img alt='' className="about-thumb" src={about4}/>
				</div>
				<div className="">
					<img alt='' className="about-thumb" src={about5}/>
				</div>
			</div>
		</div>
	);
}
