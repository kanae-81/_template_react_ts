import React from 'react';
import { render } from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './Store/store';

render(
	<Provider store={store}>
		{console.log(store)}
		<App />
	</Provider>,
	document.getElementById('app'),
);
