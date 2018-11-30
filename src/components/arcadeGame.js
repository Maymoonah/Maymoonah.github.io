import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arcade from '../images/Arcade.jpg';

class ArcadeGame extends Component {
	render() {
		return (
			<div className="container arcade">
				<h2 className="projectTitle">The Arcade Game</h2>
				<div className="row">
					<div className="col-md-4">
						<img className="images" src={arcade} alt="Arcade Game" width="100%" height="100%"/>
					</div>
					<div className="col-md-8 description">
						<p>
							<ul>
								<li>Recreating the classic arcade game Frogger using Art assets and game engine provided by Udacity.</li><br/>
								<li>Implemented Player, enemy, and other entities using Object-Oriented JavaScript.</li><br/>
								<li>Player and multiple enemies which can move around have been instantiated.</li>
							</ul>
						</p>
						<br/>
						<Link to='https://maymoonah.github.io/Arcade-Game/'>
							<button className="btn projectBtn">Go To Arcade Game!</button>
						</Link>
					</div>
				</div>
			</div>			
		);
	}
}

export default ArcadeGame;