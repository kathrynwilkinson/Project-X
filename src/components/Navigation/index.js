import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
	return (
		<div className='nav-wrapper'>
            <div className='nav'>
                <Link to='/' className='nav-link'>
                    Home
                </Link>
                <Link to='/about' className='nav-link'>
                    About
                </Link>
                <Link to='/gallery' className='nav-link'>
                    Works
                </Link>
                <Link to='/cv' className='nav-link'>
                    CV
                </Link>
				<Link to='/contact' className='nav-link'>
                    Contact
                </Link>
            </div>
        </div>
	);
}
