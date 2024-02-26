export const Projects = () => {
	const items = [
		{
			name: `React Dictionary App`,

			img: "images/programmer.svg",
			review: `I worked in a full stack product team delivering web-based customer service tools. I used Typescript and React to develop our products.`,
		},
		{
			name: `React Weather App`,
			img: `images/certificate.svg`,
			review: `I worked in a backend Python team. Automating processes for industry operations team.`,
		},
	];

	return (
		<section id='skills'>
			<h1 className='title-skills'>Projects</h1>
			<div className='skills-experience'>
				<div className='experience'>
					{items.map((item, id) => (
						<div className='experience-card' key={id}>
							<img
								src={item.img}
								alt={item.name}
								className='experience-image'
							/>
							<div className='experience-text'>
								<h2 className='experience-title'>{item.name}</h2>
								<p>{item.review}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
