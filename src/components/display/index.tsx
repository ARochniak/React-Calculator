import React from 'react';
import { connect } from 'react-redux';
import './style.css';

interface Param {
    type: string;
}
interface State {
	display: string;
}
interface DisplayProps {
	dispatch: (action: Param) => void;
	display: string;
} 

const Display = (props: DisplayProps) => {
	const {dispatch, display} = props;

	const clickHandler = () => {
		dispatch({type: "BACKSPACE"});
	}

	return (
		<div className="container">
			<p className="display">{display}</p>
			<div className="backspace" 
				onClick={clickHandler}>←</div>
		</div>	
	);
}

const mapStateToProps = (state: State) => {
	return {display: state.display}
};

export default connect(mapStateToProps)(Display);