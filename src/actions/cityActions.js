import axios from 'axios';
import {
	GET_CITY,
	LOADING,
	ERROR,
} from '../types/cityTypes';

export const getCity = (city) => async (dispatch) => {
	const uri = {
		host: 'https://api.openweathermap.org/data/2.5/weather',
		city: city,
		key: '73bc99d5366df7dcfa0974bd630d9022',
	};

	dispatch({
		type: LOADING,
	});
	try {
		const respuesta = await axios.get(
			`${uri.host}?q=${uri.city}&appid=${uri.key}`
		);
		dispatch({
			type: GET_CITY,
			payload: respuesta.data,
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: 'The city is undefined',
		});
	}
};
