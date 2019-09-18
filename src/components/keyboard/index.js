import React from 'react';
import { connect } from 'react-redux';
import soundPath from "./media/click.mp3";

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, ".", 9, "+/-"];
const operators = ["+", "-", "*", "/", "(", ")", "=", "C"];

class Keyboard extends React.Component {

	constructor (props) {
		super(props);
		this.sound = new Audio(soundPath);
		this.soundClick = this.soundClick.bind(this);
	}
	
	soundClick (e) {
		if ( !(e.target.tagName === "BUTTON") ) return;
		this.sound.play();
	}

	contentCreation (content) {
		const {plusMinus, result, clear, addSymbol} = this.props;
		const res = content.map( (value, key) => {
			let clickHandler;
			switch (value) {
				case "+/-":
					clickHandler = plusMinus.bind(this);
					break;
				case "=":
					clickHandler = result.bind(this);
					break;
				case "C":
					clickHandler = clear.bind(this);
					break;
				default:
					clickHandler = addSymbol.bind(this, value);
			}
			return (
				<button key={key} onClick={clickHandler}>{value}</button>
			)
		});
		return res;
	}

	render () {
		return (
			<div className="calcButton" onClick={this.soundClick}>
				<div className="digits">
					{this.contentCreation(digits)}
				</div>	
				<div className="operators">
					{this.contentCreation(operators)}
				</div>	
			</div>
		);
	}
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