import React, { Component } from 'react';
import proPic from '../images/MayM.JPG';

class AboutMe extends Component {
	render() {
		return (
			<div className="about container">
				<div className="row">
					<div className="col-md-12">
						<h1 className="title">About Me</h1>
					</div>
				</div>

				<div className="row">
					<div className="col-md-5">
						<img id="profilePic" src={proPic} height="349px" width="350px" alt="Maymoonah"/>
					</div>
				
					<div className="col-md-7">
						<p className="description">
							There are two things I am passionate about. Web Devlopment/Programming & Teaching Arabic/Quran.<br />
							<br />
							I started my path in Front-End Web Development about a year and a half ago. 
							At the time, I was studying Computer Programming at Mt San Antonio College. 
							My interest in learning more programming languages led me to Codecademy. 
							I happened to stumble upon an HTML and CSS course which attracted my attention. 
							I completed the course within a few days and I completely fell in love with Web Development.
							I was eager to learn more about web development, so at first, I watched YouTube videos. 
							I then enrolled in Udemy courses. 
							And finally, I enrolled in a Front-End Web Development Nanodegree on Udacity. 
							I love creating customized websites and seeing my code come to life in the form of a beautiful website. 
							It gives me a great sense of gratification and accomplishment.<br />
							<br />
							My second passion is teaching Arabic/Quran. 
							At ICSGV, I have been teaching children of all ages and various levels how to read the Arabic language.
							I also teach them how to recite the Holy Quran. I’ve had dozens of children in my class in the seven years I’ve been teaching.
							Most of them started off as beginners and can now read Arabic without any difficulty. 
							I teach the recognition and correct pronunciation of the Arabic letters. 
							I also teach the recitation of the Quran by imitation. 
							Some of my students find it hard to pronounce certain letters because they are non-Arabs. 
							I tackle this problem by explaining to them the points of vocal articulation. 
							I also worked with a student who regained hearing. Pronouncing some letters was a challenging task for him. 
							So, I took my time teaching him points of vocal articulation. 
							I also emphasized on lip movement when I would sound the letters.<br />
							<br />
							I am always trying to keep up with all the new technologies in the Web Development field. There is so 
							much to learn as things are constantly updating. I am currently learning ReactJS, WordPress, and PHP.
							I created this portfolio website from scratch using HTML5, CSS3, and ReactJS. I used React components, 
							React Route, and React Bootstrap. Well that's enough about me, check out some of my work!
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutMe;