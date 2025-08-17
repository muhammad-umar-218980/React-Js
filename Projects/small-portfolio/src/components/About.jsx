import './About.css'

function About() {
	const user = {
		name: "Muhammad Umar",
		university: "NED University of Engineering & Technology (NEDUET)",
		department: "CSIT",
		location: "Karachi, Pakistan",
		intro: "Beginner in CS, exploring React and JavaScript."
	};

	return (
		<section id="about" className="about">
			<h2>About Me</h2>
			<div className="about-card">
				<div className="about-item">
					<span className="label">Name:</span>
					<span className="value">{user.name}</span>
				</div>
				<div className="about-item">
					<span className="label">University:</span>
					<span className="value">{user.university}</span>
				</div>
				<div className="about-item">
					<span className="label">Department:</span>
					<span className="value">{user.department}</span>
				</div>
				<div className="about-item">
					<span className="label">Location:</span>
					<span className="value">{user.location}</span>
				</div>
				<div className="about-item intro">
					<span className="label">Introduction:</span>
					<p className="value">{user.intro}</p>
				</div>
			</div>
		</section>
	)
}

export default About