import axios from 'axios';
import {
	GET_CITY_HISTORY,
	LOADING,
	ERROR,
} from '../types/cityTypes';

export const getHistoryCity = (city) => async (
	dispatch
) => {
	const url = {
		host: 'http://api.openweathermap.org/data/2.5/',
		api_key: '73bc99d5366df7dcfa0974bd630d9022',
		cnt: 7,
		city: city,
	};

	dispatch({
		type: LOADING,
	});
	try {
		const response = await axios.get(
			`${url.host}forecast?q=${url.city}&cnt=${url.cnt}&appid=${url.api_key}`
		);
		dispatch({
			type: GET_CITY_HISTORY,
			payload: { ...response.data },
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: `City notfound, error: ${error.message}`,
		});
	}
};
