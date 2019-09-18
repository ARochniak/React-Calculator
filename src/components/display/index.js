import React from 'react';
import { connect } from 'react-redux';
import './style.css';


class Display extends React.Component {
	clickHandler () {
		this.props.dispatch({type: "BACKSPACE"});
	}
	render () {
		return (
			<div className="container">
				<p className="display">{this.props.display}</p>
				<div className="backspace" 
					onClick={this.clickHandler.bind(this)}>←</div>
			</div>	
		);
	}
}

const mapStateToProps = (state) => {
	return {display: state.display}
};

export default connect(mapStateToProps)(Display);