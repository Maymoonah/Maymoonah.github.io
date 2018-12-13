import React, { Component } from 'react';
import art from '../images/Pixel.png';

class PixelArt extends Component {
	render() {
		return (
			<div className="container art">
				<h2 className="projectTitle">Pixel Art</h2>
				<div className="row">
					<div className="col-md-4">
						<img className="images" src={art} alt="Pixel Art" width="100%" height="100%"/>
					</div>
					<div className="col-md-8 description">
						<ul>
							<li>Customizable canvas where the user can create art by coloring pixels.</li>
							<br />
							<li>I created the application using HTML5, CSS3, and JavaScript.</li>
							<br />
							<li>The player can customize the canvas by choosing the width and grid height and width.</li>
							<br />
							<li>The player can also pick different colors to create a colorful canvas.</li>
							<br />
							<li>The canvas can be reset at any time.</li>
						</ul>
						<br/>
							<button className="btn projectBtn"><a href="https://maymoonah.github.io/Pixel-Art-Maker/">Go To Pixel Art!</a></button>
					</div>
				</div>
			</div>
		);
	}
}

export default PixelArt;