import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';

import './index.css';
import Calc from './Calc';
import * as serviceWorker from './serviceWorker';

const initialState = {
	display: ""
};
const store = createStore(reducer, initialState);

window.store = store;

ReactDOM.render((
	<Provider store={store}>
		<Calc />
	</ Provider>
	), document.getElementById('root'));

serviceWorker.unregister();