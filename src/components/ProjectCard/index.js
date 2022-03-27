import './style.css';
import React from 'react';

export default function ProjectCard({gitURL, liveURL, title, id}) {
	return (
		<div className='project-card'>
			<a href={gitURL} target='_blank' rel='noreferrer'>
                <div title=' View Code ' className="thumbnail code-thumb" id={id + '1'}>
                    <div className='screen code-screen'></div>
                </div>
            </a>
            <h5>{title}</h5>
            <a href={liveURL} target='_blank' rel='noreferrer'>
                <div title=' View Live ' className="thumbnail live-thumb" id={id + '2'}>
                    <div className='screen live-screen'></div>
                </div>
            </a>
		</div>
	);
}
