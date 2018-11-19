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
				<form action="contactForm.php" method="post">
					<input type="text" placeholder="First Name" required />
					<input type="text" placeholder="Last Name" required />
					<input type="email" placeholder="Email Address" required />
					<textarea placeholder="Message" required></textarea>	
					<input type="submit" value="Send"/>									
				</form>
			</div>
		);
	}
}

export default Contact;