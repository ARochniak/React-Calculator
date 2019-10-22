import React from 'react';
import { connect } from 'react-redux';
import soundPath from "./media/click.mp3";

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, ".", 9, "+/-"];
const operators = ["+", "-", "*", "/", "(", ")", "=", "C"];

const Keyboard = (props) => {
	const sound = new Audio(soundPath);

	const soundClick = (e) => {
		if ( !(e.target.tagName === "BUTTON") ) return;
		sound.play();
	}

	const contentCreation = (content) => {
		const {plusMinus, result, clear, addSymbol} = props;
		const res = content.map( (value, key) => {
			let clickHandler;
			switch (value) {
				case "+/-":
					clickHandler = plusMinus;
					break;
				case "=":
					clickHandler = result;
					break;
				case "C":
					clickHandler = clear;
					break;
				default:
					clickHandler = addSymbol.bind(null,value);
			}
			return (
				<button key={key} onClick={clickHandler}>{value}</button>
			)
		});
		return res;
	}

	return (
		<div className="calcButton" onClick={soundClick}>
			<div className="digits">
				{contentCreation(digits)}
			</div>	
			<div className="operators">
				{contentCreation(operators)}
			</div>	
		</div>
	);
}

const mapDispatchToProps = (dispatch) => {
	return{
    	addSymbol: (symbol) => {
    		dispatch({
			    type: 'ADD SYMBOL',
			    symbol
		    })
    	},
    	clear: () => {
		    dispatch({
			    type: 'CLEAR'
		    })
    	},
    	result: () => {
		    dispatch({
			    type: 'RESULT'
		    })
		},
    	plusMinus: () => {
			dispatch({
				type: "PLUSMINUS"
			})
    	}
    }
}

export default connect(null, mapDispatchToProps)(Keyboard);