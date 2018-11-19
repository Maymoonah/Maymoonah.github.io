import React, { Component } from 'react';


class Contact extends Component {
	render() {
		return (
			<div className="container contact">		
				<div className="row">
					<div className="col-md-12">
						<h1 className="title">Contact Me</h1>
					</div>
				</div>
				<form>
					<input type="text" placeholder="First Name" required />
					<input type="text" placeholder="Last Name" required />
					<input type="email" placeholder="Email Address" required />
					<textarea placeholder="Message" required></textarea>					
				</form>
			</div>
		);
	}
}

export default Contact;