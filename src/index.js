import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import reducer from './reducers';
import {Provider} from 'react-redux';

import './index.css';
import Calc from './Calc';
import * as serviceWorker from './serviceWorker';

const initialState = {
	display: ''
};
const store = createStore(reducer, initialState);

window.store = store;

ReactDOM.render((
	<Provider store={store}>
		<Calc />
	</ Provider>
	), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();