import React from 'react';

let style = {
	height: 30,
	fontSize: '1.5em',
	background: 'white',
	borderRadius: 5,
	boxShadow: 'inset 2px 2px 3px rgba(0,0,0,0.5)'
}

export default class Display extends React.Component {
	render () {
		return (
			<p style={style}>{this.props.output} 
				<span onClick={this.props.backspace}
				style={{float: 'right', cursor: 'pointer'}}>←</span>
			</p>
		);
	}
}