import React from 'react';
import { connect } from 'react-redux';

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, ".", 9, "+/-"];
const operators = ["+", "-", "*", "/", "(", ")", "=", "C"];
const sound = new Audio(require("./media/click.mp3"));

interface KeyboardProps {
	plusMinus: () => void;
	result: () => void;
	clear: () => void;
	addSymbol: (symbol: string) => void;
}

interface Action {
	type: string;
	symbol?: string;
}

const Keyboard = (props: KeyboardProps) => {

	const soundClick = (e: any) => {
		if ( !(e.target.tagName === "BUTTON") ) return;
		sound.play();
	}

	const contentCreation = (content: any[]) => {
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

const mapDispatchToProps = (dispatch: (action: Action) => void) => {
	return{
    	addSymbol: (symbol: string) => {
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