import './Projects.css'

function Projects() {
	const projects = [
		{ title: "Portfolio Website", description: "Built with React functional components and CSS files." },
		{ title: "Static HTML Site", description: "Practiced HTML & CSS structure and semantics." },
		{ title: "JavaScript Mini Apps", description: "Calculator, Quiz, and small DOM experiments." }
	];

	return (
		<section id="projects" className="projects">
			<h2>My Projects</h2>
			<div className="projects-grid">
				{projects.map((project, index) => (
					<div key={index} className="project-card">
						<h3 className="project-title">{project.title}</h3>
						<p className="project-description">{project.description}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Projects