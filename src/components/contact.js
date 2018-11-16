import React, { Component } from 'react';
import Navbar from './navbar';

class Contact extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<div className="contact container">		
					<div className="row">
						<div className="col-md-12">
							<h1 className="title">Contact</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;