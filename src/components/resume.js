import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Resume extends Component {
	render() {
		return (
			<div className="resume ">	
				<header className="row resumeHeader">
					<div className="col-md-3">
						<p className="contactInfo">
							West Covina, CA 91792<br />
							(714) 757-3945<br />
							Maymoonah.ca@gmail.com
						</p>
					</div>
					<div className="col-md-6">
						<h1 className="title">Maymoonah Mohammed</h1>
					</div>
					<div className="col-md-3">
						<p className="social">
							https://github.com/Maymoonah<br />
							https://www.linkedin.com/<br />
							in/maymoonahm
						</p>
					</div>
				</header>
				<div className="summary">
					<h1>Summary</h1>
					<p>
						Front-End Web Developer skilled in building web applications using HTML, CSS, and JavaScript. 
						Over 7 years of experience in education which taught me patience in dealing with different personality types 
						and problem-solving by formulating solutions to different learning hindrances.
					</p>
				</div>
				<div className="skills">
					<h1>Skills</h1>
					<p>
						<span>Technical Skills:</span><br />
						<span>Languages:</span> JavaScript, HTML5, CSS3, C++, SQL, PHP<br />
						<span>Frameworks/Libraries:</span> jQuery, Knockout.js, Bootstrap, Jasmine, BackboneJS, ReactJS<br />
						<span>Other:</span> Git/GitHub, AJAX, MS Office
					</p>
				</div>
				<div className="projects">
					<h1>Projects</h1>
					<ul>
						<span className="title">Classic Arcade Game Clone</span> - <Link to='https://maymoonah.github.io/Arcade-Game'>https://maymoonah.github.io/Arcade-Game</Link><span className="date">March 2018</span><br /><br />
						<li>Recreating the classic arcade game Frogger using Art assets and game engine provided by Udacity.</li><br />
						<li>Implemented Player, enemy, and other entities using Object-Oriented JavaScript.</li><br />
						<li>Player and multiple enemies which can move around have been instantiated.</li><br />

						<span className="title">Memory Game</span> - <Link to='https://maymoonah.github.io/Memory-Game/'>https://maymoonah.github.io/Memory-Game/</Link><span className="date">January 2018</span><br /><br />
						<li>Flip over pairs of matching cards with static non-interactive starter code provided by Udacity.</li><br />
						<li>Added game functionality such as click handling, matching logic, and winning condition using JavaScript and jQuery.</li><br />
						<li>A player can flip no more than two cards at a time until all cards are matched.</li><br />

						<span className="title">Neighborhood Map</span> - <Link to='https://maymoonah.github.io/Neighborhood-Map/'>https://maymoonah.github.io/Neighborhood-Map/</Link><span className="date">February 2018</span><br /><br />
						<li>Map of places in my neighborhood such as restaurants and schools.</li><br />
						<li>Created a map using Google Maps JavaScript API and the framework Knockout.js.</li><br />
						<li>The user can read additional information and see a picture of the location.</li><br />
					</ul>
				</div>
				<div className="experience">
					<h1>Experience</h1>
					<p>
						<span className="title">Islamic Center of San Gabriel Valley</span><span className="date">Teacher Rowland Heights, CA | October 2011 - Present</span><br /><br />
						<li>Teach children of all ages and levels how to read the Arabic Language and recite the Holy Book the Quran.</li><br />
						<li>Assess each student’s level, teach recognition and correct pronunciation of all letters, and teach recitation by imitation.</li><br />
						<li>Teach non-Arabic speakers challenging letters by explaining points of vocal articulation from which letters are produced.</li><br />
						<li>Worked with a student who regained hearing and taught him the Arabic letters by explaining vocal articulation and
						putting emphasis on lip movement while pronouncing the letters.</li><br />
						<li>Taught dozens of children through the years how to read starting from the Arabic letters to reading Arabic proficiently.</li><br />
						<li>Motivated by my love to help others especially children, to share the knowledge that I have, and to experience the gratification of seeing the fruits of my labor.</li><br />
					</p>
				</div>
				<div className="education">
					<h1>Education & Training</h1>
					<p>
						<span className="title">Udacity –</span> Front-End Web Developer Nanodegree <span className="date">2018</span><br />
						<span className="title">Mt. San Antonio College, Walnut –</span> Computer Programming, AS <span className="date">2017</span><br />
						<span className="title">Mt. San Antonio College, Walnut –</span> Computer Database Management Systems, AS <span className="date">2017</span><br />
						<span className="title">Mt. San Antonio College, Walnut –</span> Liberal Arts and Sciences – Emphasis in Mathematics, AA <span className="date">2017</span><br />
					</p>
				</div>
				<div className="certification">
					<h1>Certification</h1>
					<p>
						<span className="title">Mt. San Antonio College, Walnut – </span>Certified CIS Professional in C++ Programming <span className="date">2017</span><br />
						<span className="title">Mt. San Antonio College, Walnut – </span>Certificate in Introduction to Computer Information Technology <span className="date">2014</span><br />
					</p>
				</div>
			</div>
		);
	}
}

export default Resume;