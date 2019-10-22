import React from 'react';
import { connect } from 'react-redux';
import './style.css';

const Display = (props) => {
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

const mapStateToProps = (state) => {
	return {display: state.display}
};

export default connect(mapStateToProps)(Display);