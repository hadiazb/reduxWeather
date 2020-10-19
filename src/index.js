import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import './styles/Global.css';
import { Provider } from 'react-redux';
import Store from './store/index';

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('app')
);
