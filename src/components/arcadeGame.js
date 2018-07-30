import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class ArcadeGame extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="row">
					<div className="col-md-4">
						<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Arcade Game" width="100%" height="100%"/>
					</div>
					<div className="col-md-8">
						<p className="description">
							- Recreating the classic arcade game Frogger using Art assets and game engine provided by Udacity.<br/>
							- Implemented Player, enemy, and other entities using Object-Oriented JavaScript.<br/>
							- Player and multiple enemies which can move around have been instantiated.
						</p>
						<br/>
						<Link to='https://maymoonah.github.io/Memory-Game/'>
							<p>Go To Arcade Game!</p>
						</Link>
					</div>
				</div>
			</div>			
		);
	}
}

export default ArcadeGame;