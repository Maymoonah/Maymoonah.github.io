import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class MemoryGame extends Component {
	render() {
		return (
			<div>
				<Navbar />		
				<div className="row">
					<div className="col-md-4">
						<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Memory Game" width="100%" height="100%"/>
					</div>
					<div className="col-md-8">
						<p className="description">
							- Flip over pairs of matching cards with static non-interactive starter code provided by Udacity.<br />
							- I Added game functionality such as click handling, matching logic, and winning condition using JavaScript and jQuery.<br />
							- A player can flip no more than two cards at a time until all cards are matched.
						</p>
						<br/>
						<a href='https://maymoonah.github.io/Memory-Game/'>
							<p>Go To Memory Game!</p>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default MemoryGame;