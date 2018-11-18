import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MemoryGame extends Component {
	render() {
		return (
			<div className="container memory">
				<div className="row">
					<div className="col-md-4">
						<img src="../../images/Memory.png" alt="Memory Game" width="100%" height="100%"/>
					</div>
					<div className="col-md-8 description">
						<p>
							- Flip over pairs of matching cards with static non-interactive starter code provided by Udacity.<br />
							- I Added game functionality such as click handling, matching logic, and winning condition using JavaScript and jQuery.<br />
							- A player can flip no more than two cards at a time until all cards are matched.
						</p>
						<br/>
						<Link to='https://maymoonah.github.io/Memory-Game/'>
							<p>Go To Memory Game!</p>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default MemoryGame;