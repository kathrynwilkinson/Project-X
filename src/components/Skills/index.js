import './style.css';
import React from 'react';
import html from '../../images/skills/html5-1.png';
import css from '../../images/skills/css3-2.png';
import js from '../../images/skills/js-2.png';
import jquery from '../../images/skills/jquery-5.png';
import bazaart from '../../images/skills/bazaart.png';
import bootstrap from '../../images/skills/bootstrap-1.png';
import git from '../../images/skills/git.png';
import github from '../../images/skills/github-2.png';
import heroku from '../../images/skills/heroku.png';
import insomnia from '../../images/skills/insomnia.jpg';
import mbd from '../../images/skills/mdb.webp';
import mernstack from '../../images/skills/mernstack.png';
import mvc from '../../images/skills/mvc.jpg';
import mysql from '../../images/skills/mysql-2.png';
import nodejs from '../../images/skills/nodejs.png';
import reacticon from '../../images/skills/react.png';
import restapi from '../../images/skills/restapi-3.png';
import vscode from '../../images/skills/vscode.png';


export default function Skills() {
	return (
		<div id='sills-wrapper'>
			<img id='html' className='skills-section-icons' alt='' src={html} />
			<img id='css' className='skills-section-icons' alt='' src={css} />
			<img id='js' className='skills-section-icons' alt='' src={js} />
			<img id='jquery' className='skills-section-icons' alt='' src={jquery} />
			<img id='git' className='skills-section-icons' alt='' src={git} />
			<img id='github' className='skills-section-icons' alt='' src={github} />
			<img id='heroku' className='skills-section-icons' alt='' src={heroku} />
			<img id='insomnia' className='skills-section-icons' alt='' src={insomnia} />
			<img id='mbd' className='skills-section-icons' alt='' src={mbd} />
			<img id='mernstack' className='skills-section-icons' alt='' src={mernstack} />
			<img id='mvc' className='skills-section-icons' alt='' src={mvc} />
			<img id='mysql' className='skills-section-icons' alt='' src={mysql} />
			<img id='nodejs' className='skills-section-icons' alt='' src={nodejs} />
			<img id='reacticon' className='skills-section-icons' alt='' src={reacticon} />
			<img id='restapi' className='skills-section-icons' alt='' src={restapi} />
			<img id='vscode' className='skills-section-icons' alt='' src={vscode} />
			<img id='bootstrap' className='skills-section-icons' alt='' src={bootstrap} />
			<img id='bazaart' className='skills-section-icons' alt='' src={bazaart} />
		</div>
	);
}
