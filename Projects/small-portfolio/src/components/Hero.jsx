import './Hero.css'

function Hero() {
	const hour = new Date().getHours();
	let greeting = "Good Night 🌙";

	if (hour >= 5 && hour < 12) greeting = "Good Morning ☀️";
	else if (hour >= 12 && hour < 18) greeting = "Good Afternoon 🌤️";
	else if (hour >= 18 && hour < 22) greeting = "Good Evening 🌆";
	else greeting = "Good Night 🌙";  

	return (
		<section className="hero">
			<div className="hero-content">
				<p className="greeting">{greeting}</p>
				<h1>Welcome to My Portfolio</h1>
				<p className="subtitle">This is my first React program and my first component.</p>
				<p className="tagline">Learning React: functional components + JSX expressions.</p>
			</div>
		</section>
	)
}

export default Hero