import './Skills.css'

function Skills() {
	const skills = ["HTML", "CSS", "JavaScript", "React (beginner)", "Bootstrap", "Tailwind (basics)"];

	return (
		<section id="skills" className="skills">
			<h2>Technical Skills</h2>
			<div className="skills-container">
				{skills.map((skill, index) => (
					<div key={index} className="skill-pill">
						{skill}
					</div>
				))}
			</div>
			<p className="skill-note">Planning to learn Next.js next.</p>
		</section>
	)
}

export default Skills