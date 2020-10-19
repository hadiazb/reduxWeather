import React, { Fragment } from 'react';
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
import { connect } from 'react-redux';

const ListOfWeather = (props) => {
	const { forecast } = props;

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

			case 'clear sky':
				return <TiWeatherSunny size='60' />;

			default:
				<TiWeatherSunny size='60' />;
				break;
		}
	};

	return (
		<section className='listCard container'>
			<ul className='listCard__list'>
				{[1, 2, 3, 4, 5, 6, 7].map((item, key) => (
					<Fragment key={item}>
						<li className='listCard__list-item'>
							<h6 className='list__title'>
								{forecast.list
									? forecast.list[key].dt_txt
									: `00/00/00
                    00-00-00
                  `}
							</h6>
							{handleIcon(
								forecast.list ? (
									forecast.list[key].weather[0].description
								) : (
									<TiWeatherSunny size='60' />
								)
							)}
							<div className='list__info'>
								<h6 className='list__title'>
									{' '}
									{forecast.list
										? `${Math.round(
												forecast.list[key].main.temp - 273.15
										  )}°C`
										: '0°C'}
								</h6>
								<h6 className='list__title'>
									{' '}
									{forecast.list
										? forecast.list[key].weather[0].description
										: 'Sin Data'}
								</h6>
							</div>
						</li>
						<li className='listCard__list-line'></li>
					</Fragment>
				))}
			</ul>
		</section>
	);
};

const mapStateToProps = (reducers) => {
	const { cityHistoryReducer } = reducers;
	return cityHistoryReducer;
};

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListOfWeather);
