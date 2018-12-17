import React, { Component } from 'react';
import memory from '../images/Memory.jpg';

class MemoryGame extends Component {
	render() {
		return (
			<div className="container memory">
				<h2 className="projectTitle">The Memory Game</h2>
				<div className="row">
					<div className="col-md-4">
						<img src={memory} className="images" alt="Memory Game" height="349px" width="350px"/>
					</div>
					<div className="col-md-8 description">
						<ul>
							<li>Flip over pairs of matching cards with static non-interactive starter code provided by Udacity.</li><br />
							<li>I Added game functionality such as click handling, matching logic, and winning condition using JavaScript and jQuery.</li><br />
							<li>A player can flip no more than two cards at a time until all cards are matched.</li><br />
							<li>The game timer begins when the player clicks on the first card, and it stops as soon as the last pair of cards are
							matched.</li><br />
							<li>The player has the option of restarting the game at any point.</li><br />
							<li>After matching all the cards, the player has the option of playing again, in which case the cards and timer reset,
							or if the player chooses not to play again, the cards and timer remain as is.</li> 
						</ul>
						<br/>
						<button className="btn projectBtn"><a href="https://maymoonah.github.io/Memory-Game/">Go To Memory Game!</a></button>
					</div>
				</div>
			</div>
		);
	}
}

export default MemoryGame;