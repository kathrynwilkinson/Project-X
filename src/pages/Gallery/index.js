import './style.css';
import React from 'react';
import ProjectCard from '../../components/ProjectCard';

export default function Gallery() {
	return (
		<div className='page-body'>
			<div className='page-header'>Gallery</div>
			<div>ProjectCard section
				<ProjectCard />
			</div>
		</div>
	);
}
