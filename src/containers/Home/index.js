import React from 'react';
import Search from '../../components/Search/index';
import Main from '../../components/Main/index';
import Information from '../../components/Information/index';
import ListOfWeather from '../../components/ListOfWeatherDay/index';
import './style.css';

const Home = () => {
	return (
		<div className='home'>
			<Main />
			<Search />
			<Information />
			<ListOfWeather />
		</div>
	);
};

export default Home;
