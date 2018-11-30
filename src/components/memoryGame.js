import React, { Component } from 'react';
import memory from '../images/Memory.jpg';

class MemoryGame extends Component {
	render() {
		return (
			<div className="container memory">
				<h2 className="projectTitle">The Memory Game</h2>
				<div className="row">
					<div className="col-md-4">
						<img src={memory} alt="Memory Game" width="100%" height="100%"/>
					</div>
					<div className="col-md-8 description">
						<p>
							<ul>
								<li>Flip over pairs of matching cards with static non-interactive starter code provided by Udacity.</li><br />
								<li>I Added game functionality such as click handling, matching logic, and winning condition using JavaScript and jQuery.</li><br />
								<li>A player can flip no more than two cards at a time until all cards are matched.</li>
							</ul>
						</p>
						<br/>
						<button className="btn projectBtn"><a href="https://maymoonah.github.io/Memory-Game/">Go To Memory Game!</a></button>
					</div>
				</div>
			</div>
		);
	}
}

export default MemoryGame;