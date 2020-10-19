import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import cityHistoryReducer from './cityHistoryReducer';

export default combineReducers({
	cityReducer,
	cityHistoryReducer,
});
