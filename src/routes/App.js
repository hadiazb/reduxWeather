import React from 'react';
import {
	Route,
	Switch,
	BrowserRouter as Routes,
} from 'react-router-dom';
import Home from '../containers/Home/index';
import History from '../containers/History';
import NotFound from '../containers/NotFound/index';

const App = () => {
	return (
		<Routes>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/history' exact component={History} />
				<Route path='/*' component={NotFound} />
			</Switch>
		</Routes>
	);
};

export default App;
