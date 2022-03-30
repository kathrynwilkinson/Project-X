import './style.css';
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projects from '../../data/projects.json';

export default function Gallery() {
	return (
		<div className='page-body' id='gallery-page'>
			<div className='page-header' id='gallery-header'>works.</div>
			{/* <div id='gallery-blurb'>
				<p>I enjoy an innovative and
				judicious approach when solving problems. Developed design skills enable
				craft and optimization of elegant, user-focused websites
				and applications.
                </p>
				<p>Backgrounds in fine art, social work and
				hospitality industries, provide in-depth knowledge
				of dynamic team collaboration, demanding clients,
				sensitive information & business objectives, as well as
				sales, marketing and design.
				</p>
			</div> */}

			<div className='portfolio-sec'>
				{projects.map( project => ( <ProjectCard {...project} key={project.id}/>)) }
			</div>
		</div>
	);
}
