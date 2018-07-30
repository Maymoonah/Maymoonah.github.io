import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MemoryGame extends Component {
	render() {
		return (
			<div>
				<Link to='/projects'>
					<h1 className="title">Projects</h1>
				</Link>
				MemoryGame
			</div>
		);
	}
}

export default MemoryGame;