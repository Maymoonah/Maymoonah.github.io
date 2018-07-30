import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MemoryGame extends Component {
	render() {
		return (
			<div>
				<Link to='/projects'>
					<h1 className="title">Projects</h1>
				</Link>
				<div className="row">
					<div className="col-md-6">
						<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Memory Game" width="200px" height="200px"/>
					</div>
					<div className="col-md-6">
						<p>
							- Flip over pairs of matching cards with static non-interactive starter code provided by Udacity.<br />
							- I Added game functionality such as click handling, matching logic, and winning condition using JavaScript and jQuery.<br />
							- A player can flip no more than two cards at a time until all cards are matched.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default MemoryGame;