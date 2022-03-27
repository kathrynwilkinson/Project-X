import './style.css';
import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import projects from '../../data/projects.json';

export default function Gallery() {
	return (
		<div className='page-body'>
			<div className='page-header'>Gallery</div>
			<div className='portfolio-sec'>
				{projects.map( project => ( <ProjectCard {...project} key={project.id}/>)) }
			</div>
		</div>
	);
}
