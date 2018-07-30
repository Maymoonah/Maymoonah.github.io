import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArcadeGame extends Component {
	render() {
		return (
			<div>
				<Link to='/projects'>
					<h1 className="title">Projects</h1>
				</Link>
				<div className="row">
					<div className="col-md-6">
						<img src="http://www.allwhitebackground.com/images/2/2581.jpg" alt="Arcade Game" width="200px" height="200px"/>
					</div>
					<div className="col-md-6">
						<p>
							- Recreating the classic arcade game Frogger using Art assets and game engine provided by Udacity.<br/>
							- Implemented Player, enemy, and other entities using Object-Oriented JavaScript.<br/>
							- Player and multiple enemies which can move around have been instantiated.
						</p>
					</div>
				</div>
			</div>			
		);
	}
}

export default ArcadeGame;