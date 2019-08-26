import React from 'react';

export default class Calc extends React.Component {
	render () {
		return (
			<div className='calcButton'>
				<div className="digits">
					<button onClick={this.props.input}>0</button>	
					<button onClick={this.props.input}>1</button>
					<button onClick={this.props.input}>2</button><br />
					<button onClick={this.props.input}>3</button>
					<button onClick={this.props.input}>4</button>
					<button onClick={this.props.input}>5</button><br />
					<button onClick={this.props.input}>6</button>
					<button onClick={this.props.input}>7</button>
					<button onClick={this.props.input}>8</button><br />
					<button onClick={this.props.input}>.</button>
					<button onClick={this.props.input}>9</button>
					<button onClick={this.props.plusMinus}>+/-</button>
				</div>	
				<div className="operators">
					<button onClick={this.props.input}>+
					</button>
					<button onClick={this.props.input}>-
					</button><br />
					<button onClick={this.props.input}>*
					</button>
					<button onClick={this.props.input}>/
					</button><br />
					<button onClick={this.props.input}>(
					</button>
					<button onClick={this.props.input}>)
					</button><br />
					<button onClick={this.props.res}>=
					</button>
					<button  onClick={this.props.clear}>C</button>
				</div>	
			</div>
		);
	}
}