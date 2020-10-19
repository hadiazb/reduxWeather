import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const MobileMain = () => {
	return (
		<div className='mobile '>
			<div className='mobile__main'>
				<ul>
					<li className='mobile__main-list'>
						<Link to='/history'>
							<h4>Busquedas recientes</h4>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MobileMain;
