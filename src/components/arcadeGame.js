import React, { Component } from 'react';
import arcade from '../images/Arcade.jpg';

class ArcadeGame extends Component {
	render() {
		return (
			<div className="container arcade">
				<h2 className="projectTitle">The Arcade Game</h2>
				<div className="row">
					<div className="col-md-5">
						<img className="images" src={arcade} alt="Arcade Game" height="349px" width="350px"/>
					</div>
					<div className="col-md-7 description">
						<ul>
							<li>Recreating the classic arcade game Frogger using Art assets and game engine provided by Udacity.</li><br/>
							<li>Implemented Player, enemy, and other entities using Object-Oriented JavaScript.</li><br/>
							<li>Player and multiple enemies which can move around have been instantiated.</li><br />
							<li>This game has 3 levels and 5 lives which reset at each level. The player needs 5 points to move on to the next level.
							Each time the player crosses the field safely to the water, he scores 1 point.</li><br />
							<li>The objective of the game is to get the player across the field to the water without running into the enemy bugs.</li><br />
							<li>The player can collect different types of gems along the way.</li><br />
							<li>Once the player crosses to the river 5 times without losing all lives, the player moves to the next level where the speed of 
							the enemy bugs increases.</li><br />
							<li>The game ends once the player successfully completes all 3 levels, or when the player loses all lives.</li>
						</ul>
						<br/>
							<button className="btn projectBtn"><a href="https://maymoonah.github.io/Arcade-Game/">Go To Arcade Game!</a></button>
					</div>
				</div>
			</div>			
		);
	}
}

export default ArcadeGame;