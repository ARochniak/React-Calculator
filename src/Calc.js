import React from 'react';
import Display from './components/display';
import KeyBoard from './components/keyboard';
import './calc.css';


export default class Calc extends React.Component {
	render () {
		const cancelSelect = () => false;
		return (
			<div className="calc" 
				onMouseDown={cancelSelect} 
				onSelect={cancelSelect}>
				<h1>**Calculator**</h1>
				<Display />
				<KeyBoard />
			</div>
		);
	}
}