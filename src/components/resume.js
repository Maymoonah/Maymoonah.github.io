import React, { Component } from 'react';
import Navbar from './navbar';

class Resume extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="resume container">	
					<div className="row">
						<div className="col-md-12">
							<h1 className="title">Resume</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Resume;