import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import {
	TiWeatherCloudy,
	TiWeatherDownpour,
	TiWeatherPartlySunny,
	TiWeatherShower,
	TiWeatherStormy,
	TiWeatherSunny,
	TiWeatherWindyCloudy,
	TiWeatherWindy,
} from 'react-icons/ti';

const ListOfHistory = (props) => {
	const { history } = props;

	let hast = {};
	const filterCity = history.filter((current) =>
		hast[current.id] ? false : (hast[current.id] = true)
	);

	const handleIcon = (key) => {
		switch (key) {
			case 'overcast clouds':
				return <TiWeatherPartlySunny size='60' />;

			case 'few clouds':
				return <TiWeatherPartlySunny size='60' />;

			case 'scattered clouds':
				return <TiWeatherCloudy size='60' />;

			case 'broken clouds':
				return <TiWeatherWindyCloudy size='60' />;

			case 'clouds':
				return <TiWeatherCloudy size='60' />;

			case 'moderate rain':
				return <TiWeatherShower size='60' />;

			case 'rain':
				return <TiWeatherDownpour size='60' />;

			case 'light rain':
				return <TiWeatherWindy size='60' />;

			case 'heavy intensity rain':
				return <TiWeatherStormy size='60' />;

			case 'very heavy rain':
				return <TiWeatherStormy size='60' />;

			case 'clear sky':
				return <TiWeatherSunny size='60' />;

			default:
				<TiWeatherSunny size='60' />;
				break;
		}
	};
	return (
		<div className='container history'>
			<ul className='history__list'>
				{filterCity.map((item, key) => (
					<li className='history__list-item' key={key}>
						<h5>{item.name}</h5>
						{handleIcon(filterCity[key].weather[0].description)}
						<div className='temp'>
							<h6>{`${Math.round(item.main.temp - 273.15)}°C`}</h6>
							<h6>Ver mas</h6>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
const mapStateToProps = (reducers) => {
	const { cityReducer } = reducers;
	return cityReducer;
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListOfHistory);
