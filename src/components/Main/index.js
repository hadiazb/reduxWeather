import React, { Fragment, useState } from 'react';
import MobileMain from '../MobileMain/index';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './style.css';

const Main = () => {
	const [main, setMain] = useState(false);

	return (
		<Fragment>
			<main className='main container'>
				<div
					className='main__icon'
					onClick={() => (main ? setMain(false) : setMain(true))}
				>
					<GiHamburgerMenu size='30px' />
				</div>
				<Link to='/'>
					<h2 className='main__title'>Weather App</h2>
				</Link>
			</main>
			{main ? <MobileMain /> : null}
		</Fragment>
	);
};

export default Main;
