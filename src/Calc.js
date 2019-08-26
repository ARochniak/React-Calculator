import React from 'react';
import Display from './components/display';
import KeyBoard from './components/keyboard';
import "./calc.css";
import sound from "./media/click.mp3"

export default class Calc extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: "",
		};
		this.prevSymbol = "";
		this.input = this.input.bind(this);
		this.clear = this.clear.bind(this);
		this.plusMinus = this.plusMinus.bind(this);
		this.backspace = this.backspace.bind(this);
		this.soundClick = this.soundClick.bind(this);
		this.res = this.res.bind(this);
	}
	
	input (e) {
		let symbol = e.target.innerHTML;
		let prevSymbol = this.prevSymbol;
		let display = this.state.display;
		if (display==="" && !Number.isInteger(+symbol)) return;
		if ( !Number.isInteger(+symbol) && !Number.isInteger(+prevSymbol)) {
			display = this.state.display.slice(0,-1);
		}
		this.prevSymbol = symbol;
		this.setState({
			display: display + symbol,
		});
	}
	plusMinus () {
		let display = this.state.display;
		if (display.search(/\(-\d+$/) + 1) {
			display = display.replace(/\(-(\d+$)/, "$1");
			this.setState({
			display: display
			})
			return;
		}
		display = display.replace(/(\d+)$/,"(-$1");
		this.setState({
			display: display
		})
	}
	clear () {
		this.setState({
			display: ""
		})
	}
	backspace () {
		if (this.state.display === "") return;
		let display = this.state.display.slice(0, -1);
		this.prevSymbol = display.slice(-1);
		console.log(display);
		this.setState({
			display: display
		})
	}
	res () {
		let expresssion = this.state.display;
		let res;
		if (!Number.isInteger(+this.prevSymbol)) {
			expresssion = expresssion.slice(0, -1);
		}
		if ( expresssion.search(/\([^\)]*$/) + 1) expresssion = expresssion + ")";
		try {res = eval(expresssion) } catch {
			alert("The expresion isn't correct!");
			res = expresssion;
		};
		this.prevSymbol = expresssion.slice(-1);
		this.setState({
			display: ""+res
		})
	}
	soundClick (e) {
		if ( !(e.target.tagName === "BUTTON") ) return;
		let click = new Audio();
		click.src = sound;
		click.play();

	}
	render () {
		let cancelSelect = ()=> {
			return false;
		}
		return (
		<div className="calc" 
			onClick={this.soundClick}
			onMouseDown={cancelSelect} 
			onSelect={cancelSelect}>
			<h1>**Calculator**</h1>
			<Display 
				output={this.state.display} 
				backspace={this.backspace}/>
			<KeyBoard 
				input={this.input} 
				res={this.res} 
				clear={this.clear}
				plusMinus={this.plusMinus}/>
		</div>
		);
	}
}