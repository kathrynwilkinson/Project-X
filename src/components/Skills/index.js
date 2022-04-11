import './style.css';
import React from 'react';
import html from '../../assets/images/skills/html5-1.png';
import css from '../../assets/images/skills/css3-2.png';
import js from '../../assets/images/skills/js-2.png';
import jquery from '../../assets/images/skills/jquery-5.png';
import bazaart from '../../assets/images/skills/bazaart.png';
import bootstrap from '../../assets/images/skills/bootstrap-1.png';
import git from '../../assets/images/skills/git.png';
import github from '../../assets/images/skills/github-2.png';
import heroku from '../../assets/images/skills/heroku.png';
import insomnia from '../../assets/images/skills/insomnia.jpg';
import mbd from '../../assets/images/skills/mdb.webp';
import mernstack from '../../assets/images/skills/mernstack.png';
import mvc from '../../assets/images/skills/mvc.jpg';
import mysql from '../../assets/images/skills/mysql-2.png';
import nodejs from '../../assets/images/skills/nodejs.png';
import reacticon from '../../assets/images/skills/react.png';
import restapi from '../../assets/images/skills/restapi-3.png';
import vscode from '../../assets/images/skills/vscode.png';


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
