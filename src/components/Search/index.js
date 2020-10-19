import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as cityActions from '../../actions/cityActions';
import * as cityForecastActions from '../../actions/cityForecastActions';
import './style.css';
import { FiSearch } from 'react-icons/fi';

const Search = (props) => {
	const { getCity, getHistoryCity } = props;
	const [cityName, setCityName] = useState({
		name: '',
	});
	const handleInputChange = (e) => {
		setCityName({
			...cityName,
			name: e.target.value,
		});
	};

	const handleClick = async () => {
		if (cityName.name === '') {
			alert('Ingresar nombre de la ciudad');
		}
		if (cityName.name !== '') {
			await getCity(cityName.name);
			getHistoryCity(cityName.name);
		}
	};

	return (
		<div className='search container'>
			<h4 className='search__title'>Busqueda por ciudad</h4>
			<div className='search__input'>
				<input
					className='search__input-input'
					type='text'
					placeholder='Entry city...'
					onChange={handleInputChange}
				/>
				<button
					className='search__input-button'
					type='submit'
					onClick={handleClick}
				>
					<FiSearch size='15' />
				</button>
			</div>
			<h4 className='search__subtitle'>{cityName.name}</h4>
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { cityReducer, cityHistoryReducer } = reducers;
	return { cityReducer, cityHistoryReducer };
};

const mapDispatchToProps = {
	...cityActions,
	...cityForecastActions,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);
