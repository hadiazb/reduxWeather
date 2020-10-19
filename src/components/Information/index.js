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

const Information = (props) => {
	const { city, error } = props;

	const handleIcon = (key) => {
		switch (key) {
			case 'overcast clouds':
				return <TiWeatherPartlySunny size='140' />;

			case 'few clouds':
				return <TiWeatherPartlySunny size='140' />;

			case 'scattered clouds':
				return <TiWeatherCloudy size='140' />;

			case 'broken clouds':
				return <TiWeatherWindyCloudy size='140' />;

			case 'clouds':
				return <TiWeatherCloudy size='140' />;

			case 'moderate rain':
				return <TiWeatherShower size='140' />;

			case 'rain':
				return <TiWeatherDownpour size='140' />;

			case 'light rain':
				return <TiWeatherWindy size='140' />;

			case 'heavy intensity rain':
				return <TiWeatherStormy size='140' />;

			case 'very heavy rain':
				return <TiWeatherStormy size='140' />;

			case 'clear sky':
				return <TiWeatherSunny size='140' />;

			default:
				<TiWeatherSunny size='140' />;
				break;
		}
	};

	const putContent = () => {
		// if (error) {
		// 	return <h1>Error: {error}</h1>;
		// }
		return (
			<div className='info__container'>
				<div className='info__container-image'>
					{handleIcon(
						city.weather ? (
							city.weather[0].description
						) : (
							<TiWeatherSunny size='140' />
						)
					)}
				</div>
				<div className='info__container-data'>
					<ul className='list'>
						<li className='list__item-weather'>
							<h5>
								{city.weather === undefined
									? 'Sin valor'
									: city.weather[0].description}
							</h5>
						</li>
						<li className='list__item-data blue'>
							<h5>
								{city.main === undefined
									? 'NaN'
									: `${Math.round(city.main.temp_max - 273.15)}°C`}
							</h5>
						</li>
						<li className='list__item-data black'>
							<h5>
								{city.main === undefined
									? 'NaN'
									: `${Math.round(city.main.temp_min - 273.15)}°C`}
							</h5>
						</li>
						<li className='list__item-property'>
							<h5>Humedad</h5>
							<h5>
								{city.main === undefined
									? 'NaN'
									: `${city.main.humidity}%`}
							</h5>
						</li>
						<li className='list__item-line'></li>
						<li className='list__item-property'>
							<h5>Velocidad</h5>
							<h5>
								{city.main === undefined
									? 'NaN'
									: `${city.wind.speed}m/s`}
							</h5>
						</li>
					</ul>
				</div>
			</div>
		);
	};

	return (
		<section className='info container'>
			{putContent()}
		</section>
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
)(Information);
