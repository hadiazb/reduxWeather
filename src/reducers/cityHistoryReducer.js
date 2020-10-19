import {
	LOADING,
	ERROR,
	GET_CITY_HISTORY,
} from '../types/cityTypes';

const INITIAL_STATE = {
	forecast: [],
	loading: false,
	error: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GET_CITY_HISTORY:
			return {
				...state,
				forecast: action.payload,
				loading: false,
				error: '',
			};
		case LOADING:
			return { ...state, loading: true };

		case ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};